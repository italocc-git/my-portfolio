import {AboutMeContent} from './styles'

type AboutMeTypes = {
    id : string;
}

export function AboutMe({id} : AboutMeTypes){
    return(
        <AboutMeContent id={id}>
            <h1>Sobre Mim</h1>
            <p>Meu nome é <b>Ítalo Costa</b>, sou formado em Sistemas de Informação pela Faculdade 7 de Setembro (Fortaleza-CE) e atualmente estou trabalhando como Desenvolvedor WEB Front-End React.
            <br/>
            Tenho mais de 1 ano de experiência como Desenvolvedor e trabalho na Empresa DartDigital desenvolvendo projetos , propondo soluções ,
            realizando testes de aplicação e correções de bugs . 
            <br/>
            Sou apaixonado por programação , bastante comprometido e motivado pelo que faço. Estou sempre buscando aprender novas técnicas e construindo soluções em
            meus projetos pessoais e profissionais . 
        </p>
        </AboutMeContent>
    )
}