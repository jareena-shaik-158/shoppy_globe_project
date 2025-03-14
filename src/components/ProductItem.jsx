import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Function to handle adding product to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
        // Show toast notification when product is added to cart
    toast.success(`${product.title} added to cart!`, {
      position: "top-right",
      autoClose: 2000,// Auto-close notification after 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <div className="button-group">
        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart 🛒
        </button>
        <button className="view-btn" onClick={() => navigate(`/product/${product.id}`)}>
          View Details 🔍
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
