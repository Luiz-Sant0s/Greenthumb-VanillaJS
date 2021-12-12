export default (clas, text) => {
  const Text = document.createElement("p");

  Text.classList.add(clas);
  Text.innerText = text;

  return Text;
};
