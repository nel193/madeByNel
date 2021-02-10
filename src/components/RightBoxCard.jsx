import React from 'react'
import {Link} from 'react-router-dom'

import ProfilePic from '../assets/statics/profile-pic.jpg'
import '../assets/styles/components/RightBoxDesc.scss'

const RightBoxCard = (props) => {
    const {img, text, subtitle, direction} = props
    return (
        <Link to={direction} className="description__boxright">
            <div className="description__boxright-subtitlebox">
                <h2>
                    {subtitle}
                </h2>
            </div>
            <div className="description__boxright-imagebox"
                style={{
                    backgroundImage:`url(${img})`,
                }}
            >
            </div>
            <div className="description__boxright-textbox">
                <p>  
                    {text}
                </p>
            </div>
        </Link>
    )
}
export default RightBoxCard