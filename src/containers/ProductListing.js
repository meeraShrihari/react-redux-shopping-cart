import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import {setProducts} from "../redux/actions/productActions";
import axios from "axios";


const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((error) => console.log('Error'));
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(products);
    return (
        <div className="ui grid container" style={{marginTop: "20px"}}>
            <ProductComponent />
        </div>
    )
}

export default ProductListing;