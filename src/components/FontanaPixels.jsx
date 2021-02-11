import React, {useState, useEffect, useRef} from 'react'

// import SrcFontana from './SrcFontana'
import '../assets/styles/components/FontanaPixels.scss'
const FontanaPixels = () => {
    // const png = new Image();
    // png.src = SrcFontana
    function drawFrame(ctx, video) {
        const context = ctx
        context.drawImage(video, 0, 0);
        
        var imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
        // console.log(imageData)
        // invertColors(imageData.data);
        context.putImageData(imageData, 0, 0);
        
        setTimeout(function () {
            drawFrame(ctx, video);
        }, 10);
    }

    // optional:[{sourceId:videoSource}]
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
    }

    function initCamera(stream) {
        // deprecated  
        // video.src = window.URL.createObjectURL(stream);
        cam.srcObject = stream;
        cam.play();
        // console.log("hola")
    }

    const canvasRef = useRef()
    const container = useRef()
    const camContainer = useRef()
    let cam

    useEffect(()=>{
        cam = camContainer.current;
        const canvasContainer= container.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')
        // cam.width = window.innerWidth;
        // cam.height = window.innerHeight;
        console.log(cam.videoWidth)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Play video

        drawFrame(ctx, cam);

        return cam
    }, [])
    
    return (
        <section ref={container} className=''>
            <canvas className='' ref={canvasRef} />
            <video ref={camContainer} width='400' height='200'/> 
            <button onClick={startCamera}>Prender Cam</button>
            {/* 202 31 39 1 */}
           
        </section>
    )
}

export default FontanaPixels
