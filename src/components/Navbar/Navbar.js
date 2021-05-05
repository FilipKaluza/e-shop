import Row from "antd/lib/row";
import { UserOutlined  } from '@ant-design/icons';

import Categories from "./Categories/Categories";
import Cart from "./Cart/Cart";

const Navbar = () => {

    return(
        <Row className="Navbar">
            <h1 className="Logo"> Logo </h1>
            <Categories />
            <div className="CartAndAccount">
                <UserOutlined  />
                <Cart />
            </div>
        </Row>
    );
};

export default Navbar;