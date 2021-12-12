import ImageGlobal from "../../../helpers/ImageGlobal";
import Img from "../../atoms/Img";
import TextHeader from "../../atoms/TextHeader";

export default () => {
  const HeaderMobile = document.createElement("header");

  const componentsHeaderMobile = [
    Img("mobile-leaves", ImageGlobal.mobileLeaves, "leaves"),
    Img("mobile-logo-white", ImageGlobal.mobileLogoWhite, "logo white"),
    TextHeader("mobile-descriptionHeader", "Find your next green friend"),
    Img("mobile-arrow-down", ImageGlobal.arrowDown, "arrow down"),
    Img("mobile-plantperson", ImageGlobal.mobilePlantPerson, "plant person"),
  ];

  HeaderMobile.classList.add("header-mobile");
  componentsHeaderMobile.map((comp) => HeaderMobile.append(comp));

  return HeaderMobile;
};
