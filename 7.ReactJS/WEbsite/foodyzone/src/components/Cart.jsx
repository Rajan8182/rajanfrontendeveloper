import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_to_cart, empty_cart } from '../Redux/Action';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  const handleAddToCart = (product) => {
    dispatch(add_to_cart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(remove_to_cart(product));
  };

  const handleEmptyCart = () => {
    dispatch(empty_cart());
  };

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={handleEmptyCart}>Empty Cart</button>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddToCart({ id: 1, name: 'New Product', price: 20 })}>
        Add New Product
      </button>
    </div>
  );
};

export default Cart;
