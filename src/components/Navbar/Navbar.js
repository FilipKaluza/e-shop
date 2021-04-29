import Row from "antd/lib/row";
import { ShoppingCartOutlined, UserOutlined  } from '@ant-design/icons';

import Categories from "./Categories/Categories";

const Navbar = () => {

    return(
        <Row className="Navbar">
            <h1 className="Logo"> Logo </h1>
            <Categories />
            <div className="CartAndAccount">
                <UserOutlined />
                <ShoppingCartOutlined />
            </div>
        </Row>
    );
};

export default Navbar;