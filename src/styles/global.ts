import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    scroll-behavior: smooth;
    
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: #495670 #312e38;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: #312e38;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #495670;
    border: 3px solid #312e38;
    border-radius: 10px;
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
