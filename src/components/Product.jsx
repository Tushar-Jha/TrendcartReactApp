import React from 'react'
import styled from 'styled-components'
import {FavoriteBorderOutlined,SearchOutlined,ShoppingCartOutlined} from "@material-ui/icons";

const Container=styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#f5fbfd;
    position:relative;
`
const Circle=styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`

const Image=styled.img`
    height:75%;
    z-index:2;
`
const Info=styled.div`
    opacity:0;
    z-index:3;
    width:100%;
    height:100%;
    position:absolute;
    align-items:center;
    justify-content:center;
    background-color:rgba(0,0,0,0.2);
    display:flex;
    transition:all 0.5s ease;
    &:hover{
        opacity:1;
    }
`
const Icon=styled.div`
    background-color:#f9f9ff;
    width:50px;
    height:50px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    cursor:pointer;
    transition:all 0.15s ease;
    &:hover{
        background-color:#e0e0ff;
        transform:scale(1.1);
    }
` 
function Product({item}) {
    return (
        <Container>
            <Circle/>
            <Image src={item.image}/>
            <Info>
                <Icon><FavoriteBorderOutlined/></Icon>
                <Icon><SearchOutlined/></Icon>
                <Icon><ShoppingCartOutlined/></Icon>
            </Info>
        </Container>
    )
}
export default Product
