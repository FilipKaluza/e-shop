import {useEffect} from "react";

import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import * as actions from "../store/actions/actions";

import { Link } from "react-router-dom";

import { Spin, Space } from 'antd';
import { Card } from 'antd';
import Row from "antd/lib/row";
import Col from "antd/lib/col";



const { Meta } = Card;


const Products = () => {

    const productsState = useSelector(state => state);
    const params = useParams();

    const dispatch = useDispatch();


    useEffect(() => {
        let query = "/products"
        if(params.category === "all") {
            query = "/products/"
        } else {
            query = "/products/category/" + params.category
        }
        dispatch(actions.loadProductsStart())
        dispatch(actions.loadProducts(query))
    }, [dispatch, params.category])

    let productCards = <Space size="middle"> <Spin size="large" /> </Space>

    if(!productsState.loading) { 
        productCards = productsState.products.map((product) => {
            const path = "/show-product/" + product.id
            return(
                    <Col key={product.id} className="Item" xs={24} sm={11} xl={5}  > 
                        <Link to={path}  >
                            <Card
                            onClick={() => dispatch(actions.showProduct(product))}
                            hoverable
                            cover={<img alt="example" src={product.image} />}
                        >
                            <Meta title={product.title} />
                        
                            <Row className="CartPriceAndCartBtn" justify="space-between">
                                <p> Price: {product.price}€ </p> 
                                <button onClick="#" className="AddToCartButton" > Pridať do košíka </button>
                            </Row>
                            </Card>
                        </Link>
                    </Col> 
            );
        });
    };
    
    


    return(
        <Row justify="center" className="Products">
            {productCards}
        </Row>
    );
};

export default Products;