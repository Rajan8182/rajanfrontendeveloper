// import React, { useState } from "react";
// import raju from "../pic/R-1.jpg";

// const ReservationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     eventType: "",
//     guests: "",
//     date: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted", formData);
//   };

//   return (
//     <div className=" flex py-28">
//       <div className="relative w-[500px] h-[600px] bg-gray-200">
//         <img src={raju} alt="" className="w-full h-full object-cover" />
//       </div>
//       <div>
//         <div className="px-64">
//           <h2 className="flex justify-center text-5xl font-bold mb-6">Make a Reservation</h2>
//           <form onSubmit={handleSubmit} className="space-y-10">
//             <div className="flex space-x-4">
//               <div className="flex flex-col w-full ">
//                 <label className="mb-1 font-semibold" htmlFor="name">
//                   Your name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
                  
//                   id="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="border rounded-md p-2"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="mb-1 font-semibold" htmlFor="email">
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="border rounded-md p-2"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>

//             <div className="flex space-x-4">
//               <div className="flex flex-col">
//                 <label className="mb-1 font-semibold" htmlFor="phone">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="border rounded-md p-2"
//                   placeholder="Enter your phone number"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="mb-1 font-semibold" htmlFor="eventType">
//                   Type of Event
//                 </label>
//                 <select
//                   name="eventType"
//                   id="eventType"
//                   value={formData.eventType}
//                   onChange={handleChange}
//                   className="border rounded-md p-2"
//                 >
//                   <option value="">— Please choose an option —</option>
//                   <option value="Birthday">Birthday</option>
//                   <option value="Wedding">Wedding</option>
//                   <option value="Conference">Conference</option>
//                 </select>
//               </div>
//             </div>

//             <div className="flex space-x-4">
//               <div className="flex flex-col">
//                 <label className="mb-1 font-semibold" htmlFor="guests">
//                   Number of Guests
//                 </label>
//                 <select
//                   name="guests"
//                   id="guests"
//                   value={formData.guests}
//                   onChange={handleChange}
//                   className="border rounded-md p-2"
//                 >
//                   <option value="">— Please choose an option —</option>
//                   <option value="1-10">1-10</option>
//                   <option value="11-50">11-50</option>
//                   <option value="51-100">51-100</option>
//                 </select>
//               </div>
//               <div className="flex flex-col">
//                 <label className="mb-1 font-semibold" htmlFor="date">
//                   Date of Event
//                 </label>
//                 <input
//                   type="date"
//                   name="date"
//                   id="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   className="border rounded-md p-2"
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 mt-4 bg-lime-400 text-white font-bold rounded-lg hover:bg-lime-500 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReservationForm;


import React, { useState } from "react";
import raju from "../pic/R-1.jpg";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row py-16 lg:py-28">
      {/* Image Section */}
      <div className="relative w-full lg:w-[500px] h-[300px] lg:h-[600px] bg-gray-200">
        <img src={raju} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-[50%] px-8 lg:px-16 mt-8 lg:mt-0">
        <h2 className="text-center text-3xl lg:text-5xl font-bold mb-6">
          Make a Reservation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 font-semibold" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md p-2"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md p-2"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Phone and Event Type Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 font-semibold" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-md p-2"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold" htmlFor="eventType">
                Type of Event
              </label>
              <select
                name="eventType"
                id="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="border rounded-md p-2"
              >
                <option value="">— Please choose an option —</option>
                <option value="Birthday">Birthday</option>
                <option value="Wedding">Wedding</option>
                <option value="Conference">Conference</option>
              </select>
            </div>
          </div>

          {/* Guests and Date Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 font-semibold" htmlFor="guests">
                Number of Guests
              </label>
              <select
                name="guests"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
                className="border rounded-md p-2"
              >
                <option value="">— Please choose an option —</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-100">51-100</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold" htmlFor="date">
                Date of Event
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="border rounded-md p-2"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-lime-400 text-white font-bold rounded-lg hover:bg-lime-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
