import styled from 'styled-components'

export const AboutMeContent = styled.div`

padding: 1rem 3rem;
margin: 0 3rem;
border-radius: 5px;
min-height: 290px;
margin-top: 1rem;
background-color: #312E49;
box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
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