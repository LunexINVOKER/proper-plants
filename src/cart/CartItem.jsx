export default function CartItem({ item, increaseQuantity, decreaseQuantity }) {
  return (
    <li className="cart-item">
      <span>{item.image}</span>
      <span>{item.name}</span>
      <button onClick={() => decreaseQuantity(item.id)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => increaseQuantity(item.id)}>+</button>
    </li>
  );
}