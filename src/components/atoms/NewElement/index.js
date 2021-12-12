export default (clas, text, element) => {
  const NewElement = document.createElement(element);

  NewElement.classList.add(clas);
  NewElement.innerText = text;

  return NewElement;
};
