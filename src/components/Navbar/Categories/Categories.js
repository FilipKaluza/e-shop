import Row from "antd/lib/row";
import {useDispatch} from "react-redux";
import * as actions from "../../store/actions/actions";

const Categories = () => {

    const dispatch = useDispatch();

    const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"]

    const loadCategory = (category) => {
        dispatch(actions.filterProducts(category))
    }

    const categoriesButtons = categories.map((category, index) => {
        return <h2 key={index} onClick={() => loadCategory(category)} > {category} </h2>
    })

    console.log("RENDERING CATEGORY")

    return(
        <Row className="Categories">
             {categoriesButtons}
        </Row>
    );
};

export default Categories;