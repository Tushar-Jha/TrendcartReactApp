import React from 'react'
import styled from 'styled-components'
import {Send} from '@material-ui/icons';

const Container=styled.div`
    display:flex;
    height:40vh;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background-color:#F7D59C;
`
const Heading=styled.h1`
    font-size:70px;
    font-weight:800;
    margin:20px;
`
const Desc=styled.h3`
`

const Info=styled.div`
    display:flex;
    margin:20px;
`
const Input=styled.input`
    width:500px;
    padding:5px;
    border-radius:0;
`
const Button=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:80px;
    cursor:pointer;
    background-color:#28FFBF;
    border-radius:0;
    transition:all 0.1s ease;
    &:hover{
        background-color:#BCFFB9;
    }
`

function Newsletter() {
    return (
        <Container>
            <Heading>Newsletter!</Heading>
            <Desc>Get timely updates from your favourite products</Desc>
            <Info>
                <Input placeholder="Your Email"></Input>
                <Button><Send/></Button>
            </Info>            
        </Container>
    )
}

export default Newsletter
