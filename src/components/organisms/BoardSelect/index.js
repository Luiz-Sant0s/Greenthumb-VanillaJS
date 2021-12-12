export default () => {
  const BoardSelect = document.createElement("section");
  BoardSelect.classList.add("boardSelect");

  const CardSelect = document.createElement("aside");
  CardSelect.classList.add("cardSelect");

  const CardSelect2 = document.createElement("aside");
  CardSelect2.classList.add("cardSelect");

  const CardSelect3 = document.createElement("aside");
  CardSelect3.classList.add("cardSelect")


  
BoardSelect.append(CardSelect);
BoardSelect.append(CardSelect2);
BoardSelect.append(CardSelect3);
  return BoardSelect;
};
