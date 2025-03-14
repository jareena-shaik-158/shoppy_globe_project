import { useState } from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import "./ProductList.css";
function ProductList() {
    const { products, loading, error } = useFetchProducts();
    const [searchTerm, setSearchTerm] = useState("");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products.</p>;

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => <ProductItem key={product.id} product={product} />)
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
}

export default ProductList;
