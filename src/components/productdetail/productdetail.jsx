import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductDetail(props) {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${props.aipBaseUrl}/products/${id}`).then((response) => {
      setProductDetail(response.data);
    });
  });
  return (
    <>
      <section style={{ margin: "140px 0 0 0" }} class="section" id="product">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="left-images product-detail-image">
                <img src={productDetail.image} alt="" />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="right-content">
                <h4>{productDetail.title}</h4>
                <span class="price">&#8377; {productDetail.price}</span>
                <span>{productDetail.description}</span>
                <div class="quantity-content">
                  <div class="left-content">
                    <h6>No. of Orders</h6>
                  </div>
                  <div class="right-content">
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus" />
                      <input
                        type="number"
                        step="1"
                        min="1"
                        max=""
                        name="quantity"
                        value="1"
                        title="Qty"
                        class="input-text qty text"
                        size="4"
                        pattern=""
                        inputmode=""
                      />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </div>
                </div>
                <div class="total">
                  <h4>Total: &#8377;210.00</h4>
                  <div class="main-border-button">
                    <a href="#">Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
