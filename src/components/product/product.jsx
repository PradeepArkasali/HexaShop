import "./product.css";
import { useNavigate } from "react-router-dom";

export default function Product(props) {
  const navigate = useNavigate();
  const onProductClick = () => {
    navigate(`/productdetail/${props.productInfo.id}`);
  };

  return (
    <>
      {
        <div class="col-lg-3">
          <div class="item">
            <div onClick={onProductClick} class="thumb product-image">
              <img src={props.productInfo.image} alt="" />
            </div>
            <div class="down-content">
              <h6>{props.productInfo.title}</h6>
              <span class="product-price">
                &#8377; {props.productInfo.price}
              </span>
              <span>
                <button
                  style={{ margin: "0px 0px 0px 5px" }}
                  type="button"
                  class="btn btn-outline-secondary"
                >
                  Add to Cart
                </button>
              </span>
            </div>
          </div>
        </div>
      }
    </>
  );
}
