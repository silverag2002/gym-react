import React from "react";
import H1 from "./H1"
function Body1(props){
    return(
    <div className="parent-body1">
        <div className="lhs">
        <h4 className="subtitle">THE BEST FITNESS CLUB IN THE TOWN</h4>
        <div className="text-design">
        
        <H1 calligraphy="type1" content="SHAPE" />
        <H1 calligraphy="type2" content="YOUR" />
        </div>
        <div className="text-design">
        <H1 calligraphy="type2" content="IDEAL" />
        <H1 calligraphy="type2" content="BODY" />
        </div>
        <p>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
        <div className="counter">
            <div className="counter-child">
                <span>+140</span><span>Expert Coaches</span>
            </div>
            <div className="counter-child">
                <span>+978</span><span>Members Joined</span>
            </div>
            <div className="counter-child">
                <span>+50</span><span>Fitness Programs</span>
            </div>
        </div>
        <button className="btn-1">Get Started</button>
        <button className="btn-2">Learn More</button>
        </div>
    <div className="rhs">
    <button className="join-now">Join now</button>
    <div className="athlete-background"></div>

    <div className="heart-rate">
    <img src="./heart-project.png" alt="Heart" className="" style={{height:"25px",width:"25px"}} />
    <span>Heart Rate</span>
    <span>116 bpm</span>
    </div>

    <img src="./My project.png" alt="Athlete" className="athlete" />
    <div className="calorie">
    <img src="../My project-1.png" alt="Graph" className="" style={{height:"40px",width:"35px"}} />
    <div>Calories burned</div>
    <div>220 kcal</div>
    </div>


<div></div>
    </div>
    </div>)


}
export default Body1;