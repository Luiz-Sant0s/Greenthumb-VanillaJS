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
    // console.log("changeSelect >> FUNCTION THAT WILL MANAGE THE CHANGE OF THE BOX'S TAKING THE NO RESULT AND PLACING THE PLANS, VIRCE-VERSA.");
    const valueCardSun = document.getElementById("select-sun");
    const valueCardWater = document.getElementById("select-water");
    const valueCardPets = document.getElementById("select-pets");

    const idBoxNoResults = document.getElementById("box-no-results");
    const idBoxPlants = document.getElementById("box-plants");
    const idBoardSelect = document.getElementById("board-select");
    const idLoading = document.getElementById("loading");

    const removeElementAndDisabled = () => {
      if (idBoxPlants) idBoxPlants.remove();
      if (idBoxNoResults) idBoxNoResults.remove();
      idLoading.style.display = "none";

      valueCardSun.removeAttribute("disabled");
      valueCardWater.removeAttribute("disabled");
      valueCardPets.removeAttribute("disabled");

      valueCardSun.classList.add("hover-select");
      valueCardWater.classList.add("hover-select");
      valueCardPets.classList.add("hover-select");
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
      document.body.append(BoxNoResults());
      scrollToResult();
      removeElementAndDisabled();
    };

    if (
      valueCardSun.value !== "Select..." &&
      valueCardWater.value !== "Select..." &&
      valueCardPets.value !== "Select..."
    ) {
      // [V1]  mode 1 to fetch the data
      valueCardSun.setAttribute("disabled", true); // Disabling to not be able to do
      valueCardWater.setAttribute("disabled", true); // several requests, before having
      valueCardPets.setAttribute("disabled", true); // finished the first.

      valueCardSun.classList.remove("hover-select");
      valueCardWater.classList.remove("hover-select");
      valueCardPets.classList.remove("hover-select");

      idLoading.style.display = "block";

      const controller = new AbortController();
      // 5 second timeout: time to tackle the retch
      const timeoutFetch = setTimeout(() => controller.abort(), 5000);

      fetch(
        `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${valueCardSun.value}&water=${valueCardWater.value}&pets=${valueCardPets.value}`,
        { signal: controller.signal }
      )
        .then((r) => r.json())
        .then((data) => {
          if (!data.error) {
            const sortFavoriteFirst = data.sort((a, b) => {
              return b.staff_favorite - a.staff_favorite;
            });

            document.body.append(BoxPlants(sortFavoriteFirst));
            scrollToResult();
            removeElementAndDisabled();
          };

          if (data.error) {
            errorWhenLookingForPlants();

            alert(`${data.error} =/`);
            console.log("data.error... ", data.error);
          };
        })
        .catch((e) => {
          errorWhenLookingForPlants();

          alert(
            `Error when trying to connect to server =/                     ${e}`
          );
          console.log("ERROR connect to server... ", e);
        });

      // [V2] mode 1 to fetch the data
      // const request = require("request");
      // request(
      //   `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${valueCardSun.value}&water=${valueCardWater.value}&pets=${valueCardPets.value}`,
      //   (error, response) => {
      //     try {
      //       if (response.body) {
      //         const data = JSON.parse(response.body);
      //         if (idBoxPlants) idBoxPlants.remove();
      //         if (idBoxNoResults) idBoxNoResults.remove();
      //         document.body.append(BoxPlants(data));
      //       }
      //     } catch(e) {
      //       alert(`No plants were found =/`);
      //       if (idBoxPlants) idBoxPlants.remove();
      //       if (idBoxNoResults) idBoxNoResults.remove();
      //       document.body.append(BoxNoResults());
      //     }
      //   }
      // );
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
