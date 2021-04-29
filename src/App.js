import {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

const App = () => {

    const [ products, setProducts ] = useState();



    return(
        <div className="App">
            <Navbar />
            <Products />
        </div>
    );
};

export default App;