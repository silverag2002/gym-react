import { props } from "bluebird";
import React ,{useState} from "react";
import H1 from "./H1";
function Testi(){
return(
    <div >
    <div className="parent-body1">
    <div className="lhs">
        <h3>TESTIMONIAL</h3>
        <div className="text-design">
        <H1 calligraphy="type1" content="WHAT THEY" />
        
        </div>
        <div className="text-design">
        <H1 calligraphy="type2" content="SAY ABOUT US" />
        </div>
        <div class="caro-decor">
        <h4 >ansdfkjadsfadsfkjadskfk hakdjshfka afjkasdhfk dfajkhakdsj dfjkadhjsk n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</h4>
        
</div>
<h3>BILL GATES <span>-- CUSTOMER</span></h3>
</div>
<div className="rhs">
<div className="frame1"></div>
<div className="frame2"></div>
<div className="caro-img">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU" alt="carousel-photo"></img>

    </div>
    </div>
    </div>
    </div>
)
}
export default Testi;