import ImageGlobal from "../../helpers/ImageGlobal";
import Img from "../atoms/Img";
import TextHeader from "../atoms/TextHeader";

export default () => {
  const windowWidth = window.screen.width;
  const Header = document.createElement("header");

  const componentsHeader = [
    Img("left-leaves", ImageGlobal.leftLeaves),
    Img("logo-white", ImageGlobal.logoWhite),
    TextHeader("descriptionHeader", "Find your next green friend"),
    Img("arrow-down", ImageGlobal.arrowDown),
    Img("plantperson", ImageGlobal.plantPerson),
    Img("right-leaves", ImageGlobal.rightLeaves),
  ];

  const componentsHeaderMobile = [
    Img("mobile-leaves", ImageGlobal.mobileLeaves),
    Img("mobile-logo-white", ImageGlobal.mobileLogoWhite),
    TextHeader("mobile-descriptionHeader", "Find your next green friend"),
    Img("mobile-arrow-down", ImageGlobal.arrowDown),
    Img("mobile-plantperson", ImageGlobal.mobilePlantPerson),
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
