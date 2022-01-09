import React from 'react'
import styled from 'styled-components';
import {Badge} from "@material-ui/core";
import {Search,ShoppingCartOutlined} from '@material-ui/icons';
import { mobile } from '../responsive';

const Container=styled.div`
    align-items:center;
    height:60px;
    background-color:#F0ECE3;
`
const Wrapper=styled.div`
    align-items:center;
    padding:10px 20px;
    display:flex;
`
const Left=styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const SearchField=styled.div`
    border:1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
`
const Input=styled.input`
    border:none;
    padding:5px;
`
const Language=styled.span`
    font-size:14;
    align-items:center;
    cursor:pointer;
`

const Center=styled.div`
    flex:1; 
`
const Logo=styled.h1`
    text-align:center;
    font-weight:bold;
`

const Right=styled.div`
    display:flex;
    margin-right:20px;
    flex:1;
    justify-content:flex-end;
`
const MenuItem=styled.div`
    font-size:14px;
    padding-left:35px;
    padding-top:10px;
    cursor:pointer;
`

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchField>
                        <Input></Input>
                        <Search style={{color:"gray",fontSize:16,marginRight:5}}/>
                    </SearchField>
                </Left>
                <Center>
                    <Logo>TrendCart</Logo>    
                </Center>
                <Right>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem>SIGNIN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
