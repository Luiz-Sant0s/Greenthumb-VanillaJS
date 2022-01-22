import ImageGlobal from "../../../helpers/ImageGlobal";
import Img from "../../atoms/Img";
import NewElement from "../../atoms/NewElement";

export default () => {
  // [INIT HEADER-DESKTOP]
  const Header = document.createElement("header");

  const componentsHeader = [
    Img("left-leaves", ImageGlobal.leftLeaves, "left leaves"),
    Img("logo-white", ImageGlobal.logoWhite, "logo white"),
    NewElement(
      "descriptionHeader",
      "Find your next green friend",
      "descriptionHeader",
      "h1"
    ),
    Img("arrow-down", ImageGlobal.arrowDown, "arrow down"),
    Img("plantperson", ImageGlobal.plantPerson, "plant person"),
    Img("right-leaves", ImageGlobal.rightLeaves, "right leaves"),
  ];

  Header.classList.add("header");
  Header.setAttribute("id", "Header");
  componentsHeader.map((comp) => Header.append(comp));
  // [END HEADER-DESKTOP]

  // [INIT HEADER-MOBILE]
  const HeaderMobile = document.createElement("header");

  const componentsHeaderMobile = [
    Img("mobile-leaves", ImageGlobal.mobileLeaves, "leaves"),
    Img("mobile-logo-white", ImageGlobal.mobileLogoWhite, "logo white"),
    NewElement("mobile-descriptionHeader", "Find your next green friend", "h1"),
    Img("mobile-arrow-down", ImageGlobal.arrowDown, "arrow down"),
    Img("mobile-plantperson", ImageGlobal.mobilePlantPerson, "plant person"),
  ];

  HeaderMobile.classList.add("header-mobile");
  HeaderMobile.setAttribute("id", "HeaderMobile");
  componentsHeaderMobile.map((comp) => HeaderMobile.append(comp));
  // [END HEADER-MOBILE]

  const mediaQueryMaxWidth = window.matchMedia("(max-width: 800px)");

  const HeadersChange = (e) => {
    const idHeader = document.getElementById("Header");
    const idHeaderMobile = document.getElementById("HeaderMobile");

    if (e.matches) {
      if (idHeader) idHeader.remove();
      document.body.insertAdjacentElement("afterbegin", HeaderMobile);
    } else {
      if (idHeaderMobile) idHeaderMobile.remove();
      document.body.insertAdjacentElement("afterbegin", Header);
    }
  };

  mediaQueryMaxWidth.addEventListener("change", (e) => HeadersChange(e));
  HeadersChange(mediaQueryMaxWidth);
};
