import Img from "../Img";
import NewElement from "../NewElement";
import ImageGlobal from "../../../helpers/ImageGlobal";

export default () => {
  const GoToGitHub = NewElement("link-github", "", "a");
  GoToGitHub.setAttribute(
    "href",
    "https://github.com/J0se-Luiz/Greenthumb-VanillaJS"
  );
  GoToGitHub.setAttribute("target", "_blank");
  GoToGitHub.setAttribute("rel", "noopener");

  const btnGitHub = NewElement("btn-github", "", "button");
  const imgGitHub = Img("img-github", ImageGlobal.goToGitHub, "Go to GitHub");

  const textGitHub = NewElement("text-github", "Go to GitHub", "p");

  btnGitHub.append(imgGitHub, textGitHub);
  GoToGitHub.append(btnGitHub);

  window.addEventListener("scroll", function () {
    const scroll = this.scrollY;

    console.log(scroll);

    if (scroll > 600) {
      btnGitHub.style.removeProperty("bottom");
      btnGitHub.style.top = "10px";
    }

    if (scroll < 600) {
      btnGitHub.style.removeProperty("top");
      btnGitHub.style.bottom = "50px";
    }
  });

  return GoToGitHub;
};
