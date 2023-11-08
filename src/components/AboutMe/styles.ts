import styled from 'styled-components'

export const AboutMeContent = styled.div`

padding: 1rem 3rem;
min-height: 290px;
margin-top: 1rem;
box-shadow: 0px 10px 15px #fafafa1a, 0px -10px 15px #fafafa1a;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1 {
    text-align: center;
    margin:3rem 0;
    font-size: 3rem;
    color:#fff;
}   
p{
    color:#fff;
    font-size:1.5rem;
    line-height:2.5rem;
    font-family: 'Roboto Slab', serif;
    letter-spacing: 0.01071em;
    text-align: justify;
}

@media(max-width: 640px){
    & {
        padding: 0.5rem 1rem;
        margin: 0 1rem;

        h1 {
            margin: 1rem 0;
            font-size: 1.5rem;
        }
        p {
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }
}


`