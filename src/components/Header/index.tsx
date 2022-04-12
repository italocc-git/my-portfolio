import {HeaderContainer , HeaderContent } from './styles'
export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <h6><a href='#me'>Italo Costa</a></h6>
                <ul>
                    <li><a href='#aboutMe'>SOBRE MIM</a></li>
                    <li><a href='#myProjects'>MEUS PROJETOS</a></li>
                    <li><a href='#myGoals'>MEUS OBJETIVOS </a></li>
                </ul>
            </HeaderContent>
            
        </HeaderContainer>
    )
}