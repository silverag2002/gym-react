import React from "react";
import H1 from "./H1";
import Card1 from "./Card1";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
function Body3(){
    return(<div>
    <div className="parent-body2">
    <div className="text-design">
    <H1 calligraphy="type1" content="READY TO START" /> 
    <H1 calligraphy="type2" content="YOUR JOURNEY" /> 
    <H1 calligraphy="type1" content="NOW WITH US" /> 
    </div>
    <div className="price-design">
    <Card1 icon={<DirectionsRunIcon />} headline="BASIC PLAN" price="$ 25" point1="2 hours of excercises" point2="Free consultaion to coaches" point3="Access to The Community" />
    <Card1 icon={<DirectionsRunIcon />} headline="PREMIUM PLAN" price="$ 50" point1="2 hours of excercises" point2="Free consultaion to coaches" point3="Access to The Community" />
    <Card1 icon={<DirectionsRunIcon />} headline="PRO PLAN" price="$ 75" point1="2 hours of excercises" point2="Free consultaion to coaches" point3="Access to The Community" />
</div>
    </div>
    </div>)
    
}
export default Body3;