import React, {useState} from 'react'

const Switchmode = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }
    return (
        <button type="button" onClick={handleClick}>
            {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
    )
}

export  default Switchmode