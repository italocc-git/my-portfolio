import styled from 'styled-components'

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
            width:30px;
            height:30px;

        }
        text-decoration:none;
    }
`



