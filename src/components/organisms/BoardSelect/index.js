import ImageGlobal from "../../../helpers/ImageGlobal";
import NewElement from "../../atoms/NewElement";
import CardSelect from "../../molecules/CardSelect";

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

    if (
      valueCardSun.value !== "Select..." &&
      valueCardWater.value !== "Select..." &&
      valueCardPets.value !== "Select..."
    ) {
      // console.log(
      //   "Dentro desse IF vai vim o FETCH na API, para mostra as plantas que vem como retorno."
      // );

      // V1  modo de buscar os dados
      // fetch(
      //   `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${valueCardSun.value}&water=${valueCardWater.value}&pets=${valueCardPets.value}`
      // )
      //   .then((r) => r.json())
      //   .then((data) => {
      
      //      console.log(`dados!  ${data}`);
      //      alert(`Primeira Planta sugerida é!>>  ${data[0].name}`);
      //     alert(`Segunda Planta sugerida é hehe>>, ${data[1].name}`);

      //   })
      //   .catch((e) => {
      //     alert(`ERRO AO TENTAR CONSULTAR, =/ ${e}`);
      //   });

      // v2 outro modo de buscar os dados
      const request = require("request");
      request(
        `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${valueCardSun.value}&water=${valueCardWater.value}&pets=${valueCardPets.value}`,
        (error, response) => {
          // console.log(response.body);
          console.log(response);

          try {
            if (response.body) {
              const data = JSON.parse(response.body);

              alert(`Primeira Planta sugerida é>>, ${data[0].name}`);
              alert(`Segunda Planta sugerida hehe >>, ${data[1].name}`);
              console.log("............", data);
            }
          } catch {
            alert(`Nenhuma planta encontrada =/`);
            console.log("Nenhuma planta encontrada", error);
          }
        }
      );

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
