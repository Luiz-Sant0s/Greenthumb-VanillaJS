export default () => {
  const Loading = document.createElement("loading");

  Loading.classList.add("loading");
  Loading.setAttribute("id", "loading");
  Loading.setAttribute("alt", "loading");

  return Loading;
};
