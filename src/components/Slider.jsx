import React from 'react';
import styled from 'styled-components';
import {ArrowLeftOutlined,ArrowRightOutlined} from '@material-ui/icons';
import { sliderItems } from '../data';


const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    position:relative;
    overflow:hidden;
`
const Arrow=styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    background-color:#fff7f7;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=>props.direction==="left"&&"10px"};
    right:${props=>props.direction==="right"&&"10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
`

const Wrapper=styled.div`
    display:flex;
    height:100%;
    transform:translateX(${props=>props.slideIndex*-100}vw);
    transition:all 1.5s ease;
`
const Slide=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color:#${props=>props.bg};
`
const ImageContainer=styled.div`
    height:100%;
    padding:20px;
    text-align:center;
    justify-content:center;
    flex:1;
`
const Image=styled.img`
    height:80%;
    padding-top:50px;
`
const InfoContainer=styled.div`
    flex:1;
    padding-right:40px;
    justify-content:center;
    text-align:left;
`
const InfoHead=styled.h1`
    font-size:70px;
    font-weight:900;
`
const InfoDesc=styled.p`
    margin:30px 0px;
    width:600px;
    font-size:20px;
    
`
const Button=styled.button`
    padding:10px;
    font-size:16px;
    background-color:transparent;
    cursor:pointer;
`

function Slider() {
    const [slideIndex,setSlideIndex]=React.useState(0);
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2);
        }else if(direction==="right"){
            setSlideIndex(slideIndex<2?slideIndex+1:0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined></ArrowLeftOutlined>            
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                    <Slide bg={item.bg} key={item.id}>
                    <ImageContainer>
                        <Image src="https://e7.pngegg.com/pngimages/354/556/png-clipart-stick-figure-computer-icons-others-text-logo-thumbnail.png" />
                    </ImageContainer>
                    <InfoContainer>
                            <InfoHead>TITLE</InfoHead>
                            <InfoDesc>THIS IS THE DESCRIPTION OF THE PRODUCT ANBSUSA UHSAH ISN (SAJNSN AO</InfoDesc>
                            <Button>BUTTON</Button>
                    </InfoContainer>
                </Slide>
                ))}    
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined></ArrowRightOutlined>            
            </Arrow>
        </Container>
    )
}

export default Slider
