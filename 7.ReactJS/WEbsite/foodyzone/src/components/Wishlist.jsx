// WishlistComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wishlist_Add, Wishlist_remove, Wishlist_Empty } from '../Redux/Action';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.wishlist);

  const handleAddToWishlist = (product) => {
    dispatch(Wishlist_Add(product));
  };

  const handleRemoveFromWishlist = (product) => {
    dispatch(Wishlist_remove(product));
  };

  const handleEmptyWishlist = () => {
    dispatch(Wishlist_Empty());
  };

  return (
    <div>
      <h1>Wishlist</h1>
      <button onClick={handleEmptyWishlist}>Empty Wishlist</button>
      <ul>
        {wishlist.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromWishlist(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddToWishlist({ id: 1, name: 'New Product', price: 30 })}>
        Add New Product to Wishlist
      </button>
    </div>
  );
};

export default Wishlist;
