import { MyProjects } from "../../components/MyProjects";
import { AboutMe } from "../../components/AboutMe";
import { Header } from "../../components/Header";
import { MainPresentationContent } from "../../components/MainPresentationContent";
export function Dashboard() {
  return (
    <>
      <Header />
      <MainPresentationContent id='me'/>
      <AboutMe id="aboutMe" />
      <MyProjects id="myProjects" />
      
    </>
  );
}
