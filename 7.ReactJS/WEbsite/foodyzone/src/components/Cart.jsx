import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_to_cart, Wishlist_Add, empty_cart } from "../Redux/Action";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const [quantities, setQuantities] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const Heart = (id) => wishlist.some((item) => item.id === id);

  const EmptyCart = () => {
    dispatch(empty_cart());
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      const quantity = quantities[product.id] || 1;
      const selectedSize = selectedSizes[product.id] || product.selectedSize;
      const size = product.sizes.find((s) => s.size === selectedSize);
      const productPrice = size ? size.price * quantity : 0;
      total += productPrice;
      return total;
    }, 0);
  };

  if (!Array.isArray(cart)) {
    return <div>Loading or Error: Cart data is not available</div>;
  }

  return (
    <div className="mt-40">
      <h1 className="text-3xl font-bold text-center mb-6">My Cart</h1>
      {cart.length === 0 ? (
        <div className="flex justify-center items-center">
          Your cart is empty.
        </div>
      ) : (
        <div className="m-16">
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 mb-3 rounded-md"
            onClick={EmptyCart}
          >
            Empty Cart
          </button>
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">
                  Product Name
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Size & Price
                </th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
                <th className="border border-gray-300 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    {product.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.description}
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex">
                      {product.sizes.map((size) => (
                        <button
                          key={size.size}
                          className={`mr-2 px-2 py-1 rounded-lg ${
                            selectedSizes[product.id] === size.size
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200"
                          }`}
                          onClick={() => handleSizeChange(product.id, size.size)}
                        >
                          {size.size}: ${size.price}
                        </button>
                      ))}
                    </div>
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="number"
                      min="1"
                      value={quantities[product.id] || 1}
                      onChange={(e) =>
                        handleQuantityChange(
                          product.id,
                          parseInt(e.target.value)
                        )
                      }
                      className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex justify-between items-center">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md mr-2"
                        onClick={() => dispatch(remove_to_cart(product.id))}
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => dispatch(Wishlist_Add(product))}
                        className="text-red-500 hover:text-red-700"
                      >
                        {Heart(product.id) ? (
                          <FaHeart className="text-2xl" />
                        ) : (
                          <FaRegHeart className="text-2xl" />
                        )}
                      </button>
                    </div>
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex items-center justify-center">
                      <div className="font-bold text-xl">
                        ${(() => {
                          const selectedSize =
                            selectedSizes[product.id] || product.selectedSize;
                          const size = product.sizes.find(
                            (s) => s.size === selectedSize
                          );
                          return size ? size.price * (quantities[product.id] || 1) : 0;
                        })()}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-right font-bold text-xl">
            Total Price: ${calculateTotalPrice().toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
