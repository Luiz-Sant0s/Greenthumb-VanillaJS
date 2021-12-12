import Header from "./components/organisms/Header";

const App = () => {
  const App = document.createElement("main");

  App.setAttribute("class", "App");
  document.body.append(Header());

  return App;
};

export default App;
