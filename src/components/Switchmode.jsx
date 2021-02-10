import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Switchmode = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }
    return (
        <button className='btn outline secondary' onClick={handleClick}>
            {darkMode ? <FontAwesomeIcon icon={["fas", "moon"]} size="sm" /> : <FontAwesomeIcon icon={["fas", "sun"]} size="sm" />}
        </button>
    )
}

export  default Switchmode