import styled from 'styled-components'
import { Carousel } from 'antd';

type ArrowType = {
    left?: string
    right?: string
}

export const MyProjectsContainer = styled.div`
     #myProjects{
        text-align: center;
        font-size:3rem;
        color:#fff;
        margin: 2rem 0;
    } 

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
        height: 700px;
        background: #364d72;
        padding:10px 15px;
        margin-bottom:3rem;
    .contentLayout {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap:1.5rem;
    }
    img{
        height: 390px;
        margin-bottom:1rem;
    }
`

export const MyProjectTitle = styled.h1`
        text-align:center;
        color:#FFF;
        font-size:2rem;
        font-weight:600;
`

export const MyProjectSubtitle = styled.div`
            font-size:1.2rem;
            font-weight:600;
            color:#FFF;
        
`
export const MyProjectContent = styled.div`
            
            
            display: flex ;
            justify-content: space-between;
            padding: 10px 10px;
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