import NewElement from "../../atoms/NewElement";
import Img from "../../atoms/Img";

export default (orderPlant, src, namePlant) => {
  const CardPlant = NewElement("card-plant", "", "aside");
  CardPlant.setAttribute("id", `card-plant-${orderPlant+1}`);

  const imgPlant = Img("img-plant", src, `img ${namePlant}`);
  imgPlant.setAttribute("id", `img-plant-${orderPlant+1}`);

  CardPlant.append(imgPlant)
  return CardPlant;
};
