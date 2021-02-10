import React from 'react'

import '../assets/styles/components/CenterBoxDesc.scss'


const CenterBoxCard = (props) => {
    const {img, text,} = props
    return (
        <div className='description__boxcenter' >
            <div className='description__boxcenter-imagebox'
            style={{
                backgroundImage:`url(${img})`,
            }}
            >
            </div>
            <div className='description__boxcenter-textbox'>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default CenterBoxCard
