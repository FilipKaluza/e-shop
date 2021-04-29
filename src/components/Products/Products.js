import {useEffect, useState} from "react";
import axios from "axios";

import {useSelector, useDispatch} from "react-redux";
import * as actions from "../store/actions/actions";

import { Spin, Space } from 'antd';
import { Card } from 'antd';
import Row from "antd/lib/row";
import Col from "antd/lib/col";


const { Meta } = Card;


const Products = () => {

    const productsState = useSelector(state => state)
    const [ displayedProdcuts, setDisplayedProducts ] = useState(1) // 1x8, if user click show more it will be 2x8
    console.log(productsState)

    const dispatch = useDispatch();


    useEffect(() => {
        const query = 8 * displayedProdcuts;
        dispatch(actions.loadProducts(`products`))
        
    }, [dispatch])

    let productCards = <Space size="middle"> <Spin size="large" /> </Space>

    if(productsState.products) { 
        productCards = productsState.products.map((product) => {
        if(productsState.category === "all") {
            return (
                <Col className="Item" key={product.id} xs={24} sm={11} xl={5} >
                    <Card
                    hoverable
                    cover={<img alt="example" src={product.image} />}
                >
                    <Meta title={product.title} />
                    <Row className="CartPriceAndCartBtn" justify="space-between">
                        <p> Price: {product.price}€ </p>
                        <button className="AddToCartButton" > Pridať do košíka </button>
                    </Row>
                    </Card>
                </Col>
                
            );
        } else if (product.category === productsState.category) {
            return (
                <Col className="Item" key={product.id} xs={24} sm={11} xl={5} >
                    <Card
                    hoverable
                    cover={<img alt="example" src={product.image} />}
                >
                    <Meta title={product.title} />
                    <Row className="CartPriceAndCartBtn" justify="space-between">
                        <p> Price: {product.price}€ </p>
                        <button className="AddToCartButton" > Pridať do košíka </button>
                    </Row>
                    </Card>
                </Col>
                
            );
        }
    })};


    return(
        <Row justify="center" className="Products">
            {productCards}
        </Row>
    );
};

export default Products;