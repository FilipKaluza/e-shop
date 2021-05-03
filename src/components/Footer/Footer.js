import Row from "antd/lib/row";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
    return(
        <div className="Footer">
            <Row className="SocSitesFooter" justify="center">
                <FacebookOutlined />
                <InstagramOutlined />
                <LinkedinOutlined />
            </Row>
            <h1> Logo </h1>
        </div>
    )
};

export default Footer;