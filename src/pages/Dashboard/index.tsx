import {
    Header ,
    HeaderContainer ,
    Main ,
    MainContent,
    SocialMedia,
    AboutMe,
    MyProjects,
    CarroselAntd,
    MyProjectItem,
    MyProjectTitle,
    MyProjectSubtitle,
    MyProjectContent,
    MyProjectExternalButton
} from './styles'
import Github from '../../assets/github.svg'
import Gmail from '../../assets/gmail.svg'
import Instagram from '../../assets/instagram.svg'
import {data} from '../../components/MyProjects/data'
import {GithubOutlined , ArrowRightOutlined } from '@ant-design/icons'
import { Tag } from 'antd';
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
        <MyProjects>
            <h1 id='myProjects'>Meus Projetos</h1>
            <CarroselAntd arrows={true}  
            
            >
                {data.map(item => (
                    <MyProjectItem>
                        <MyProjectTitle>{item.title}</MyProjectTitle>
                        <MyProjectSubtitle>Sobre :</MyProjectSubtitle>
                        <MyProjectContent >
                            {item.about}
                        <MyProjectExternalButton href={item.linkGithub}>
                            Acessar Repositório
                            <GithubOutlined />
                        </MyProjectExternalButton>
                        {item.linkPublicate && (
                           <MyProjectExternalButton href={item.linkPublicate}>
                           Acessar WebSite 
                           <ArrowRightOutlined />
                       </MyProjectExternalButton> 
                        )}
                        </MyProjectContent>
                        
                        
                        <div className='contentLayout'>
                        <div>
                            {item.demonstration && (
                                <img  src={item.demonstration} alt={item.title} />
                            )}
                        </div>
                            <div>
                                <MyProjectSubtitle>Bibliotecas utilizadas : </MyProjectSubtitle>
                                {item.technologies.map((techItem, index) => 
                                <Tag style={{margin:'5px 10px'}} color={index % 2 ? 'green' : 'cyan'}>{techItem}</Tag>
                            )}
                                
                            </div>
                        </div>
                        
         
                    </MyProjectItem>
                    
                ))}
            </CarroselAntd>
        </MyProjects>
    </>
    )
}