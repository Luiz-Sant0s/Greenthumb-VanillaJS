import ImageGlobal from "../../../helpers/ImageGlobal";
import Img from "../../atoms/Img";
import NewElement from "../../atoms/NewElement";

export default () => {
  const BoardSelect = NewElement("board-select", "", "section");

  const CardSun = NewElement("card-select", "", "aside");
  const TextCardSun = NewElement("text-card", "", "p");
  TextCardSun.append(
    NewElement("text-bold", "1. ", "span"),
    "Set the amount of",
    NewElement("text-bold", " sunlight ", "span"),
    "your plant will get."
  );
  CardSun.append(
    Img("icon-card-select", ImageGlobal.iconSun, "icon Sun"),
    TextCardSun
  );

  const CardWater = NewElement("card-select", "", "aside");
  const TextCardWater = NewElement("text-card", "", "p");
  TextCardWater.append(
    NewElement("text-bold", "2. ", "span"),
    "How often do you want to",
    NewElement("text-bold", " water ", "span"),
    "your plant?"
  );
  CardWater.append(
    Img("icon-card-select", ImageGlobal.iconWater, "icon Water"),
    TextCardWater
  );

  const CardDog = NewElement("card-select", "", "aside");
  const TextCardDog = NewElement("text-card-dog", "", "p");
  TextCardDog.append(
    NewElement("text-bold", "3. ", "span"),
    "Do you have pets? Do they",
    NewElement("text-bold", " chew ", "span"),
    "plants?"
  );
  CardDog.append(
    Img("icon-card-select", ImageGlobal.iconChew, "icon Chew"),
    TextCardDog
  );

  BoardSelect.append(CardSun, CardWater, CardDog);

  return BoardSelect;
};
