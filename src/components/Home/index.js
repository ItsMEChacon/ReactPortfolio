import React from 'react'
import './style.css'
import Picture from '../Home/AboutMe.jpg'
import DownloadPic from '../Home/DownloadPic.png'
import Resume from '../Home/Resume414.pdf'


function Home() {
    return (
            <div className="container">
                <div>
                    <h2 id="title">About Me</h2>
                </div>
                <div className="row" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    <div className="card col-12 col-md-6 col-lg-4 col-xl-4" style={{ margin: "0px", border: "none" }}>
                        <div className="card-body" style={{ margin: "0" }}>
                            <img id="AboutMe" alt="Manuel Chacon" src={Picture} style={{ maxWidth: "100%", maxHeight: "100%", margin: "0px" }} />
                        </div>
                    </div>
                    <div className="card col-12 col-md-6 col-lg-7 ol-xl-7" style={{ margin: "0px", border: "none", paddingTop: "50px" }}>
                        <div >
                  Hey there! My name's Manny. I'm a full stack Web Developer with a background in customer service, production, and management of medium

                  size teams in fast paced environments. In my time off you can find me diving into an rpg, playing DND with friends, logging into a video game, hiking, working on my project cars

                  (does it ever end?) and last but definitely not least coding passion projects. Feel free to reach out to me at any of the links to the side and view my resume. 
                    </div>
                        <p id="downloadResume">Download resume <a href={Resume} title="Download Resume" download="Manuel Chacon" ><img className="download" width="30px" height="30px" src={DownloadPic} alt="Resume download button" /></a>
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Home