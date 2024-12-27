import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_to_cart } from "../redux/Action";
import { Wishlist_Add } from "../redux/Action";
import { productData } from "../redux/Action";
import Pagination from '@mui/material/Pagination';
import { useState } from "react";

const Shop = () => {
  // const [pageIndex, setPageIndex] = useState(1);
  // const [productList, setProductList] = useState([]);

  //Pagination logic

  // const pagination = setPageIndex(prev => prev - 1)

  // console.log("pagination" , pagination);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.product);

  const wishData = useSelector((state) => state.wishlist);

  console.log("wishData", wishData);

  let ProductList = Array.prototype.map
    .call(data, (item) => item.products)
    .flat();

  console.log(ProductList);

  // let nextPage = () => {
  //   setPageIndex((prev) => prev + 1);
  // };

  // let prevPage = () => {
  //   setPageIndex((prev) => prev - 1);
  // };

  useEffect(() => {
    dispatch(productData());
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-around flex-wrap mt-8">
        {ProductList.map((item) => {
          return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-2 dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg h-52 mx-auto"
                  src={item.images[0]}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                    {item.brand}
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
          );
        })}
      </div>
      <div className="flex justify-center m-9 ">
      <Pagination count={6} variant="outlined" size="large" color="primary" />
        {/* <button className="btn" onClick={prevPage}>
          Prev
        </button>
        {<span className="btn">{pageIndex}</span>}
        <button className="btn" onClick={nextPage}>
          Next
        </button> */}
      </div>
    </div>
  );
};

export default Shop;
