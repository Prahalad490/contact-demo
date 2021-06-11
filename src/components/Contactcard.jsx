import React from "react";

const Contactcard = (props) => {
    return(
        <div>
            <div className="contact-card">
                <img className="round-img" src={props.src} alt="contact"></img>
                <h2 className="contact-h1">{props.firstname + " " + props.lastname}</h2>
                <h6>{props.email}</h6>
            </div>
        </div>
    )
}

export default Contactcard;