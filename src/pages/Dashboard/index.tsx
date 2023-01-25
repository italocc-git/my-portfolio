import { Main, MainContent, SocialMedia } from "./styles";
import Github from "../../assets/github.svg";
import Gmail from "../../assets/gmail.svg";
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import { MyProjects } from "../../components/MyProjects";
import { AboutMe } from "../../components/AboutMe";
import { Header } from "../../components/Header";
import { FormattedMessage } from "react-intl";
import { MyExperiences } from "../../components/MyExperiences";
export function Dashboard() {
  return (
    <>
      <Header />
      <Main id="me">
        <img
          src="https://avatars.githubusercontent.com/u/50462308?s=400&u=99d79599e51f1fa04a45cfb8f357adbae898c9b9&v=4"
          alt="githubProfile"
        />
        <MainContent>
          <h3>Ítalo Costa </h3>
          <h6>
            <FormattedMessage id="profile_description" />
          </h6>
          <SocialMedia>
            <a href="https://github.com/italocc-git">
              <img src={Github} alt="GitHub" />
            </a>
            <a href="mailto:italocc16@gmail.com">
              <img src={Gmail} alt="Gmail" />
            </a>

            <a href="https://www.instagram.com/italoccavalcante/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://wa.me/5588999075544">
              <img src={Whatsapp} alt="Whatsapp" />
            </a>
          </SocialMedia>
        </MainContent>
      </Main>
      <AboutMe id="aboutMe" />
      <MyExperiences id="my_xp" />
      <MyProjects id="myProjects" />
    </>
  );
}
