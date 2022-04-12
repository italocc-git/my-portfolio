import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width:100%;
    height: 50px;
    background-color:rgba(0,0,0,0.75);
    position:fixed;
    left:0;
    top:0;
    right:0;
`

export const HeaderContent = styled.div`
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