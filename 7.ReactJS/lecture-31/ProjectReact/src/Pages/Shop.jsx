import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_to_cart } from "../redux/Action";
import { productData } from "../redux/Action";

const Shop = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.product);

  
  console.log(data);
  

  useEffect(() => {
    dispatch(productData());
  }, [dispatch]);

  return (
    <div>
      <h1 className="flex justify-center items-center p-11 bg-green-600 ">
        This is Shop page
      </h1>

      <div className="flex justify-around flex-wrap mt-16">
        {
          data.map(item => {
            <div>{item}</div>
          })
        }
      </div>
    </div>
  );
};

export default Shop;
