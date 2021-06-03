import React from 'react'
import './style.css'
import Github from '../Contact/Github.png'
import LinkedIn from '../Contact/LinkedIn.png'

function Contact() {
    return (
            <div className="container">
                <div className="contact">
                    <h5>Email</h5>
                    <p className="info">chmanuel1@yahoo.com</p>
                    <h5>Connect with me on</h5>
                    <a href="https://www.linkedin.com/in/manuel-chacon-753458201/" title="LinkedIn" rel="noreferrer" target="_blank" ><img className="info" width="35px" height="33px" src={LinkedIn} alt="linkedIn button referes to Manny's LinkedIn profile" /></a>
                    <a href="https://github.com/ItsMEChacon" rel="noreferrer" title="Github" target="_blank" ><img className="info" width="35px" height="35px" src={Github} alt="Github button referes to Manny's Github profile" /></a>

                </div>
            </div>
    )
}

export default Contact