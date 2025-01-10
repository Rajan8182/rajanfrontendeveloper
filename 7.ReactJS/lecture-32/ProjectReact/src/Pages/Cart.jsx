import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_to_cart, empty_cart } from "../redux/Action";
import { Wishlist_Add } from "../redux/Action";

const Cart = () => {
  const dispatch = useDispatch();

  const CartData = useSelector((state) => state.cart);

  console.log(CartData);

  const wishData = useSelector((state) => state.wishlist);

  console.log("wishData", wishData);

  // let CartDataList = CartData.flat()

  // console.log("CartData" , CartDataList);

  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={() => dispatch(empty_cart())}
          className="border-black border-solid border-2 p-4 rounded-xl bg-emerald-600 "
        >
          EmptyCart
        </button>
      </div>
      <div className="flex mt-16 flex-wrap justify-around">
        {CartData.map((item) => {
          return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-4 dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg h-52 mx-auto"
                  src={item.images[0]}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
                    {item.brand}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex text-nowrap">
                  <button
                    onClick={() => dispatch(remove_to_cart(item))}
                    className="btn justify-center items-center"
                  >
                    Remove To Cart
                  </button>
                  <button
                    onClick={() => dispatch(Wishlist_Add(item))}
                    className="btn"
                  >
                    Add To Wishlist
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;