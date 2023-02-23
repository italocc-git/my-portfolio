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
            transition: background 0.2s;
            overflow: inherit;
            &:hover.github {
                
                background: black;
                
            }
            &:hover.gmail {
                
                background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
                
            }

            &:hover.insta {
               
                background: #d6249f;
                background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
                
            }

            &:hover.whats {
                
                background: #1DA57A;
                
            }
        }
        text-decoration:none;
        
        
    
    }
`



