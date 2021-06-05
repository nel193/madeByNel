import React, {useEffect, useRef} from 'react'

import '../assets/styles/components/SlickLogos.scss'

const SlickLogos = () => {
    const slickRef = useRef()

    useEffect(()=> {
        const slick = slickRef.current
        let slickRightPosition = slick.getBoundingClientRect()
        console.log(slickRightPosition)
        // setInterval(()=>{
        //     slickRightPosition += 10;
        //     // console.log(slickRightPosition)
        // }, 100)

    }, [])
    return (
        <div className='slick__container'>
            <div ref={slickRef} className='slick'>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>
            </div>
        </div>
    )
}

export default SlickLogos
