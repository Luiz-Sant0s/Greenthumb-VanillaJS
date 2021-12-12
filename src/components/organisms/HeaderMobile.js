import ImageGlobal from "../../helpers/ImageGlobal";
import Img from "../atoms/Img";
import Text from "../atoms/Text";

export default () => {
  const HeaderMobile = document.createElement("header");

  const componentsHeaderMobile = [
    Img("mobile-leaves", ImageGlobal.mobileLeaves),
    Img("mobile-logo-white", ImageGlobal.mobileLogoWhite),
    Text("mobile-descriptionHeader", "Find your next green friend"),
    Img("mobile-arrow-down", ImageGlobal.arrowDown),
    Img("mobile-plantperson", ImageGlobal.mobilePlantPerson),
  ];

  HeaderMobile.classList.add("header-mobile");
  componentsHeaderMobile.map((comp) => HeaderMobile.append(comp));

  return HeaderMobile;
};
