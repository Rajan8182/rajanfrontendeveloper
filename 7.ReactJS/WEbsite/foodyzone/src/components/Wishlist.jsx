import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { WISHLIST_REMOVE, WISHLIST_EMPTY } from "../Redux/Constant";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist?.wishlist || []);

  const handleRemove = (productId) => {
    dispatch({ type: WISHLIST_REMOVE, payload: productId });
  };

  const handleEmptyWishlist = () => {
    dispatch({ type: WISHLIST_EMPTY });
  };

  return (
    <section className="p-8 mt-24">
      <h1 className="text-3xl font-bold text-center mb-6">My Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="m-16">
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 mb-3 rounded-md"
            onClick={handleEmptyWishlist}
          >
            Empty wishlist
          </button>
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Product Name</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((product) => (
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
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md mr-2"
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-700">
            Your wishlist is empty.
          </h2>
          <p className="text-gray-500 mt-2">
            Browse products and add them to your wishlist.
          </p>
        </div>
      )}
    </section>
  );
};

export default Wishlist;