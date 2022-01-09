import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../data';
import axios from 'axios';
import { Apartment } from '@material-ui/icons';

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    flex-wrap:wrap;
    align-items:center;
`

function Products({ cat, filter, sort }) {
    console.log({ cat, filter, sort })
    const [products, setProducts] = React.useState([]);
    const [filteredProducts, setFilteredProducts] = React.useState([]);

    React.useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat ?
                        `http://localhost:5000/api/product?category=${cat}` :
                        `http://localhost:5000/api/product`
                );
                console.log(res.data)
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, [cat])

    React.useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filter).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filter])

    React.useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === 'asc') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else if (sort === 'desc') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort])

    return (
        <Container>
            {cat ?
                filteredProducts.map((item) => (
                    <Product item={item} key={item.id} />
                )):
                products.slice(0,8).map((item) => (
                    <Product item={item} key={item.id} />
                ))
            }
        </Container>
    )
}

export default Products
