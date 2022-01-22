import NewElement from "./components/atoms/NewElement";
import GoToGitHub from "./components/atoms/GoToGitHub";
import Loading from "./components/atoms/Loading";
import Header from "./components/organisms/Header/Header";
import BoardSelect from "./components/organisms/BoardSelect";
import BoxNoResults from "./components/organisms/BoxNoResults";

const App = () => {
  const App = NewElement("App", "", "main");

  App.append(BoardSelect());
  App.append(GoToGitHub());
  App.append(Loading());
  App.append(BoxNoResults());

  return App;
};

Header();
document.body.append(App());
