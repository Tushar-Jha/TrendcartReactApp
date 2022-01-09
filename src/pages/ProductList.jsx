import { Category } from '@material-ui/icons'
import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
const Container=styled.div``
const Title=styled.h1`
    margin:20px;
`
const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter=styled.div`
    margin:20px;
`
const FilterText=styled.span`
    font-size:20px;
    font-weight:600;
`

const Select=styled.select`
    margin:0px 20px;
    padding:5px;
`
const Option=styled.option``

function ProductList() {
    const location=useLocation();
    const category=location.pathname.split("/")[2];
    const [filters,setFilters]=React.useState({});
    const [sort,setSort]=React.useState("Newest");
    const handleChange=(e)=>{
        const value=e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value,
        });
    };
    return (
        <Container>
            <Navbar/>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select name="color" onChange={handleChange}>
                        <Option disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleChange}>
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value="Newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={category} filter={filters} sort={sort}/>
            <Newsletter/>
            <Footer />
        </Container>
    )
}



export default ProductList
