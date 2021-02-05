import React, {useState, useEffect, useRef} from 'react'
import {motion} from 'framer-motion'
import SrcPixels from './SrcPixels'
import '../assets/styles/components/Pixels.scss'


const Pixels = ( props ) => {
    // const [mousePos, setMousePos] = useState({x:null, y:null, radius:100})

    let particleArray = [];
    
    let mouse = {
        x: null,
        y: null,
        radius: 100
    }
    function drawImage(context){
        let imageWidth = png.width;
        let imageHeight= png.height;

        const data = context.getImageData(0, 0, imageWidth, imageHeight);

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    
        class Particle {
            constructor (x, y, color, size){
                this.x = x + context.canvas.width/2 - png.width * 2,
                this.y = y + context.canvas.height/2 - png.height * 2,
                this.color = color,
                this.size = 2,
                this.baseX = x + context.canvas.width/2 - png.width *2,   
                this.baseY = y + context.canvas.height/2 - png.height * 2, 
                this.density = (Math.random() * 10) + 2
            }
            draw(){
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.closePath();
                context.fill();
            }
            update(){
                context.fillStyle = this.color;
    
                //collision detection
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance= Math.sqrt(dx * dx + dy * dy)
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                
                //max distance, past that the force will be 0
                const maxDistance = 100;
                let force = (maxDistance - distance) / maxDistance;
                if (force < 0) force = 0;

                let directionX = (forceDirectionX * force * this.density * 0.6)
                let directionY = (forceDirectionY * force * this.density * 0.6)

                if (distance < mouse.radius + this.size){
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX){
                        let dx = this.x - this.baseX;
                        this.x -= dx/20;
                    } if (this.y !== this.baseY){
                        let dy = this.y - this.baseY;
                        this.y -= dy/20;
                    }
                }
                this.draw()
            }
        }
        function init(){
            particleArray = [];

            for (let y= 0, y2 = data.height; y < y2 ; y++){
                for(let x= 0, x2 = data.width; x < x2 ; x++){
                    if(data.data[(y * 4 * data.width) + (x * 4) + 3] > 128){
                        let positionX = x;
                        let positionY = y;
                        let color = `rgb(${data.data[(y * 4 * data.width) + (x + 4)]},
                                        ${data.data[(y * 4 * data.width) + (x + 4) + 1]},
                                        ${data.data[(y * 4 * data.width) + (x + 4) + 2]}
                                        )`
                        particleArray.push(new Particle(positionX , positionY , color))
                    }
                }
            }
        }
        function animate(){
            requestAnimationFrame(animate);
            context.fillStyle = 'rgba(0, 0, 0, 0)';
            context.fillRect(0, 0,  innerWidth, innerHeight);
    
            for(let i = 0 ; i < particleArray.length ; i++){
                particleArray[i].update();
            }
        }
        init();
        animate();

    }

    const canvasRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current

        const ctx = canvas.getContext('2d')
        canvas.width= window.innerWidth;
        canvas.height= window.innerHeight;

        window.addEventListener('mousemove',
            (event) => {
                mouse.x= event.x + canvas.clientLeft/2;
                mouse.y= event.y + canvas.clientTop/2;
            }
        )
        window.addEventListener('resize', 
            () => {
                context.canvas.width = innerWidth;
                context.canvas.height = innerHeight;
                init();
            }
        )

        ctx.drawImage(png, 0 , 0, canvas.width, canvas.height);
        drawImage(ctx)
    }, [])

    const png = new Image();
    png.src = SrcPixels
    return (
        <div className='particles__container'>
            <canvas className='particles__container-canvas' ref={canvasRef} />
        </div>
    )   
}

export default Pixels
