import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width:100%;
    height: 50px;
    background-color:rgba(0,0,0,0.75);
    position:fixed;
    left:0;
    top:0;
    right:0;
    z-index:2;
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 100%;
    
    padding: 0 25px;
    position:relative;
    

    span {
        font-size:1.50rem;
        font-weight:500;
        line-height:1.1;
        letter-spacing:0.1005em;
        position: fixed;
        left: 47%;
        color:#fff;

        @media(max-width: 1366px){
            & {
                display:none;
            }
        }
    }
    ul{
        display: flex ;
        gap:1rem;  
        margin: 0;
        
        li{
            font-size:1rem;
            font-weight:bold;
            cursor:pointer;
            &:hover {
            border-bottom: 1px solid #FFF;
            }

            img {
                height:24px;
                width:24px;
                
            }
        }
        @media(max-width: 660px){
             & a {
                display:none;
            } 
        }
    }
`