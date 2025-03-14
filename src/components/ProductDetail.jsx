import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "./ProductDetail.css";

function ProductDetail() {
    const { id } = useParams();// Get product ID from URL parameters
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch product details from API
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }
                return response.json();
            })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = () => {
        // Function to add product to cart
        dispatch(addToCart(product));
        toast.success(`${product.title} added to cart!`);
    };
    // Show loading state
    if (loading) return <p className="loading">Loading product details...</p>;
    // Show error message if API fails
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <div className="product-detail">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <button className="add-btn" onClick={handleAddToCart}>
                Add to Cart 🛒
            </button>
        </div>
    );
}

export default ProductDetail;
