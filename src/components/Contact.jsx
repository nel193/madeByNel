import React from 'react'
import '../assets/styles/components/Contact.scss'
const Contact = () => {
    return (
        <div className="contact__container">
            <form className="contact__container-form">
                <input type="text" placeholder="Name" type="text" />
                <input type="e-mail" placeholder="E-mail" type="text" />
                <textarea cols="20" rows="10" placeholder="Message"></textarea>
            </form>
        </div>
    )
}

export default Contact