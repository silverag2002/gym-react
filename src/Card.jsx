import React from "react";


function Card(props){
return (
    <div className="card-design">
    <p>{props.icon}</p>
    <p>{props.heading}</p>
    <p>{props.bod}</p>
    

    <button className="btn-1">Join Now 
    <span className="arrow">{props.arrow}</span>
    </button>
    </div>
)
}
export default Card;