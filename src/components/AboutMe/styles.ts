import styled from 'styled-components'

export const AboutMeContent = styled.div`
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