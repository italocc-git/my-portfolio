import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0
  }

  body {
    background : #312e38;
    color: white;
    -webkit-font-smoothing: antialiased;
  }
  a{
    text-decoration:none;
    color: white;
  }
  body,
  button,
  input {
    font-family: 'Roboto Slab', serif;
    font-size : 16px;
  }
  h1,h2,h3,h4,h5,h6, strong, p {
    font-weight : 500;
  }
  ul{
    list-style: none;
  }
  button {
    cursor : pointer;
  }
`;
