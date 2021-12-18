import Img from "../../atoms/Img";
import NewElement from "../../atoms/NewElement";

export default (
  nameComp,
  icon,
  numberCard,
  initDescription,
  textBold,
  endDescription,
  valuesOptions,
  changeSelect
) => {
  const Card = NewElement("card-select", "", "aside");
  Card.setAttribute("id", `card-select-${nameComp}`);

  const boxSelect = NewElement("box-select", "", "div");
  const iconCard = Img("icon-card-select", icon, `icon ${nameComp}`);

  const TextCard = NewElement(`text-card-${nameComp}`, "", "p");
  TextCard.setAttribute("id", `text-card-${nameComp}`);
  TextCard.append(
    NewElement("text-bold", `${numberCard}`, "span"),
    `${initDescription}`,
    NewElement("text-bold", `${textBold}`, "span"),
    `${endDescription}`
  );

  const select = NewElement(`select-to-options`, "", "select");
  select.setAttribute("id", `select-${nameComp}`);
  select.classList.add("hover-select");

  const firstOption = NewElement("first-option", "Select...", "option");
  firstOption.setAttribute("id", "first-option");
  firstOption.setAttribute("disabled", true);
  firstOption.setAttribute("selected", true);
  firstOption.setAttribute("value", "Select...");

  const theOptions = (valueOption) => {
    const formatDescriptionOption =
      typeof valueOption !== "boolean"
        ? valueOption[0].toUpperCase() + valueOption.slice(1).toLowerCase()
        : valueOption
        ? "Yes they chew plants"
        : "No or not chew plants";

    const option = NewElement(
      "options-card",
      formatDescriptionOption,
      "option"
    );
    option.setAttribute("id", `option-${valueOption}`);
    option.setAttribute("value", valueOption);

    return option;
  };

  select.append(firstOption);
  valuesOptions.map((option) => select.append(theOptions(option)));

  const arrowSelect = NewElement("arrow-select", "", "div");

  const removeFocus = () => {
    document.activeElement.blur();
    arrowSelect.style.transform = "rotate(0deg)";
  };

  const change = () => {
    removeFocus();
    changeSelect();
  };

  const selectInFocus = () => {
    arrowSelect.style.transform = "rotate(180deg)";
  };

  select.addEventListener("focus", selectInFocus);
  select.addEventListener("blur", removeFocus);
  select.addEventListener("change", change);

  boxSelect.append(select, arrowSelect);

  Card.append(iconCard, TextCard, boxSelect);

  return Card;
};
