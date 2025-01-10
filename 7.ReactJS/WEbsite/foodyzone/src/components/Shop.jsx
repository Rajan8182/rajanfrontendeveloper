import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa6";
import { add_to_cart, productData, Wishlist_Add } from "../Redux/Action";

import { FaHeart } from "react-icons/fa";

const Shop = (props) => {
  const products = useSelector((state) => state.product);
  
  console.log("Shopproducts", products);

  const wishlist = useSelector((state) => state.wishlist.wishlist)

  console.log('wishlist' , wishlist);

  const Heart = (id) => wishlist.some((item) => item.id === id)

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(productData());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-evenly">
      {products.map((product) => {
        // console.log('heart' , products.some((item) => item.id !== wishlist.id));
        return (
          <div className="w-96 p-4">
            <img src={product.image} className="rounded-2xl" alt="" />
            <div className="mt-4">
              <h3 className="font-bold text-2xl">{product.name}</h3>
              <h4 className="mt-2">{product.description}</h4>
              <div className="flex gap-32 mt-2">
                <h5 className="font-bold text-green-950">
                  <span className="">{product.sizes[0].size}</span>
                  <span className="">{product.sizes[0].price}</span>
                </h5>
                <h5 className="font-bold text-green-950">
                  <span className="">{product.sizes[1].size}</span>
                  <span className="">{product.sizes[1].price}</span>
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
                  { Heart(product.id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart className="text-2xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
