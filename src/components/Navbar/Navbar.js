import Row from "antd/lib/row";
import Col from "antd/lib/col";

import { UserOutlined, ShoppingCartOutlined  } from '@ant-design/icons';

import Categories from "./Categories/Categories";

const Navbar = () => {

    

    return(
        <Row className="Navbar">
            <h1 className="Logo"> Logo </h1>
            <Categories />
            <div className="CartAndAccount">
                <UserOutlined  />
                <Col className="CartWrapper">
                    <span className="AmountOfItems"> 2 </span>
                    <ShoppingCartOutlined className="Cart" ></ShoppingCartOutlined>
                </Col>
            </div>
        </Row>
    );
};

export default Navbar;