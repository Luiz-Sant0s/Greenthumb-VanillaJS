import ImageGlobal from "../../../helpers/ImageGlobal";
import Img from "../../atoms/Img";
import NewElement from "../../atoms/NewElement";

export default () => {
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
  componentsHeader.map((comp) => Header.append(comp));

  return Header;
};
