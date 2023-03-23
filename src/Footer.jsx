import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@material-ui/core/IconButton';
function Footer(){
return(
<div>
<div className="line"></div>
<div className="footer-parent">
<div className="footer">
   <span> <GitHubIcon className="sizing"/></span>
   <span> <InstagramIcon className="sizing"/></span>
   <span><FacebookIcon className="sizing"/></span> 

</div>
<div>
<img src="./My project (2).png" alt="Logo" />
</div>
</div>
</div>)
}
export default  Footer;