export default (clas, text) => {
  const TextHeader = document.createElement("h1");

  TextHeader.classList.add(clas);
  TextHeader.innerText = text;

  return TextHeader;
};
