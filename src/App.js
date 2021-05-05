import {useEffect} from "react";
import {Route} from "react-router";

import {useDispatch} from "react-redux";

import Layout from "./components/Layout/Layout";
import Products from "./components/Products/Products";
import ShowProduct from "./components/Products/ShowProduct/ShowProduct";

const App = () => {

    useEffect(() => {
        const loadSavedCart = JSON.parse(localStorage.getItem("cart"))
        
    }, [])

    return(
        <div className="App">
            <Layout>
                <Route path="/" exact component={Products} />
                <Route path="/products/:category" component={Products} />
                <Route path="/show-product/:id" exact component={ShowProduct} />
            </Layout>
        </div>
    );
};

export default App;