import ImageGlobal from "../../helpers/ImageGlobal";
import Img from "../atoms/Img";

const Header = () => {
  var altura = window.screen.height;
  var largura = window.screen.width;
  console.log(altura);
  console.log(largura);
  //  ${Img("arrow-down", require("../../../images/hero//desktop/right-leaves.png"))}
  return `
  <header class="header">   
    <img class="left-leaves" src=${ImageGlobal.leftLeaves}></img>

      <img class="logo-white" src=${ImageGlobal.logoWhite}></img>
      <p class="descriptionHeader">Find your next green friend</p>
      <img class="arrow-down" src=${ImageGlobal.arrowDown}></img>

      <img class="plantperson" src=${ImageGlobal.plantPerson}></img>

      <img class="right-leaves" src=${ImageGlobal.rightLeaves}></img>
     
    </header>`;
};

export default Header;
