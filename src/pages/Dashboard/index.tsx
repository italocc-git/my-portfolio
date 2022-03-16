import {
    Header ,
    HeaderContainer ,
    Main ,
    MainContent,
    SocialMedia,
    AboutMe,
} from './styles'
import Github from '../../assets/github.svg'
import Gmail from '../../assets/gmail.svg'
import Instagram from '../../assets/instagram.svg'
import Whatsapp from '../../assets/whatsapp.svg'
import { MyProjects } from '../../components/MyProjects'

export function Dashboard(){

    return(
        <>
        <Header>
            <HeaderContainer>
                <h6><a href='#me'>Italo Costa</a></h6>
                <ul>
                    <li><a href='#aboutMe'>SOBRE MIM</a></li>
                    <li><a href='#myProjects'>MEUS PROJETOS</a></li>
                    <li><a href='#myGoals'>MEUS OBJETIVOS </a></li>
                </ul>
            </HeaderContainer>
            
        </Header>
        <Main id='me'>
            <img src='https://avatars.githubusercontent.com/u/50462308?s=400&u=99d79599e51f1fa04a45cfb8f357adbae898c9b9&v=4' alt='githubProfile' />
                <MainContent>
                    <h3>Ítalo Costa </h3>
                    <h6>Estudante e Desenvolvedor React</h6>
                    <SocialMedia>
                        <a href='https://github.com/italocc-git'>
                            <img src={Github} alt='GitHub' />
                        </a>
                        <a href="mailto:italocc16@gmail.com">
                            <img src={Gmail} alt='Gmail'/>
                        </a>
                        
                        <a href="https://www.instagram.com/italoccavalcante/">
                            <img src={Instagram} alt='Instagram'/> 
                        </a>
                        <a href="https://wa.me/5588999075544">
                            <img src={Whatsapp} alt='Whatsapp'/> 
                        </a>
                    </SocialMedia>
                </MainContent>
                
        </Main>
        <AboutMe id='aboutMe'>
            <h1>Sobre Mim</h1>
        <p>Meu nome é <b>Ítalo Costa</b>, sou formado em Sistemas de Informação pela Faculdade 7 de Setembro (Fortaleza-CE) e atualmente estou trabalhando como Desenvolvedor WEB Front-End React.
            <br/>
          Tenho mais de 1 ano de experiência como Desenvolvedor e trabalho na Empresa DartDigital desenvolvendo projetos , propondo soluções ,
          realizando testes de aplicação e correções de bugs . 
          <br/>
          Sou apaixonado por programação , bastante comprometido e motivado pelo que faço. Estou sempre buscando aprender novas técnicas e construindo soluções em
          meus projetos pessoais . 
        </p>
        </AboutMe>
        <MyProjects/>
        
    </>
    )
}