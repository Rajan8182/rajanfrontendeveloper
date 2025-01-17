import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa6";
import { add_to_cart, productData, Wishlist_Add } from "../Redux/Action";
import { FaHeart } from "react-icons/fa";

const Shop = (props) => {
  const products = useSelector((state) => state.product);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setsortOrder] = useState("default");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productData());
  }, [dispatch]);

  const Heart = (id) => wishlist.some((item) => item.id === id);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "A-Z") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "Z-A") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return (
    <div className="mt-36">
      <div className="flex justify-evenly mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-black p-2 w-1/2 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="border border-black rounded p-2"
          value={sortOrder}
          onChange={(e) => setsortOrder(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>

      </div>

      <div className="flex flex-wrap justify-evenly">
        {sortedProducts.map((product) => (
          <div className="w-96 p-4" key={product.id}>
            <img
              src={product.image}
              className="rounded-2xl"
              alt={product.name}
            />
            <div className="mt-4">
              <h3 className="font-bold text-2xl">{product.name}</h3>
              <h4 className="mt-2">{product.description}</h4>
              <div className="flex gap-32 mt-2">
                <h5 className="font-bold text-green-950">
                  <span>{product.sizes[0].size}</span>
                  <span>{product.sizes[0].price}</span>
                </h5>
                <h5 className="font-bold text-green-950">
                  <span>{product.sizes[1].size}</span>
                  <span>{product.sizes[1].price}</span>
                </h5>
              </div>
              <div className="flex font-bold gap-32 mt-2">
                <button onClick={() => dispatch(add_to_cart(product))}>
                  Add to Cart
                </button>

                {/* <button
                  onClick={() => dispatch(Wishlist_Add(product))}
                  className="text-red-500 hover:text-red-700"
                >
                  {Wishlistid (product.id) == 0 ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart className="text-2xl" />
                  )}
                </button> */}

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
