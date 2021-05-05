import { ShoppingCartOutlined  } from '@ant-design/icons';
import Col from "antd/lib/col";



const Cart = (props) => {


    return(
        <Col className="CartWrapper">
            <span className="AmountOfItems"> 2 </span>
            <ShoppingCartOutlined className="Cart" ></ShoppingCartOutlined>
        </Col>
    );
}; 

export default Cart;