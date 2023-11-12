import styled from 'styled-components'
import { Carousel } from 'antd';

type ArrowType = {
    left?: string
    right?: string
}

export const MyProjectsContainer = styled.div`
    box-shadow: rgba(250, 250, 250, 0.1) 0px 10px 15px;
    box-sizing: content-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:1.5rem;

`
export const MyProjectsTitle = styled.h1`
    text-align: center;
        font-size:3rem;
        color:#fff;
        padding: 3rem 0;
`
export const CarroselAntd = styled(Carousel)`
    padding: 0 50px; 
    
`

export const CarrouselArrow = styled.div<ArrowType>`
    position: absolute;
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    top: 50%;
    color: white;
    font-size:1.5rem;
    transition: color 0.5s;
    
    
    &:hover{
        color:#1890ff
    }

`


export const MyProjectItem = styled.div`
        height: 100%;
        padding:10px 15px;
        margin-bottom:3rem;
        border-radius: 5px;

        h1 {
            font-size:1.2rem;
            font-weight:600;
            color:#FFF;
        }
    .contentLayout {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap:1.5rem;

        @media(max-width: 1070px){
            & {
                flex-direction: column;
            }
        }
    }
    img{
        height: 390px;
        margin-bottom:1rem;

        @media(max-width: 1070px){
            & {
                max-height: 205px;
            }
        }
        @media(max-width: 470px){
            & {
                max-height: 135px;
            }
        }
    }

    .errorMessage {
        color: #ef4411;
        font-weight: 600;
        
    }
`

export const MyProjectTitle = styled.h1`
        text-align:center;
        color:#FFF;
        font-size:2rem;
        font-weight:600;

        @media(max-width: 840px){
            & {
                font-size:1rem;
            }
        }
`

export const MyProjectContentDescription = styled.p`
    font-size:1rem;
    color: #fff;
    max-width: 50vw;
    text-align: justify;
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

export const MyProjectContent = styled.div`   
            display: flex ;
            justify-content: space-between;
            padding: 10px 10px;

            @media(max-width: 1270px){
            & {
                flex-direction : column;
                align-items: center;
            }
        }
`

export const MyProjectTechnologies = styled.div`
    display: grid;
    grid-template-columns: 140px 140px 140px 140px;
    column-gap: 1.5rem;

    @media(max-width: 840px){
            & {
                display: none;
            }
        }
`

export const MyProjectTechnologiesItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 1rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
        img {
            width: 75px;
            height: 75px;
            transition: transform 0.5s;
            border-radius: 0.25rem;

            &:hover {
                transform: translate(0, 20%);
            }
        }
        span {
            font-size: 0.8rem;
        }
`
