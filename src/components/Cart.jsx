import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import './Cart.css';
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
