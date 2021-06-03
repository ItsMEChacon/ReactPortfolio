import React from 'react'
import './style.css'
import Deploy from '../Project/Deploy.png'
import Github from '../Project/Github.png'

function Project(props) {
    return (
        <div className="container" style={{ marginBottom: "15px" }} >
            <div>
                <h2 id="appName">{props.name}</h2>
            </div>
            <div className="row">
                <div className="card col-12 col-lg-7 col-xl-7" style={{ margin: "0px", border: "none" }}>
                    <div className="card-body" style={{ margin: "0px" }}>
                        <img id="image" alt={props.name} src={props.image} />
                    </div>
                </div>
                <div className="card col-12 col-lg-4 ol-xl-4" style={{ marginTop: "30px", border: "none", paddingTop: "50px" }}>
                    <div style={{ padding: "10px" }}>
                        {props.description}

                    </div>
                </div>
            </div>
            <div className="row">
                <div style={{ textAlign: "right", marginBottom: "15px" }}>
                    {/* <a href={props.deploy} style={{ color: "#77246c", textDecoration: "none", fontWeight: "bold" }} target="_blank" rel="noreferrer">Deployed App</a>
                    <a href={props.repository} style={{ color: "#77246c", textDecoration: "none", fontWeight: "bold" }} target="_blank" rel="noreferrer">Github Repository</a> */}
                    <a href={props.deploy} target="_blank" rel="noreferrer" title="Deployed Application"><img width="30px" height="30px" src={Deploy} alt="Deployed App link" /></a>
                    <a href={props.repository} target="_blank" rel="noreferrer" title="Application Repository"><img width="30px" height="30px" src={Github} alt="Repository link for application" /></a>
                </div>
            </div>
        </div>

    )
}

export default Project