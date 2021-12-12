import Img from '../atoms/Img'


const Header = () => {
  var altura = window.screen.height;
  var largura = window.screen.width;
  console.log(altura);
  console.log(largura)

  return `<header class="header">   
    <img class="left-leaves" src=${require("../../../images/hero//desktop/left-leaves.png")}></img>

      <img class="logo-white" src=${require("../../../images/icons/logo-white.svg")}></img>
<p class="descriptionHeader">Find your next green friend</p>
<img class="arrow-down" src=${require("../../../images/icons/arrow-down.svg")}></img>

      <img class="plantperson" src=${require("../../../images/hero//desktop/plantperson.png")}></img>

      <img class="right-leaves" src=${require("../../../images/hero//desktop/right-leaves.png")}></img>
      ${Img("arrow-down", require("../../../images/hero//desktop/right-leaves.png"))}
    </header>`;
};

export default Header;
