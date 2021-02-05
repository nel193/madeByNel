import React, {useState, useEffect, useRef} from 'react'

import SrcPixels from './SrcPixels'
import '../assets/styles/components/Pixels.scss'
const Pixels2 = () => {

    let particleArray = []
    let imageData = []

    // mouse
    let mouse = {
        x: null,
        y: null,
        radius: 30
    }

    function drawImage(ctx, canvas) {
        let imageWidth = canvas.width 
        let imageHeight = canvas.height
        const data = ctx.getImageData(0, 0, imageWidth, imageHeight)
        console.log(data)
        // ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the original img as its now being stored in the variable data.

        // ctx.fillStyle = 'rgba(255, 255, 255, 0)';

        class Particle {
            constructor(x, y, color, size = 2) {
                this.x = Math.round(x + canvas.width / 2 - imageWidth * 2)
                this.y = Math.round(y + canvas.height / 2 - imageHeight * 2)
                this.color = color
                this.size = size
                
                // Records base and previous positions to repaint the canvas to its original background color
                this.baseX = Math.round(x + canvas.width / 2 - imageWidth * 2)
                this.baseY = Math.round(y + canvas.height / 2 - imageHeight * 2)
                this.previousX = null
                this.previousY = null
                this.density = (Math.random() * 10) + 2
            }
            stringifyColor() {
                return `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a}`
            }
            update() {
                ctx.fillStyle = this.stringifyColor()
                // collision detection
                let dx = mouse.x - this.x
                let dy = mouse.y - this.y
                let distance = Math.sqrt(dx * dx + dy * dy)
                let forceDirectionX = dx / distance
                let forceDirectionY = dy / distance
                
                // max distance, past that the force will be 0
                const maxDistance = 20
                let force = (maxDistance - distance) / maxDistance
                if (force < 0) force = 0
                
                let directionX = (forceDirectionX * force * this.density)
                let directionY = (forceDirectionY * force * this.density)
                
                this.previousX = this.x
                this.previousY = this.y
                if (distance < mouse.radius + this.size) {
                    this.x -= directionX
                    this.y -= directionY
                } else {
                    // Rounded to one decimal number to as x and y cannot be the same (whole decimal-less integer) 
                    // as baseX and baseY by decreasing using a random number / 20
                    if (Math.round(this.x) !== this.baseX) {
                    let dx = this.x - this.baseX
                    this.x -= dx / 20
                    }
                    if (Math.round(this.y) !== this.baseY) {
                    let dy = this.y - this.baseY
                    this.y -= dy / 20
                    }
                }
            }
        }

        function createParticle(x, y, size) {
            if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
            let positionX = x
            let positionY = y

            let offset = (y * 4 * data.width) + (x * 4)
            let color = {
                r: data.data[offset],
                g: data.data[offset + 1],
                b: data.data[offset + 2],
                a: data.data[offset + 3]
            }
            
            return new Particle(positionX  , positionY , color, size)
            }
        }
        
        // Instead of drawing each Particle one by one, construct an ImageData that can be
        // painted into the canvas at once using putImageData()
        function updateImageDataWith(particle) {
            let x = particle.x
            let y = particle.y
            let prevX = particle.previousX
            let prevY = particle.previousY
            let size = particle.size

            if (prevX || prevY) {
            let prevMinY = Math.round(prevY - size)
            let prevMaxY = Math.round(prevY + size)
            let prevMinX = Math.round(prevX - size)
            let prevMaxX = Math.round(prevX + size)

            for (let y = prevMinY; y < prevMaxY; y++){
                for (let x = prevMinX; x < prevMaxX; x++) {
                if (y < 0 || y > canvasHeight) continue
                else if (x < 0 || x > canvasWidth) continue
                else {
                    let offset = y * 4 * canvasWidth + x * 4
                    imageData.data[offset] = 255
                    imageData.data[offset + 1] = 255
                    imageData.data[offset + 2] = 255
                    imageData.data[offset + 3] = 255
                }
                }
            }
            }

            let minY = Math.round(y - size) 
            let maxY = Math.round(y + size) 
            let minX = Math.round(x - size) 
            let maxX = Math.round(x + size) 

            for (let y = minY; y < maxY; y++){
            for (let x = minX; x < maxX; x++) {
                if (y < 0 || y > canvas.height) continue
                else if (x < 0 || x > canvas.width) continue
                else {
                let offset = y * 4 * canvas.width + x * 4
                imageData.data[offset] = particle.color.r
                imageData.data[offset + 1] = particle.color.g
                imageData.data[offset + 2] = particle.color.b
                imageData.data[offset + 3] = particle.color.a
                }
            }
            }
        }
        
        function init() {
            particleArray = []
            imageData = ctx.createImageData(canvas.width, canvas.height)
            // Initializing imageData to a blank white "page"
            for (let data = 1; data <= canvas.width * canvas.height * 4; data++) {
                imageData.data[data - 1] = data % 4 === 0 ? 255 : 255
            }

            const size = 2 // Min size is 2
            const step = Math.floor(size / 2)
            for (let y = 0, y2 = data.height; y < y2; y += step) {
            for (let x = 0, x2 = data.width; x < x2; x += step) {
                // If particle's alpha value is too low, don't record it
                if (data.data[(y * 4* data.width) + (x * 4) + 3] > 128) {
                let newParticle = createParticle(x, y, size)
                particleArray.push(newParticle)
                updateImageDataWith(newParticle)
                }
            }
            }
        }
        
        function animate() {
            requestAnimationFrame(animate)
            
            for (let i = 0; i < particleArray.length; i++) {
            let imageDataCanUpdateKey = `${Math.round(particleArray[i].x)}${Math.round(particleArray[i].y)}`
            particleArray[i].update()

            updateImageDataWith(particleArray[i])
            }
            ctx.putImageData(imageData, 200, 0)
        }
        
        init()
        animate()

        window.addEventListener('resize', e => {
            canvas.width = canvas.width
            canvas.height = canvas.height
            canvasWidth = canvas.width
            canvasHeight = canvas.height
            init()
        })
    }

        const canvasRef = useRef()
        const container = useRef()

    useEffect(()=>{
        const canvasContainer= container.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')
        canvas.width= canvasContainer.getBoundingClientRect().width;
        canvas.height= canvasContainer.getBoundingClientRect().width;;
        let canvasWidth = canvas.width
        let canvasHeight = canvas.height
        let pngWidth = png.width
        let pngHeight = png.height
        
        let divisor = pngHeight / 200

        let finalWidth = pngWidth / divisor
        let finalHeight = pngHeight / divisor

        window.addEventListener('mousemove', 
            event => {
                mouse.x = event.x
                mouse.y = event.y
            }
        )
        window.addEventListener('touchstart', 
            event => {
                mouse.x = event.x
                mouse.y = event.y
            }
        )
        
        ctx.drawImage(png, 0, 0, canvasWidth, canvasHeight)
        drawImage(ctx, canvas, canvasWidth, canvasHeight)
    }, [drawImage])

    const png = new Image();
    png.src = SrcPixels
    return (
        <div ref={container} className='particles__container'>
            <canvas className='particles__container-canvas' ref={canvasRef} />
        </div>
    )
}

export default Pixels2
