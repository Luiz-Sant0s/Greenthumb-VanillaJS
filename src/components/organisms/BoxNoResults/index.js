import ImageGlobal from "../../../helpers/ImageGlobal";
import Img from "../../atoms/Img";
import NewElement from "../../atoms/NewElement";

export default () => {
  const BoxNoResults = NewElement("box-no-results", "", "section");
  BoxNoResults.setAttribute("id", "box-no-results");

  const containerDescription = NewElement("container-description", "", "aside");
  const titleNoResults = NewElement(
    "title-no-results",
    "No results yet...",
    "h2"
  );
  const descriptionNoResults = NewElement(
    "description-no-results",
    "Use the filters above to find the plant that best fits your environment :)",
    "p"
  );
  containerDescription.append(titleNoResults, descriptionNoResults);

  const containerIcon = NewElement("container-icon", "", "aside");
  const iconNoResult = Img(
    "icon-no-result",
    ImageGlobal.iconNoResult,
    "icon no result"
  );
  containerIcon.append(iconNoResult);

  BoxNoResults.append(containerDescription, containerIcon);

  return BoxNoResults;
};
