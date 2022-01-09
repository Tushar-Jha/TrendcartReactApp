import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { categories } from '../data'

const Container=styled.div`
    display:flex;
    width:100%;
    height:70vh;
    background-color:#ebedff;
    overflow:hidden;
`
function Categories() {
    return (
        <Container>
            {categories.map((item)=>(
                <CategoryItem item={item} key={item.id}></CategoryItem>
            ))}
        </Container>
    )
}
export default Categories
