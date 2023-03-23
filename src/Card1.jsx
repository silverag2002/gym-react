import React from "react";
function Card1(props){
    return(
<div className="card1-design">
 <div>{props.icon}</div>
 <h3>{props.headline}</h3>
 <h1>{props.price}</h1>
 <ul>
     <li>{props.point1}</li>
     <li>{props.point2}</li>
     <li>{props.point3}</li>
 </ul>
<button className="join">Join Now</button>
</div>)
}
export default Card1;