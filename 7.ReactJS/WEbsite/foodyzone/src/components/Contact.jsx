// import React from "react";

// const Contact = () => {
//   return (
//     <div className="py-28">
//       <h1 className="font-bold flex justify-center items-center text-7xl mt-6">
//         {" "}
//         Contact Us
//       </h1>
//       <div className="flex justify-around mt-9">
//         <div>
//           <h2>We’d love to hear from you!</h2>
//           <br />
//           <p>
//             Our plant-forward menu means that <br /> we’re already on average
//             30% less <br />
//             carbon intensive than the average <br /> American meal.
//           </p>
//           <br />
//           <p>
//             Monday-Wednesday: 11a-9p <br />
//             Thursday-Saturday: 11a-10p <br />
//             Happy Hour:Everyday 2p-6p <br />
//           </p>
//         </div>

//         <div className=" w-[900px]">
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-gray-700">
//                 Your name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                 placeholder="Your name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-gray-700">
//                 Your email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                 placeholder="Your email"
//               />
//             </div>

//             <div>
//               <label htmlFor="subject" className="block text-gray-700">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                 placeholder="Subject"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-gray-700">
//                 Your message (optional)
//               </label>
//               <textarea
//                 id="message"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                 placeholder="Your message"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className=" px-6 py-4 bg-[#e6ff55] text-[#00473c] font-semibold rounded-full hover:bg-[#00473c] hover:text-white  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// //  full responsive 

import React from "react";

const Contact = () => {
  return (
    <div className="py-10 md:py-28">
      <h1 className="font-bold text-4xl md:text-7xl flex justify-center items-center mt-6">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row justify-between md:justify-around mt-9 px-4 md:px-20 space-y-6 md:space-y-0">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-xl md:text-2xl">We’d love to hear from you!</h2>
          <p className="text-gray-700">
            Our plant-forward menu means that <br /> we’re already on average
            30% less <br />
            carbon intensive than the average <br /> American meal.
          </p>
          <p className="text-gray-700">
            Monday-Wednesday: 11a-9p <br />
            Thursday-Saturday: 11a-10p <br />
            Happy Hour: Every day 2p-6p <br />
          </p>
        </div>

        <div className="md:w-1/2 w-full">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700">
                Your message (optional)
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-[#e6ff55] text-[#00473c] font-semibold rounded-full hover:bg-[#00473c] hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
