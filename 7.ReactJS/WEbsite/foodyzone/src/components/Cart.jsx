import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_to_cart, Wishlist_Add, empty_cart } from "../Redux/Action";
import { FaRegHeart } from "react-icons/fa6";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  if (!Array.isArray(cart)) {
    return <div>Loading or Error: Cart data is not available</div>;
  }

  const EmptyCart = () => {
    dispatch(empty_cart());
  };

  return (
    <div className="mt-40">
      {cart.length === 0 ? (
        <div>Your cart is empty.</div>
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
                <th className="border border-gray-300 px-4 py-2">Qut</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
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
                    {product.sizes.map((size) => (
                      <div key={size.size} className="mb-2">
                        <span className="mr-2">{size.size}:</span>
                        <span>${size.price}</span>
                      </div>
                    ))}
                  </td>
                  <td>
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={1}
                          required=""
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
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
                      className="text-red-500  hover:text-red-700"
                    >
                      <FaRegHeart className="text-2xl" />
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
