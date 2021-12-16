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
    // console.log("changeSelect >> FUNÇÃO QUE VAI GERENCIAR A MUDANÇA DOS BOX'S TIRANDO O NO RESULT E COLOCANDO O DAS PLANTAS, VIRCE-VERSA.");
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

    if (
      valueCardSun.value !== "Select..." &&
      valueCardWater.value !== "Select..." &&
      valueCardPets.value !== "Select..."
    ) {      
      // [V1]  modo 1 de buscar os dados
      valueCardSun.setAttribute("disabled", true); // Desabilitando para não conseguir fazer
      valueCardWater.setAttribute("disabled", true); // varias requisições, antes de ter
      valueCardPets.setAttribute("disabled", true); // terminado a primeira.

      valueCardSun.classList.remove("hover-select");
      valueCardWater.classList.remove("hover-select");
      valueCardPets.classList.remove("hover-select");

      idLoading.style.display = "block";

      fetch(
        `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${valueCardSun.value}&water=${valueCardWater.value}&pets=${valueCardPets.value}`
      )
        .then((r) => r.json())
        .then((data) => {
          const sortFavoriteFirst = data.sort((a, b) => {
            return b.staff_favorite - a.staff_favorite;
          });          
          document.body.append(BoxPlants(sortFavoriteFirst));

          scrollToResult();  
          removeElementAndDisabled();
        })
        .catch((e) => {          
          document.body.append(BoxNoResults());
          
          alert("No plants were found =/");
          console.log("ERROR... ", e);
          
          scrollToResult();
          removeElementAndDisabled();
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
