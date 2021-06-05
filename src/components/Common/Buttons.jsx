import React from 'react'
import '../../assets/styles/base/Buttons.scss'

const Buttons = (props) =>{
    const {type, name, children, classes} = props
    return(
    <button name={name} type={type} className={`btn ${classes}`}>
        {children}
    </button>
    )
} 

export default Buttons
