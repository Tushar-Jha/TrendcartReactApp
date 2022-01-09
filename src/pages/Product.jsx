import React from 'react'
import styled  from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Container=styled.div``
const Wrapper=styled.div`
    padding:50px;
    display:flex;
`
const ImageContainer=styled.div`
    flex:1;
`
const Image=styled.img`
    width:80%;
    height:80vh%;
`
const InfoContainer=styled.div`
    flex:1;
`
const Title=styled.h1`
    font-size:50px;
    font-weight:900;
    margin:10px 0px;
`
const Desc=styled.p`
    font-size:20px;
    margin-top:50px;
    margin-right:30px;
`
const Cost=styled.h2`
    padding:30px 0;
    font-size:40px;
    font-weight:500;
`

const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
    margin-right:200px;
`
const Filter=styled.div`
    text-align:center;
    justify-content:center;
    display:flex;
`
const FilterColor=styled.div`
    margin:0px 5px;
    flex:1;
    cursor:pointer;
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
`

const FilterTitle=styled.span`
    font-size:20px;
`
const Select=styled.select`
    cursor:pointer;
    padding:5px;
    margin:0px 10px;
`
const Option=styled.option`
`
const AddContianer=styled.div`
    display:flex;
    justify-content:space-between;
    margin:20px 0px;
`
const Amount=styled.div`
    align-items:center;
    width:120px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Remove=styled.span`
    flex:1;
    font-size:30px;
    cursor:pointer;
`
const Add=styled.span`
    flex:1;
    font-size:30px;
    cursor:pointer;
`
const Value=styled.span`
    margin-right:20px;
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    width:30px;
    height:30px;
    border:2px solid teal;
    border-radius:5px;
    font-size:20px;
`
const Button=styled.button`
    font-weight:600;
    cursor:pointer;
    border:3px solid teal;
    border-radius:0px;
    background-color:transparent;
    margin-right:190px;
    padding:20px;
`

function Product() {
    return (
        <Container>
           <Navbar />
           <Wrapper>
               <ImageContainer>
                   <Image src="https://m.media-amazon.com/images/I/51HWoYV73tL._UL1000_.jpg"/>
               </ImageContainer>
               <InfoContainer>
                   <Title>Denim Jeans</Title>
                   <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Curabitur efficitur vestibulum sagittis. 
                   Fusce rutrum eros auctor varius gravida. 
                   Etiam quam mi, pretium sed purus ut, lobortis semper turpis. In hac habitasse platea dictumst. 
                   In venenatis augue in nunc sagittis, vitae pulvinar elit interdum. 
                    Fusce at ullamcorper mi, vitae aliquet quam. Proin tristique lorem a feugiat accumsan. </Desc>
                   <Cost>$200</Cost>
                   <FilterContainer>
                        <Filter>
                            <FilterTitle>Color: </FilterTitle>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="blue"></FilterColor>
                            <FilterColor color="gray"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size: </FilterTitle>
                            <Select>
                            <Option disabled selected>ALL</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContianer>
                        <Amount>
                            <Remove>-</Remove>
                            <Value>1</Value>
                            <Add>+</Add>
                        </Amount>
                        <Button>ADD TO CART</Button>
                    </AddContianer>
               </InfoContainer>
           </Wrapper>
           <Newsletter></Newsletter>
           <Footer></Footer>
        </Container>
    )
}


export default Product
