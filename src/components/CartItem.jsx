import "../styles.css";

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default CartItem;
