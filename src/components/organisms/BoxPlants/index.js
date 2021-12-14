import ImageGlobal from "../../../helpers/ImageGlobal";
import Img from "../../atoms/Img";
import NewElement from "../../atoms/NewElement";
import CardPlant from "../../molecules/CardPlant";

export default (data) => {
  const BoxPlants = NewElement("box-plants", "", "section");
  BoxPlants.setAttribute("id", "box-plants");

  const contianerIconTitle = NewElement("contianer-icon-title", "", "div");
  const iconBoxPlants = Img(
    "icon-box-plants",
    ImageGlobal.iconBoxPlants,
    "icon picks"
  );
  const titleBoxPlants = NewElement("title-plants", "Our picks for you", "h2");
  contianerIconTitle.append(iconBoxPlants, titleBoxPlants);

  const containerPlants = NewElement("container-plants", "", "div"); 

   data.map((infCard, index) => containerPlants.append(CardPlant(index, infCard.url, infCard.name, infCard.price, infCard.toxicity, infCard.sun, infCard.water)));

   const btnToTop = NewElement("btn-to-top", "back to the top", "button");
   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
   btnToTop.addEventListener("click", scrollToTop);
   const iconArrowUp = Img(
    "icon-arrow-up",
    ImageGlobal.arrowUp,
    "icon arrow up"
  );
  btnToTop.append(iconArrowUp);
 
  
  BoxPlants.append(contianerIconTitle, containerPlants, btnToTop);
  return BoxPlants;
};
