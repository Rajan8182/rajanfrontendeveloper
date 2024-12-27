import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_to_cart, Wishlist_Add, productData } from "../redux/Action";

const Shop = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const perPageProduct = 8;

  const dispatch = useDispatch();

  const data = useSelector((state) => state.product);

  // Flatten product data and apply search filtering
  let ProductList = Array.prototype.map
    .call(data, (item) => item.products)
    .flat();

  // Filter products based on search query
  const filteredProducts = ProductList.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    dispatch(productData());
  }, [dispatch]);

  // Pagination logic
  let lastindex = pageIndex * perPageProduct;
  let firstindex = lastindex - perPageProduct;

  return (
    <div className="mx-auto">
      {/* Search Bar */}
      <div className="flex justify-center my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="p-2 border border-gray-300 rounded-md w-1/2"
        />
      </div>

      {/* Product List */}
      <div className="flex justify-around flex-wrap mt-8">
        {filteredProducts.slice(firstindex, lastindex).map((item) => (
          <div
            key={item.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-2 dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-52 mx-auto"
                src={item.images[0]}
                alt={item.title}
              />
            </a>
            <div className="p-2">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                {item.description}
              </p>
              <button
                onClick={() => dispatch(add_to_cart(item))}
                className="btn"
              >
                Add To Cart
              </button>
              <button
                onClick={() => dispatch(Wishlist_Add(item))}
                className="btn"
              >
                Add To Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center m-9">
        <button
          className="btn"
          onClick={() => setPageIndex((prev) => prev - 1)}
          disabled={firstindex <= 0}
        >
          Prev
        </button>
        <span className="btn">{pageIndex}</span>
        <button
          className="btn"
          onClick={() => setPageIndex((next) => next + 1)}
          disabled={lastindex >= filteredProducts.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;
