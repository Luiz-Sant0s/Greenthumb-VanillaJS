import NewElement from "./components/atoms/NewElement";
import GoToGitHub from "./components/atoms/GoToGitHub";
import Loading from "./components/atoms/Loading";
import Header from "./components/organisms/Header/Header";
import HeaderMobile from "./components/organisms/Header/HeaderMobile";
// import HeaderJS from "./components/organisms/Header/HeaderJS";
import BoardSelect from "./components/organisms/BoardSelect";
import BoxNoResults from "./components/organisms/BoxNoResults";

const App = () => {
  const App = NewElement("App", "", "main");
  
  //     [INICIO] HEADER
  // Two components of the header were created so that it is dynamically updated 
  // when testing resolution in the browser inspector.
  // If you use HeaderJS, you'll have the same result, with the detail you'll need
  // refresh the page/refresh when you have a resolution lower or higher than 800px. 
  document.body.append(Header(), HeaderMobile()); 
  // document.body.append(HeaderJS());
  //      [FIM] HEADER

  App.append(BoardSelect());
  App.append(GoToGitHub());
  App.append(Loading());
  App.append(BoxNoResults());
  
  return App;
};

export default App;
