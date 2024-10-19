// import React from "react";
// import img_20 from "../pic/asset_5.jpeg";

// const FoodExperience = () => {
//   return (
//     <div className="p-36">
//       <div className="flex bg-orange-200 h-[600px] w-[9px00] rounded-xl  bottom-10">
//         <img src={img_20} className="w-[600px] rounded-l-xl" alt="" />
//         <div className="ml-9 p-10">
//           <p className="font-bold text-5xl mt-24">
//             A new way to <br />
//             experience <br />
//             food
//           </p><br />
         
//             <p className="text-4xl">
//               Enjoy our seasonal menu <br />
//               and experience the beauty <br />
//               of naturalnessbr
//             </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodExperience;

import React from "react";
import img_20 from "../pic/asset_5.jpeg";

const FoodExperience = () => {
  return (
    <div className="px-4 py-20 md:px-36">
      <div className="flex flex-col md:flex-row bg-orange-200 rounded-xl overflow-hidden">
        {/* Image Section */}
        <img
          src={img_20}
          className="w-full md:w-[600px] h-[300px] md:h-[600px] object-cover"
          alt="Food Experience"
        />

        {/* Text Section */}
        <div className="p-8 md:ml-9 md:p-10 flex flex-col justify-center">
          <p className="font-bold text-3xl md:text-5xl">
            A new way to <br />
            experience <br />
            food
          </p>
          <br />
          <p className="text-xl md:text-4xl">
            Enjoy our seasonal menu <br />
            and experience the beauty <br />
            of naturalness
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodExperience;
