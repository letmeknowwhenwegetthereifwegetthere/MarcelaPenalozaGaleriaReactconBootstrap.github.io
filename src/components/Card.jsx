import React from "react";


const Card = (props) => {
    const { title, desc, photo } = props; 
    
    return(
        <div className="card bg-dark" style={{ width: '200px' }}>
            <img
            src={photo}
            className="card-img-top"
            alt="..."
            style={{ width: '100%'}} 
            />
            <div className="card-body">
                <h5 className="cad-title">{title}</h5>
                <p className="card-text">{desc}</p>
            </div>
        </div>
    );
};


export default Card;