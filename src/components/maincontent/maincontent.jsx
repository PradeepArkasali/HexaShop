import { useEffect, useState } from "react"
import axios from 'axios';
import Product from "../product/product";

export default function MainContent(props) {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get(`${props.aipBaseUrl}/products`).then((response) => {
            setProductList(response.data);
        });
    });

    return (<>
        <section class="section" id="products">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="section-heading">
                            <span><b>Shop by category: </b></span>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="section-heading">
                            <h2>Our Latest Products</h2>
                            <span>Check out all of our products.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    {
                        productList.map((product) => (
                            <Product productInfo={product} />
                        ))
                    }

                </div>
            </div>
        </section>
    </>)
}