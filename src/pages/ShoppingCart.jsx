import styled from "styled-components"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Container=styled.div`
    overflow:hidden;

`
const Wrapper=styled.div`
    padding:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-cintent:center;
`
const Title=styled.h1`
    font-weight:300;
    margin-top:20px;
`
const Buttons=styled.div`
    margin-top:20px;
    padding:0px 30px;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const TopTexts=styled.div`
`
const TopText=styled.span`
    cursor:pointer;
    text-decoration:underline;
    margin:0px 40px;
`
const Button=styled.button`
    font-size:14px;
    font-weight:600;
    padding:10px;
    cursor:pointer;
    border:1px solid black;
    border:${props=>props.type==="filled"?"1px solid white":"2px solid black"};
    background-color:${props=>props.type==="filled"?"black":"white"};
    color:${props=>props.type==="filled"?"white":"black"};
`

const Bottom=styled.div`
    width:100vw;
    display:flex;
    justify-content:space-between;
`
const Info=styled.div`
    flex:3;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Product=styled.div`
    width:100%;
    display:flex;
    padding:20px;
    display:flex;
    align-items:center;
    justify-content:left;
`

const ProductDetails=styled.div`
    display:flex;
    flex:3;
    align-items:left;
    justify-content:space-between;
    padding:20px;
`
const ProductImage=styled.img`
    width:200px;
    height:200px;
`

const TextDetails=styled.div`
    min-width:250px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:30px 0px;
`
const Detail=styled.p`
`
const Color=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:gray;
`

const PriceDetails=styled.div`
    flex:2;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:20px;
`

const ProductAmountContainer=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const Add=styled.span`
    font-size:20px;
    cursor:pointer;
`
const Remove=styled.span`
    font-size:20px;
    cursor:pointer;
`
const ProductAmount=styled.span`
    margin-left:20px;
    margin-right:20px;
    font-size:26px;
    border:2px solid teal;
    border-radius:5px;
    width:30px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const ProductPrice=styled.h1`
    font-size:24px;
    font-weight:500;
    margin-top:30px;
`
const Hr=styled.hr`
    background-color:#cec0c0;
    height:1px;
    border:none;
    width:90%;
`
const Summary=styled.div`
    padding:20px;
    flex:1;
    margin-right:40px;
    height:300px;
    border:1px solid #c3c0c0;
    border-radius:10px;
    display:flex;
`
const SummaryTitle=styled.h1`
    font-size:24px;
    font-weight:300;
`
const SummaryItem=styled.div`
    width:300px;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
`
const SummaryItemContainer=styled.div`
    dipsly:flex;
    flex-direction:column;
`

const SummaryItemText=styled.span`
    font-weight:800;
`
const SummaryItemPrice=styled.span`

`
function ShoppingCart() {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Buttons>
                    <Button>CONTINUE SHOPPING</Button>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <Button type="filled">CHECKOUT NOW</Button>
                </Buttons>
                <Bottom>
                    <Info>
                    <Product>  
                        <ProductDetails>
                            <ProductImage src="https://m.media-amazon.com/images/I/71rR1V+9FqL._UY500_.jpg"/>
                            <TextDetails>
                                <Detail><strong>Product Name:</strong> Abibas Shoes</Detail>
                                <Detail><strong>Product ID:</strong> 823HUAKS029</Detail>
                                <Color></Color>
                                <Detail><strong>Size:</strong> 8UK</Detail>
                            </TextDetails>
                            </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add>+</Add>
                                <ProductAmount>2</ProductAmount>
                                <Remove>-</Remove>
                            </ProductAmountContainer>
                            <ProductPrice>$30</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr/>
                    <Product>  
                        <ProductDetails>
                            <ProductImage src="https://d8mkdcmng3.imgix.net/15f8/clothing-tshirts-men-one-piece-wanted-trafalgar-law-mens-large-tshirt-beige.jpg?auto=format&bg=0FFF&fit=fill&h=600&q=100&w=600&s=318ffc040d47b90f7f3869ef00ac3a3d"/>
                            <TextDetails>
                                <Detail><strong>Product Name:</strong> LAW T shirt</Detail>
                                <Detail><strong>Product ID:</strong> 823HUAKS030</Detail>
                                <Color></Color>
                                <Detail><strong>Size:</strong> 36</Detail>
                            </TextDetails>
                            </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add>+</Add>
                                <ProductAmount>2</ProductAmount>
                                <Remove>-</Remove>
                            </ProductAmountContainer>
                            <ProductPrice>$30</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr/>
                    <Product>  
                        <ProductDetails>
                            <ProductImage src="https://d8mkdcmng3.imgix.net/15f8/clothing-tshirts-men-one-piece-wanted-trafalgar-law-mens-large-tshirt-beige.jpg?auto=format&bg=0FFF&fit=fill&h=600&q=100&w=600&s=318ffc040d47b90f7f3869ef00ac3a3d"/>
                            <TextDetails>
                                <Detail><strong>Product Name:</strong> LAW T shirt</Detail>
                                <Detail><strong>Product ID:</strong> 823HUAKS030</Detail>
                                <Color></Color>
                                <Detail><strong>Size:</strong> 36</Detail>
                            </TextDetails>
                            </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add>+</Add>
                                <ProductAmount>2</ProductAmount>
                                <Remove>-</Remove>
                            </ProductAmountContainer>
                            <ProductPrice>$30</ProductPrice>
                        </PriceDetails>
                    </Product>
                    </Info>
                    <Summary>
                        <SummaryItemContainer>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$70.00</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$8.00</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>-$8.00</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$70.00</SummaryItemPrice>
                            </SummaryItem>
                        </SummaryItemContainer>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default ShoppingCart
