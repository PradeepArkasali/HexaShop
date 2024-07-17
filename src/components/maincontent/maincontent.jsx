import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../product/product";

export default function MainContent(props) {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    axios.get(`${props.aipBaseUrl}/products/categories`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${props.aipBaseUrl}/products`).then((response) => {
      setProductList(response.data);
    });
  }, []);

  const onCategorySelected = (selCategory) => {
    setSelectedCategory(selCategory);
    getProductsByCategory(selCategory);
  };

  const getProductsByCategory = (cat) => {
    if (!!cat) {
      axios
        .get(`${props.aipBaseUrl}/products/category/${cat}`)
        .then((response) => {
          setProductList(response.data);
        });
    } else {
      axios.get(`${props.aipBaseUrl}/products`).then((response) => {
        setProductList(response.data);
      });
    }
  };

  return (
    <>
      <section class="section" id="products">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="section-heading">
                <span>
                  <b>Shop by category: </b>
                </span>
                <select
                  onChange={(e) => onCategorySelected(e.target.value)}
                  value={selectedCategory}
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="" selected>
                    Open this select menu
                  </option>
                  {categories.map((cat) => (
                    <option value={cat}>{cat}</option>
                  ))}
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
            {productList.map((product) => (
              <Product productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
