import ImageGlobal from "../../helpers/ImageGlobal";
import Img from "../atoms/Img";
import TextHeader from "../atoms/TextHeader";

export default () => {
  const Header = document.createElement("header");

  const componentsHeader = [
    Img("left-leaves", ImageGlobal.leftLeaves),
    Img("logo-white", ImageGlobal.logoWhite),
    TextHeader("descriptionHeader", "Find your next green friend"),
    Img("arrow-down", ImageGlobal.arrowDown),
    Img("plantperson", ImageGlobal.plantPerson),
    Img("right-leaves", ImageGlobal.rightLeaves),
  ];

  Header.classList.add("header");
  componentsHeader.map((comp) => Header.append(comp));

  return Header;
};
