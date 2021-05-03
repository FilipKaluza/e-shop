import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

import { Spin, Space } from 'antd';
import Row from "antd/lib/row";
import Col from "antd/lib/col";

const ShowProduct = () => {

    const [product, setProduct] = useState();

    const params = useParams();
    useEffect(() => {
        let link = "/products/" + params.id
        let fetchProduct = async () => {
            let response = await axios.get(`https://fakestoreapi.com${link}`)
            setProduct(response.data)
        }

        fetchProduct()
    }, [params.id])

    let showItem = <Space size="middle"> <Spin size="large" /> </Space>
    if(product) {
        showItem = 
        <>
            <Col className="ShowProductImage" xs={20} md={10}>
                <img src={product.image} alt={product.title} />
            </Col>
            <Col className="ShowProductDes" xs={24} md={10}>
                <h1>  {product.title} </h1>
                <p> {product.description} </p>
                <button > Buy now </button>
            </Col>
        </>
    }


    return(
        <Row className="ShowProductContainer" justify="center">
            {showItem}
        </Row>
    );
};

export default ShowProduct;