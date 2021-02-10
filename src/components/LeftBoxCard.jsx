import React from 'react'
import {Link} from 'react-router-dom'

import '../assets/styles/components/LeftBoxDesc.scss'
const LeftBoxCard = (props) => {
    const {img, imgName, text, subtitle, direction} = props
    return (
        <Link to={direction} className="description__boxleft">
            <div className="description__boxleft-subtitlebox">
                <h2>
                    {subtitle}
                </h2>
            </div>
            <div className="description__boxleft-imagebox"
            alt={imgName}
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
        </Link>
    )
}
export default LeftBoxCard