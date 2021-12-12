import ImageGlobal from "../../helpers/ImageGlobal";
import Img from "../atoms/Img";

const Header = () => {
  
  const windowWidth = window.screen.width;
  
  return windowWidth > 800
    ? `
  <header class="header">    
    ${Img("left-leaves", ImageGlobal.leftLeaves)}  
    ${Img("logo-white", ImageGlobal.logoWhite)}       
    <p class="descriptionHeader">Find your next green friend</p>
    ${Img("arrow-down", ImageGlobal.arrowDown)}    
    ${Img("plantperson", ImageGlobal.plantPerson)}
    ${Img("right-leaves", ImageGlobal.rightLeaves)}
  </header>`
    :  `<header class="header-mobile">    
    ${Img("mobile-leaves", ImageGlobal.mobileLeaves)}  
    ${Img("mobile-logo-white", ImageGlobal.mobileLogoWhite)}       
    <p class="mobile-descriptionHeader">Find your next green friend</p>
    ${Img("mobile-arrow-down", ImageGlobal.arrowDown)}    
    ${Img("mobile-plantperson", ImageGlobal.mobilePlantPerson)}
   
  </header>`
};

export default Header;
