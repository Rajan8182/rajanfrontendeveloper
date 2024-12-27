import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_to_cart } from "../Redux/Action";
import { productData } from "../Redux/Action";

const Shop = () => {
  const dispatch = useDispatch();

  const dataList = useSelector((state) => state.product);

  console.log(dataList);

  useEffect(() => {
    dispatch(productData());
  }, []);

  const ProductList = [
    {
      name: "Mobile",
      color: "black",
      price: 90000,
    },
    {
      name: "Car",
      color: "gray",
      price: 250000,
    },
    {
      name: "Bick",
      color: "green",
      price: 90000,
    },
    {
      name: "A/C",
      color: "black",
      price: 50000,
    },
  ];

  return (
    <div>
      <h1 className="flex justify-center mt-10 items-center p-11 bg-green-600 ">
        This is Shop page
      </h1>
      <div className="flex justify-around mt-16">
        {ProductList.map((item) => {
          return (
            <>
              <ul className="bg-yellow-500 rounded-2xl p-3">
                <li>{item.name}</li>
                <li>{item.color}</li>
                <li>{item.price}</li>
                <li>
                  <button onClick={() => dispatch(add_to_cart(item))}>
                    ADDTOCART
                  </button>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
