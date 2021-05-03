
import {NavLink} from "react-router-dom";
import Row from "antd/lib/row";

const Categories = () => {

    const categories = ["electronics", "jewelery", "men's clothing", "women's clothing", "all"]

    const categoriesButtons = categories.map((category, index) => {
        let path = `/products/${category}`
        return <h2> <NavLink activeClassName="Active" to={path} key={index} > {category} </NavLink> </h2> 
    })

    console.log("RENDERING CATEGORY")

    return(
        <Row className="Categories">
             {categoriesButtons}
        </Row>
    );
};

export default Categories;