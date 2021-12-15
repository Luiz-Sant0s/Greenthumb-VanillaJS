import ImageGlobal from "../../../helpers/ImageGlobal";
import NewElement from "../../atoms/NewElement";
import CardSelect from "../../molecules/CardSelect";
import BoxPlants from "../../organisms/BoxPlants";
import BoxNoResults from "../BoxNoResults";

export default () => {
  const BoardSelect = NewElement("board-select", "", "section");

  const optionsSun = ["no", "low", "high"];
  const optionsWater = ["regularly", "daily", "rarely"];
  const optionsPets = [true, false];

  const changeSelect = () => {
    // console.log("FUNÇÃO QUE VAI GERENCIAR A MUDANÇA DAS PLANTAS");
    const valueCardSun = document.getElementById("select-sun");
    const valueCardWater = document.getElementById("select-water");
    const valueCardPets = document.getElementById("select-pets");

    const idBoxNoResults = document.getElementById("box-no-results");
    const idBoxPlants = document.getElementById("box-plants");

    if (
      valueCardSun.value !== "Select..." &&
      valueCardWater.value !== "Select..." &&
      valueCardPets.value !== "Select..."
    ) {
      // console.log(
      //   "Dentro desse IF vai vim a respota da API."
      // );

      // [V1]  modo 1 de buscar os dados
      valueCardSun.setAttribute("disabled", true); // Desabilitando para não conseguir fazer
      valueCardWater.setAttribute("disabled", true); // varias requisições, antes ter
      valueCardPets.setAttribute("disabled", true); // terminado a primeira.
      fetch(
        `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${valueCardSun.value}&water=${valueCardWater.value}&pets=${valueCardPets.value}`
      )
        .then((r) => r.json())
        .then((data) => {
          if (idBoxPlants) idBoxPlants.remove();
          if (idBoxNoResults) idBoxNoResults.remove();
          
          const sortFavoriteFirst = data.sort((a,b) => {
            return b.staff_favorite - a.staff_favorite;
          });
          
          document.body.append(BoxPlants(sortFavoriteFirst));

          valueCardSun.removeAttribute("disabled");
          valueCardWater.removeAttribute("disabled");
          valueCardPets.removeAttribute("disabled");
        })
        .catch((e) => {
          if (idBoxPlants) idBoxPlants.remove();
          if (idBoxNoResults) idBoxNoResults.remove();
          document.body.append(BoxNoResults());

          alert("No plants were found =/");
          console.log("ERROR... ", e);

          valueCardSun.removeAttribute("disabled");
          valueCardWater.removeAttribute("disabled");
          valueCardPets.removeAttribute("disabled");
        });

      // [V2]  modo 2 de buscar os dados
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
