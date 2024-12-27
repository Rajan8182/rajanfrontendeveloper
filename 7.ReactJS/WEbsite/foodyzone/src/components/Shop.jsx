import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/actions';
import { FaRegHeart } from "react-icons/fa6";
import img_4 from "../pic/202.jpg";
import img_5 from "../pic/Blog_11.jpg";
import img_6 from "../pic/Blog_6.jpg";
import img_7 from "../pic/Blog_7.jpg";
import img_8 from "../pic/203.jpg";
import img_9 from "../pic/204.jpg";
import img_10 from "../pic/B_1.jpg";
import img_11 from "../pic/B_2.jpg";
import img_12 from "../pic/B_3.jpg";
import img_13 from "../pic/B_4.jpg";
import img_14 from "../pic/B_5.jpg";
import img_15 from "../pic/204.jpg"; 

const dispatch = useDispatch();
const products = useSelector((state) => state.products);

const Shop = () => {
  return (
    <div className="flex flex-wrap m-36">
      {/* 1 */}
      <div className="w-96 p-4">
        <img src={img_4} className="rounded-2xl" alt="" />
        <div className="mt-4">
          <h3 class="font-bold text-2xl">Guacamole Greens</h3>
          <h4 className="mt-2">
            Roasted Chicken, Avocado, Tomatoes, Red Onions, Shredded Cabbage
          </h4>
          <div className="flex gap-32 mt-2">
            <h5 class="font-bold text-green-950">
              <span class="">Small</span>
              <span class="">$8.0</span>
            </h5>
            <h5 class="font-bold text-green-950">
              <span class="">Large</span>
              <span class="">$12.0</span>
            </h5>
          </div>
          <div className="flex gap-32 mt-2">
          <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="w-96 p-4">
        <img src={img_5} className="rounded-2xl" alt="" />
        <div className="mt-4">
          <h3 class="font-bold text-2xl">Guacamole Greens</h3>
          <h4 className="mt-2">
            Roasted Chicken, Avocado, Tomatoes, Red Onions, Shredded Cabbage
          </h4>
          <div className="flex gap-32 mt-2">
            <h5 class="font-bold text-green-950">
              <span class="">Small</span>
              <span class="">$8.0</span>
            </h5>
            <h5 class="font-bold text-green-950">
              <span class="">Large</span>
              <span class="">$12.0</span>
            </h5>
          </div>
          <div className="flex gap-32 mt-2">
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="w-96 p-4">
        <img src={img_6} className="rounded-2xl" alt="" />
        <div className="mt-4">
          <h3 class="font-bold text-2xl">Guacamole Greens</h3>
          <h4 className="mt-2">
            Roasted Chicken, Avocado, Tomatoes, Red Onions, Shredded Cabbage
          </h4>
          <div className="flex gap-32 mt-2">
            <h5 class="font-bold text-green-950">
              <span class="">Small</span>
              <span class="">$8.0</span>
            </h5>
            <h5 class="font-bold text-green-950">
              <span class="">Large</span>
              <span class="">$12.0</span>
            </h5>
          </div>
          <div className="flex gap-32 mt-2">
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="w-96 p-4">
        <img src={img_7} className="rounded-2xl" alt="" />
        <div className="mt-4">
          <h3 class="font-bold text-2xl">Guacamole Greens</h3>
          <h4 className="mt-2">
            Roasted Chicken, Avocado, Tomatoes, Red Onions, Shredded Cabbage
          </h4>
          <div className="flex gap-32 mt-2">
            <h5 class="font-bold text-green-950">
              <span class="">Small</span>
              <span class="">$8.0</span>
            </h5>
            <h5 class="font-bold text-green-950">
              <span class="">Large</span>
              <span class="">$12.0</span>
            </h5>
          </div>
          <div className="flex gap-32 mt-2">
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="w-96 p-4">
        <img src={img_8} className="rounded-2xl" alt="" />
        <div className="mt-4">
          <h3 class="font-bold text-2xl">Guacamole Greens</h3>
          <h4 className="mt-2">
            Roasted Chicken, Avocado, Tomatoes, Red Onions, Shredded Cabbage
          </h4>
          <div className="flex gap-32 mt-2">
            <h5 class="font-bold text-green-950">
              <span class="">Small</span>
              <span class="">$8.0</span>
            </h5>
            <h5 class="font-bold text-green-950">
              <span class="">Large</span>
              <span class="">$12.0</span>
            </h5>
          </div>
          <div className="flex gap-32 mt-2">
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      {/* 6 */}
      <div className="w-96 p-4">
        <img src={img_9} className="rounded-2xl" alt="" />
        <div className="mt-4">
          <h3 class="font-bold text-2xl">Guacamole Greens</h3>
          <h4 className="mt-2">
            Roasted Chicken, Avocado, Tomatoes, Red Onions, Shredded Cabbage
          </h4>
          <div className="flex gap-32 mt-2">
            <h5 class="font-bold text-green-950">
              <span class="">Small</span>
              <span class="">$8.0</span>
            </h5>
            <h5 class="font-bold text-green-950">
              <span class="">Large</span>
              <span class="">$12.0</span>
            </h5>
          </div>
          <div className="flex gap-32 mt-2">
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      {/* 7 */}
      <div className="w-96 p-4">
        <img src={img_10} className=" rounded-2xl" alt="" />
        <div className="mt-4">
          <h3 class="font-bold text-2xl">Easy Pasta Salad</h3>
          <h4 className="mt-2">
            Goat cheese, roasted almonds, warm wild rice, shredded kale,
            vinaigrette
          </h4>
          <div className="flex gap-12 mt-2">
            <h5 class="font-bold text-green-950">
              <span class="">Small</span>
              <span class="">$11.0</span>
            </h5>
            <h5 class="font-bold text-green-950">
              <span class="">Large</span>
              <span class="">$16.0</span>
            </h5>
          </div>
          <div className="flex gap-32 mt-2">
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      {/* 8 */}
      <div className="w-96 p-4">
        <img src={img_11} className=" rounded-2xl" alt="" />
        <div className="mt-4">
          <h3 class="font-bold text-2xl">Easy Pasta Salad</h3>
          <h4 className="mt-2">
            Goat cheese, roasted almonds, warm wild rice, shredded kale,
            vinaigrette
          </h4>
          <div className="flex gap-12 mt-2">
            <h5 class="font-bold text-green-950">
              <span class="">Small</span>
              <span class="">$11.0</span>
            </h5>
            <h5 class="font-bold text-green-950">
              <span class="">Large</span>
              <span class="">$16.0</span>
            </h5>
          </div>
          <div className="flex gap-32 mt-2">
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      {/* 9 */}
      <div className="w-96 p-4">
        <img src={img_12} className=" rounded-2xl" alt="" />
        <div className="mt-4">
          <h3 class="font-bold text-2xl">Easy Pasta Salad</h3>
          <h4 className="mt-2">
            Goat cheese, roasted almonds, warm wild rice, shredded kale,
            vinaigrette
          </h4>
          <div className="flex gap-12 mt-2">
            <h5 class="font-bold text-green-950">
              <span class="">Small</span>
              <span class="">$11.0</span>
            </h5>
            <h5 class="font-bold text-green-950">
              <span class="">Large</span>
              <span class="">$16.0</span>
            </h5>
          </div>
          <div className="flex gap-32 mt-2">
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      {/* 10 */}
      <div className="w-96 p-4">
        <img src={img_13} className=" rounded-2xl" alt="" />
        <div className="mt-4">
          <h3 class="font-bold text-2xl">Easy Pasta Salad</h3>
          <h4 className="mt-2">
            Goat cheese, roasted almonds, warm wild rice, shredded kale,
            vinaigrette
          </h4>
          <div className="flex gap-12 mt-2">
            <h5 class="font-bold text-green-950">
              <span class="">Small</span>
              <span class="">$11.0</span>
            </h5>
            <h5 class="font-bold text-green-950">
              <span class="">Large</span>
              <span class="">$16.0</span>
            </h5>
          </div>
          <div className="flex gap-32 mt-2">
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      {/* 11 */}
      <div className="w-96 p-4">
        <img src={img_14} className=" rounded-2xl" alt="" />
        <div className="mt-4">
          <h3 class="font-bold text-2xl">Easy Pasta Salad</h3>
          <h4 className="mt-2">
            Goat cheese, roasted almonds, warm wild rice, shredded kale,
            vinaigrette
          </h4>
          <div className="flex gap-12 mt-2">
            <h5 class="font-bold text-green-950">
              <span class="">Small</span>
              <span class="">$11.0</span>
            </h5>
            <h5 class="font-bold text-green-950">
              <span class="">Large</span>
              <span class="">$16.0</span>
            </h5>
          </div>
          <div className="flex gap-32 mt-2">
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      {/* 12 */}
      <div className="w-96 p-4">
        <img src={img_15} className=" rounded-2xl" alt="" />
        <div className="mt-4">
          <h3 class="font-bold text-2xl">Easy Pasta Salad</h3>
          <h4 className="mt-2">
            Goat cheese, roasted almonds, warm wild rice, shredded kale,
            vinaigrette
          </h4>
          <div className="flex gap-12 mt-2">
            <h5 class="font-bold text-green-950">
              <span class="">Small</span>
              <span class="">$11.0</span>
            </h5>
            <h5 class="font-bold text-green-950">
              <span class="">Large</span>
              <span class="">$16.0</span>
            </h5>
          </div>
          <div className="flex gap-32 mt-2">
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
