import React, {useState, useEffect, useRef} from 'react'

import SrcPixels from './SrcPixels'
import '../assets/styles/components/Pixels.scss'
const Pixels3 = () => {
    const png = new Image();
    png.src = SrcPixels

    //performance critical parameters
    const pixelStep = 1//default 1; increase for images of higher resolution
    const maxParticlesToProcessInOneFrame = 40000
    const stationaryParticlesSkipFrames = 5 //how much frames stationary particles should skip

    //additional performance oriented paramteres
    // Max distance, past that the force will be 0
    const maxDistance = 144
    const mouseRadius = 120
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

    let particlesMatrix = []
    particlesMatrix.length = png.height
    
    for (let i = 0; i < particlesMatrix.length; i++) {
        let tmpArr = particlesMatrix[i] = []
        tmpArr.length = png.width
    }

    let previousId = 0
    let currentFrame = 0
    const blackColor = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    }

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

    let animationFrame = null

    function initializeCanvas(ctx, canv) {
        cancelAnimationFrame(animationFrame)

        const imageData = ctx.createImageData(canv.width, canv.height)
        // for (let i = 0; i < imageData.data.length; i++) {
        //     imageData.data[i] = (i + 1) % 4 ? 0 : 0 //R: 0, G: 0, B: 0, A: 255
        // }


        let particles = []


        function drawImage() {
            let imageWidth = png.width; //These to values crop if / sum no.
            let imageHeight = png.height;
            const srcImageData = ctx.getImageData(0, 0, imageWidth, imageHeight); //Gets img data for particles
            ctx.clearRect(0, 0, canv.width, canv.height); // Clears the original img as its now being stored in the variable data.

            particles = []
            for (let y = 0, y2 = srcImageData.height; y < y2; y += pixelStep) {
                for (let x = 0, x2 = srcImageData.width; x < x2; x += pixelStep) {
                        let colorIndex = (y * 4 * srcImageData.width) + (x * 4)
                        let alphaColor = srcImageData.data[colorIndex + 3]
                        //ignore invisible pixels
                        if (alphaColor >= colorAlphaTreshold) {
                        let color = {
                            r: srcImageData.data[colorIndex],
                            g: srcImageData.data[colorIndex + 1],
                            b: srcImageData.data[colorIndex + 2],
                            a: alphaColor
                        }
                        if (color.r >= colorTreshold || color.g >= colorTreshold || color.b >= colorTreshold) {
                            let particle = new Particle(x * zoomLevel, y * zoomLevel, color, imageData)
                            particles.push(particle)
                        }
                    } /* These number effect png size but its to high */
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
                ctx.putImageData(imageData, 0, 0)
            }

            function animateFrame() {
                animationFrame = requestAnimationFrame(() => {
                    animate()
                    animateFrame()
                })
            }
            animateFrame()
        }

        console.log('page has loaded');
        ctx.drawImage(png, 0, 0, canv.width, canv.height);
        drawImage();
    }


    const canvasRef = useRef()
    const container = useRef()


    useEffect(()=>{
        const canvasContainer= container.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')
        canvas.width =  window.innerWidth
        canvas.height = window.innerHeight

        window.addEventListener('mousemove', (e) => {
            mouse.x = event.x + canvas.clientLeft
            mouse.y = event.y + canvas.clientTop
        })
        window.addEventListener('touchstart', (e) => {
            mouse.x = event.x + canvas.clientLeft
            mouse.y = event.y + canvas.clientTop
        })
        
        window.addEventListener('resize', initializeCanvas(ctx, canvas))
        window.addEventListener('load', initializeCanvas(ctx, canvas), {
            once: true
        })
        

    }, [initializeCanvas])

    return (
        <section ref={container} className='particles__container'>
            <canvas className='particles__container-canvas' ref={canvasRef} />
        </section>
    )
}

export default Pixels3
