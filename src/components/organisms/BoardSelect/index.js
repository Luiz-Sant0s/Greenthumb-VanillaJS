import API_GET_PLANTS from "../../../helpers/APIs/API_GET_PLANTS";
import ImageGlobal from "../../../helpers/ImageGlobal";
import NewElement from "../../atoms/NewElement";
import CardSelect from "../../molecules/CardSelect";
import BoxPlants from "../../organisms/BoxPlants";
import BoxNoResults from "../BoxNoResults";

export default () => {
  const BoardSelect = NewElement("board-select", "", "section");
  BoardSelect.setAttribute("id", "board-select");

  const optionsSun = ["no", "low", "high"];
  const optionsWater = ["regularly", "daily", "rarely"];
  const optionsPets = [true, false];

  const changeSelect = () => {
    const valueCardSun = document.getElementById("select-sun");
    const valueCardWater = document.getElementById("select-water");
    const valueCardPets = document.getElementById("select-pets");

    const idBoxNoResults = document.getElementById("box-no-results");
    const idBoxPlants = document.getElementById("box-plants");
    const idBoardSelect = document.getElementById("board-select");
    const idLoading = document.getElementById("loading");

    const removeElements = () => {
      if (idBoxPlants) idBoxPlants.remove();
      if (idBoxNoResults) idBoxNoResults.remove();
      idLoading.style.display = "none";
    };

    const scrollToResult = () => {
      window.scrollTo({
        top:
          idBoardSelect.offsetTop +
          idBoardSelect.getBoundingClientRect().height,
        behavior: "smooth",
      });
    };

    const errorWhenLookingForPlants = () => {
      removeElements();
      document.body.append(BoxNoResults());
      scrollToResult();
    };

    if (
      valueCardSun.value !== "Select..." &&
      valueCardWater.value !== "Select..." &&
      valueCardPets.value !== "Select..."
    ) {
      idLoading.style.display = "block";

      API_GET_PLANTS(
        valueCardSun.value,
        valueCardWater.value,
        valueCardPets.value
      )
        .then((data) => {
          if (!data.error) {
            const sortFavoriteFirst = data.sort((a, b) => {
              return b.staff_favorite - a.staff_favorite;
            });

            removeElements();
            document.body.append(BoxPlants(sortFavoriteFirst));
            scrollToResult();
          }

          if (data.error) {
            errorWhenLookingForPlants();

            alert(`${data.error} =/`);
            console.log("data.error... ", data.error);
          }
        })
        .catch((e) => {
          errorWhenLookingForPlants();

          alert(
            `Error when trying to connect to server =/                     ${e}`
          );
          console.log("ERROR connect to server... ", e);
        });
    }
  };

  // [INIT] CARD SUN
  const CardSun = CardSelect(
    "sun",
    ImageGlobal.iconSun,
    "1. ",
    "Set the amount of",
    " sunlight ",
    "your plant will get.",
    optionsSun,
    changeSelect
  );
  // [END] CARD SUN

  // [INIT] CARD WATER
  const CardWater = CardSelect(
    "water",
    ImageGlobal.iconWater,
    "2. ",
    "How often do you want to",
    " water ",
    "your plant?",
    optionsWater,
    changeSelect
  );
  // // [END] CARD SUN

  // [INIT] CARD PETS
  const CardPets = CardSelect(
    "pets",
    ImageGlobal.iconChew,
    "3. ",
    "Do you have pets? Do they",
    " chew ",
    "plants?",
    optionsPets,
    changeSelect
  );
  // [INIT] CARD PETS

  BoardSelect.append(CardSun, CardWater, CardPets);

  return BoardSelect;
};
