import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Container=styled.div`
    flex:1;
    justify-content:center;
    text-align:center;  
    position:relative;
    padding:5px;
`
const Image=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const Information=styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    padding:5px;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Title=styled.h2`
    margin:25px;
    color:white;
    font-weight:800;
`
const Button=styled.button`
    padding:10px;
    font-size:16px;
    background-color:white;
    color:gray;
    cursor:pointer;
    opacity:0.75;
`

function CategoryItem({item}) {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img}/>
                <Information>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Information>
            </Link>
        </Container>
    )
}

export default CategoryItem
