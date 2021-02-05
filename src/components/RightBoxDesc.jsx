import React from 'react'

import ProfilePic from '../assets/statics/profile-pic.jpg'
import '../assets/styles/components/RightBoxDesc.scss'

const RightBoxDesc = (props) => {
    const {img, text, subtitle} = props
    return (
        <div className="description__boxright">
            <div className="description__boxright-subtitlebox">
                {subtitle}
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
        </div>
    )
}
export default RightBoxDesc