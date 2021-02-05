import React from 'react'

import '../assets/styles/components/LeftBoxDesc.scss'
const LeftBoxDesc = (props) => {
    const {img, imgName, text, subtitle} = props
    return (
        <div className="description__boxleft">
            <div className="description__boxleft-subtitlebox">
                <p>

                    {subtitle}
                </p>
            </div>
            <div className="description__boxleft-imagebox"
            style={{
                backgroundImage:`url(${img})`,
            }}
            >
            </div>
            <div className="description__boxleft-textbox">
                <p>
                {text}
                </p>
            </div>
        </div>
    )
}
export default LeftBoxDesc