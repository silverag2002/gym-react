import React from "react";
import H1 from "./H1"
import Card from "./Card";   
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
function Body2(){
    return(<div className="parent-body2">
    <div className="text-design">
    <H1 calligraphy="type1" content="EXPLORE OUR" /> 
    <H1 calligraphy="type2" content="PROGRAMS" /> 
    <H1 calligraphy="type1" content="TO SHAPE YOU" /> 
    </div>
    <div className="cards">
    <Card icon={<DirectionsRunIcon />} heading="Cardio Training" bod="In this program, you are trained to do sequential moves in range of 20 until 30 minutes." arrow={<ArrowForwardIcon />}/>
   
   <Card icon={<LocalFireDepartmentIcon />} heading="Fat Burning" bod="This program is suitable for you who wants to get rid of your fat and lose their weight." arrow={<ArrowForwardIcon />} />
   <Card icon ={<MonitorHeartIcon />} heading="Health Fitness"
   bod="This programs is designed for those who exercises only for their body fitness not body building." arrow={<ArrowForwardIcon />} />
   </div>
   </div>)
}
export default Body2;