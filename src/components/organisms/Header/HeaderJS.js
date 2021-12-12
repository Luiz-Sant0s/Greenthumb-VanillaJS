import ImageGlobal from "../../../helpers/ImageGlobal";
import Img from "../../atoms/Img";
import TextHeader from "../../atoms/TextHeader";

export default () => {
  const windowWidth = window.screen.width;
  const Header = document.createElement("header");

  const componentsHeader = [
    Img("left-leaves", ImageGlobal.leftLeaves,"left leaves"),
    Img("logo-white", ImageGlobal.logoWhite, "logo white"),
    TextHeader("descriptionHeader", "Find your next green friend", "descriptionHeader"),
    Img("arrow-down", ImageGlobal.arrowDown, "arrow down"),
    Img("plantperson", ImageGlobal.plantPerson, "plant person"),
    Img("right-leaves", ImageGlobal.rightLeaves,"right leaves" ),
  ];

  const componentsHeaderMobile = [
    Img("mobile-leaves", ImageGlobal.mobileLeaves, "leaves"),
    Img("mobile-logo-white", ImageGlobal.mobileLogoWhite, "logo white"),
    TextHeader("mobile-descriptionHeader", "Find your next green friend"),
    Img("mobile-arrow-down", ImageGlobal.arrowDown, "arrow down"),
    Img("mobile-plantperson", ImageGlobal.mobilePlantPerson, "plant person"),
  ];

  if (windowWidth > 800) {
    if (Header.classList.contains("header-mobile"))
      Header.classList.remove("header-mobile");
    if (!Header.classList.contains("header")) Header.classList.add("header");
    componentsHeader.map((comp) => Header.append(comp));
  } else {
    if (Header.classList.contains("header")) Header.classList.remove("header");
    if (!Header.classList.contains("header-mobile"))
      Header.classList.add("header-mobile");
    componentsHeaderMobile.map((comp) => Header.append(comp));
  }

  return Header;
};
