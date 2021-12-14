import NewElement from "../../atoms/NewElement";
import ImageGlobal from "../../../helpers/ImageGlobal";
import Img from "../../atoms/Img";

export default (
  orderPlant,
  src,
  namePlant,
  price,
  toxic,
  sun,
  water,
  staffFavorit
) => {
  const CardPlant = NewElement("card-plant", "", "aside");
  CardPlant.setAttribute("id", `card-plant-${orderPlant + 1}`);

  const imgPlant = Img("img-plant", src, `img ${namePlant}`);
  imgPlant.setAttribute("id", `img-plant-${orderPlant + 1}`);

  const descriptionAndIcons = NewElement("description-and-icons", "", "div");
  descriptionAndIcons.setAttribute(
    "id",
    `description-and-icons-${orderPlant + 1}`
  );

  const namePlantCard = NewElement("text-card-plant", `${namePlant}`, "p");
  namePlantCard.setAttribute("id", `text-card-plant-${orderPlant + 1}`);

  const priceAndIcons = NewElement("price-icons", "", "div");
  priceAndIcons.setAttribute("id", `price-icons-${orderPlant + 1}`);
  const pricePlant = NewElement("price-card-plant", `$${price}`, "p");
  pricePlant.setAttribute("id", `price-card-plant-${orderPlant + 1}`);

  const selectIconPet = () => {
    if (toxic) return ImageGlobal.toxic;
    if (!toxic) return ImageGlobal.pet;
  };

  const selectIconSun = () => {
    if (sun === "no") return ImageGlobal.noSun;
    if (sun === "low") return ImageGlobal.lowSun;
    if (sun === "high") return ImageGlobal.highSun;
  };

  const selectIconWater = () => {
    if (water === "regularly") return ImageGlobal.drop1;
    if (water === "daily") return ImageGlobal.drop2;
    if (water === "rarely") return ImageGlobal.drop3;
  };

  const applyFavoriteStamp = () => {
    if (staffFavorit) {
      const staffFavorite = Img(
        "staff-favorite",
        ImageGlobal.staffFav,
        `img staff favorite`
      );
      staffFavorite.setAttribute("id", `staff-favorite-${orderPlant + 1}`);

      return CardPlant.append(staffFavorite);
    }

    if (!staffFavorit) return null;
  };

  applyFavoriteStamp();

  const iconWater = Img("icons", selectIconWater(), `img water`);
  iconWater.setAttribute("id", `icons-${orderPlant + 1}`);

  const iconSun = Img("icons", selectIconSun(), `img sun`);
  iconSun.setAttribute("id", `icons-${orderPlant + 1}`);

  const iconPet = Img("icons", selectIconPet(), `img pet`);
  iconPet.setAttribute("id", `icons-${orderPlant + 1}`);

  const containerIcons = NewElement("container-icons", "", "div");
  containerIcons.append(iconPet, iconSun, iconWater);

  priceAndIcons.append(pricePlant, containerIcons);
  descriptionAndIcons.append(namePlantCard, priceAndIcons);
  CardPlant.append(imgPlant, descriptionAndIcons);
  return CardPlant;
};
