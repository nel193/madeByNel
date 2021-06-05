import React, {useState, useEffect, useRef} from 'react'

// import SrcFontana from './SrcFontana'
import '../assets/styles/components/FontanaPixels.scss'
const FontanaPixels = () => {
    // const png = new Image();
    // png.src = SrcFontana

    //performance critical parameters
    const pixelStep = 1//default 1; increase for images of higher resolution
    const maxParticlesToProcessInOneFrame = 40000
    const stationaryParticlesSkipFrames = 1 //how much frames stationary particles should skip

    //additional performance oriented paramteres
    // Max distance, past that the force will be 0
    const maxDistance = 144
    const mouseRadius = 30
    const colorTreshold = 10
    const colorAlphaTreshold = 150
    const zoomLevel = 1

    //customization parameters
    const ctxFillStyle = 'rgba(0,0,0,0)'
    const speedOfActivatingParticle = 1
    const speedOfRestoringParticle = 0.1

    const mouse = {
        x: null,
        y: null
    }

    let previousId = 0
    let currentFrame = 0
    const blackColor = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    }

    let particles = []

    let animationFrame = null

    class Particle {
        constructor(x, y, color, imageData) {
            this.renderGroup = previousId++ % stationaryParticlesSkipFrames
            this.x = x
            this.y = y
            this.prevX = x
            this.prevY = y
            this.color = color
            this.size = pixelStep
            this.baseX = x
            this.baseY = y
            this.density = (Math.random() * 5) + 2
            this.imageData = imageData
            this.imageWidth = imageData.width
            this.draw()
        }
        cleanPreviousDraw() {
            const data = this.imageData.data
            const imageWidth4 = this.imageWidth * 4
            const colorIndex = ((this.prevY | 0) * imageWidth4) + ((this.prevX | 0) * 4)
            const doubleSize = this.size * 2
            for (let i = 0; i < doubleSize; i++) {
                let rowIndex = colorIndex + i * imageWidth4
                for (let j = 0; j < doubleSize; j++) {
                    const offset = rowIndex + j * 4
                    data[offset] = blackColor.r
                    data[offset + 1] = blackColor.g
                    data[offset + 2] = blackColor.b
                    data[offset + 3] = blackColor.a
                }
            }
        }
        draw() {
            this.cleanPreviousDraw()
            const data = this.imageData.data
            const imageWidth4 = this.imageWidth * 4
            const colorIndex = ((this.y | 0) * imageWidth4) + ((this.x | 0) * 4)
            const doubleSize = this.size * 2
            const color = this.color
            for (let i = 0; i < doubleSize; i++) {
                let rowIndex = colorIndex + i * imageWidth4
                for (let j = 0; j < doubleSize; j++) {
                    const offset = rowIndex + j * 4
                    data[offset] = color.r
                    data[offset + 1] = color.g
                    data[offset + 2] = color.b
                    data[offset + 3] = color.a
                }
            }
        }
        update() {
            this.prevX = this.x
            this.prevY = this.y

            // Collision detection
            let dx = mouse.x - this.x
            let dy = mouse.y - this.y
            let distance = Math.sqrt(dx * dx + dy * dy);

            let redraw = false
            if (distance < mouseRadius + this.size) {
                //it can happen that dinstance is 0, and division by 0 is undefined
                let forceDirectionX = dx / distance || 0
                let forceDirectionY = dy / distance || 0
                let force = (maxDistance - distance) / maxDistance;
                if (force < 0)
                    force = 0;
                const forceTimesDensity = force * this.density * speedOfActivatingParticle
                let directionX = (forceDirectionX * forceTimesDensity);
                let directionY = (forceDirectionY * forceTimesDensity); //Ch.this
                this.x -= directionX
                this.y -= directionY
                redraw = true
            } else {
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx * speedOfRestoringParticle // Speed Particles return to ori
                    if (Math.abs(this.baseX - this.x) <= this.size) {
                    this.x = this.baseX
                    }
                    redraw = true
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy * speedOfRestoringParticle // Speed Particles return to ori
                    if (Math.abs(this.baseY - this.y) <= this.size) {
                    this.y = this.baseY
                    }
                    redraw = true
                }
            }
            if (redraw) {
                this.draw()
            } else if (currentFrame === this.renderGroup) {
                this.draw()
            }
        }
    }

    function drawImage(ctx, cam) {
        cancelAnimationFrame(animationFrame)
        const context = ctx
        const imageBase= context.createImageData(context.canvas.width, context.canvas.height);
        // const imageBase= context.drawImage(cam, 0, 0);
        console.log(imageBase)
        for (let i = 0; i < imageBase.data.length; i++) {
                imageBase.data[i] = (i + 1) % 4 ? 0 : 0 //R: 0, G: 0, B: 0, A: 255
        }
        // const srcImgData = context.getImageData(0, 0, context.canvas.width, context.canvas.height)
        // console.log(srcImgData)
        function particularizer(srcImgData) {
            for (let y = 0, y2 = srcImgData.height; y < y2; y += pixelStep) {
                for (let x = 0, x2 = srcImgData.width; x < x2; x += pixelStep) {
                    let colorIndex = (y * 4 * srcImgData.width) + (x * 4)
                    let alphaColor = srcImgData.data[colorIndex + 3]
                    //ignore invisible pixels
                    if (alphaColor >= colorAlphaTreshold) {
                        let color = {
                            r: srcImgData.data[colorIndex],
                            g: srcImgData.data[colorIndex + 1],
                            b: srcImgData.data[colorIndex + 2],
                            a: alphaColor
                        }
                        if (color.r >= colorTreshold || color.g >= colorTreshold || color.b >= colorTreshold) {
                            let particle = new Particle(x * zoomLevel, y * zoomLevel, color, srcImgData)
                            particles.push(particle)
                        }
                    } /* These number effect png size but its to high */
                }
            }
        }

        function animate() {
            currentFrame++
            if (currentFrame > stationaryParticlesSkipFrames) {
                currentFrame = 0
            }
            for (let i = 0; i < particles.length; i++) {
                particles[i].update()
            }
            // context.putImageData(imageBase, 0, 0)
        }

        function drawFrame(ctx, cam) {
            ctx.drawImage(cam, 0, 0);
            const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.putImageData(imageData, 0, 0);
            // particularizer(imageData)
            animate()
        }

        function animateFrame() {
            animationFrame = requestAnimationFrame(() => {
                drawFrame(ctx, cam)
                // animate()
                animateFrame()
            })
        }
        animateFrame()
    }

    
    // function drawFrame(ctx, video) {
    //     const context = ctx
    //     context.drawImage(video, 0, 0);
    //     const imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
    //     context.putImageData(imageData, 0, 0);
    //     // setTimeout(function () {
    //     //     drawFrame(ctx, video);
    //     // }, 10);
    // }

    function startCamera() {
        const constraints = {
            advanced: [{
                facingMode: "environment"
            }]
        };
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
            .getUserMedia({
                video: constraints, 
                audio: false
            })
            .then(initCamera)
            .catch(console.error);
        }

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x + canvas.clientLeft
            mouse.y = e.y + canvas.clientTop
        })

        window.addEventListener('touchstart', (e) => {
            mouse.x = e.x + canvas.clientLeft
            mouse.y = e.y + canvas.clientTop
        })
    
        
        // window.addEventListener('resize', drawFrame(ctx, cam))
    }

    function initCamera(stream) {
        cam.srcObject = stream;
        cam.play();
        setTimeout(()=>{
            drawImage(ctx, cam)
        }, 1000)
    }

    const canvasRef = useRef()
    const container = useRef()
    const camContainer = useRef()
    let cam
    let canvas
    let ctx

    useEffect(()=>{
        cam = camContainer.current;
        const canvasContainer= container.current;
        canvas = canvasRef.current;
        ctx = canvas.getContext('2d')
        console.log(cam.videoWidth)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log('ya esta montado')
        // drawFrame(ctx, cam)
    }, [drawImage])
    
    return (
        <section ref={container} className='atomizer__container'>
            <div className='atomizer__button-container'>
                <button className='btn secondary' onClick={startCamera}>Atomizar</button>
            </div>
            <video className='atomizer__cam' ref={camContainer} width='400' height='200'/> 
            <canvas className='atomizer__canvas' ref={canvasRef} />           
        </section>
    )
}

export default FontanaPixels
