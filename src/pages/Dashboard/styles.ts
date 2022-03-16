import styled from 'styled-components'
import { Carousel } from 'antd';

export const Header = styled.div`
    width:100%;
    height: 50px;
    background-color:rgba(0,0,0,0.55);
    position:fixed;
    left:0;
    top:0;
    right:0;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 100%;
    
    padding: 0 25px;
    position:relative;
    z-index:2;

    h6 {
        font-size:1.50rem;
        font-weight:500;
        line-height:1.1;
        letter-spacing:0.0075em;
        z-index:2;
        color:#fff;
    }
    ul{
        display: flex ;
        gap:1rem;  
        z-index:2;
        
        li{
            font-size:1rem;
            font-weight:bold;
            cursor:pointer;
            &:hover {
            border-bottom: 1px solid #FFF;
            }
        }
    }
`

export const Main = styled.div`
    height: 100vh;
    width: 100vw;
    z-index:1;
    background-color:transparent;
    display:flex ;
    flex-direction:column;
    align-items:center;
    justify-content: center;

    img {
        border-radius: 50%;
        height: 150px;
        width: 150px;
    }

`

export const MainContent = styled.div`
    text-align: center;
    h3{
        font-size:3rem;
        color: #fff;
    }
    h6{
        font-size:1.5rem;
        color: #fff;
    }
`
export const SocialMedia = styled.ul`
    margin-top: 1rem;
    display: flex ;
    justify-content: center;
    gap:0.5rem;
    list-style: none;  
    z-index:2;

    a{
        img{
            width:28px;
            height:28px;

        }
        text-decoration:none;
    }
`

export const AboutMe = styled.div`
    display: flex ;
    flex-direction:column;
    align-items:center;
    padding: 0 50px;
    margin: 0 50px;
    border-radius: 5px;
    min-height: 290px;
    margin-top: 1rem;
    background-color: #FFF;
    box-shadow:0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    h1 {
        margin:3rem 0;
        font-size: 3rem;
    }
    p{
        color:rgba(0,0,0,0.83);
        font-size:1.5rem;
        line-height:2.5rem;
        font-family: 'Roboto Slab', serif;
        letter-spacing: 0.01071em;
        text-align:justify;
    }
    

`

export const MyProjects = styled.div`
     h1{
        font-size: 3.5rem;
        
        text-align:center;
        color:#fff;
    } 

`

export const CarroselAntd = styled(Carousel)`
    padding: 0 50px;
    height: 750px;
    
`
export const MyProjectItem = styled.div`
        height: 100%;
        background: #364d72;
        padding:0 15px;
    .contentLayout {
        display: flex;
        align-items:center;
        justify-content:center;
    }
    img{
        height: 450px;
        margin-bottom:1rem;
    }
`

export const MyProjectTitle = styled.h1`
        text-align:center;
        color:#FFF;
        font-size:2rem;
        font-weight:600;
`

export const MyProjectSubtitle = styled.h3`
            font-size:1.2rem;
            font-weight:600;
            color:#FFF;
        
`
export const MyProjectContent = styled.p`
            font-size:1rem;
            color: #fff;
            display:flex ;
            justify-content: space-around;
`

export const MyProjectExternalButton = styled.a`
            display: flex ;
            align-items : center;
            justify-content: center;
            gap:1rem;
            width:230px;
            height: 50px ;
            background: black;
            border-radius:10px;
            svg{
                width:28px;
                height:28px ;
            }
`