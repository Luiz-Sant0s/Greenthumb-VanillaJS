import Header from "./components/organisms/Header/Header";
import HeaderMobile from "./components/organisms/Header/HeaderMobile";

const App = () => {
  const App = document.createElement("main");

  App.setAttribute("class", "App");

  //              HEADER
  // Foi criado dois componentes do header para que seja atualizado dinamicamente 
  // quando testa resolução no inspetor do browser.
  // Se utilizar o HeaderJS, terá resultado parecido, com o detalhe de quer precisara
  // atualizar a pagina/refresh quando tiver em resolução menor ou maior que 800px. 
  document.body.append(Header()); 
  document.body.append(HeaderMobile());

  return App;
};

export default App;
