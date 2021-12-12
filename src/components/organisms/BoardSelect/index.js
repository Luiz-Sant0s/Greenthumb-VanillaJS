import ImageGlobal from '../../../helpers/ImageGlobal';
import Img from '../../atoms/Img';
import NewElement from '../../atoms/NewElement';

export default () => {
  const BoardSelect = NewElement("board-select", "", "section");

  const CardSun = NewElement("card-select", "", "aside");  
  const TextCardSun = NewElement("text-card-sun", "", "p")
  TextCardSun.append(NewElement("text-bold", "1. ", "span") , "Set the amount of", NewElement("text-bold", " sunlight ", "span"),  "your plant will get.");  
  CardSun.append(Img("icon-card-select", ImageGlobal.iconSun, "icon Sun"));
  CardSun.append(TextCardSun);
 


  const CardWater = NewElement("card-select", "", "aside"); 
  CardWater.append(Img("icon-card-select", ImageGlobal.iconWater,"icon Water"));


  const CardDog = NewElement("card-select", "", "aside");
  CardDog.append(Img("icon-card-select", ImageGlobal.iconChew,"icon Chew"));
 


  
BoardSelect.append(CardSun, CardWater, CardDog);

  return BoardSelect;
};
