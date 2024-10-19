import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Table1 = () => {
  // Sample Data
  const [items, setItems] = useState([
    {
      name: "Pillow",
      description: "Sleeping well is important.",
      price: "$8.99",
      category: "Personal",
    },
    {
      name: "Earphone",
      description: "You need this one if you love music.",
      price: "$9.00",
      category: "Personal",
    },
    {
      name: "Mouse",
      description: "Very useful if you love your computer.",
      price: "$11.35",
      category: "Personal",
    },
    {
      name: "Trash Can",
      description: "It will help you maintain cleanliness.",
      price: "$3.95",
      category: "Sports",
    },
    {
      name: "Eye Glasses",
      description: "It will make you read better.",
      price: "$6.00",
      category: "Sports",
    },
  ]);

  const handleEdit = (index) => {
    // Handle edit action
    console.log("Edit item at index:", index);
  };

  const handleDelete = (index) => {
    // Handle delete action
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <div className="flex">
          <input
            type="text"
            className="border border-black rounded-l-lg px-2 py-1"
            placeholder="Type a name..."
          />
          <button className="border bg-blue-500  border-black p-2 rounded-r-lg"> <FaSearch /></button>
         
        </div>
        <div>
          <button className="bg-red-500 text-white py-1 px-3 rounded-md mr-2">
            Delete Selected
          </button>
          <button className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2">
            Export CSV
          </button>
          <button className="bg-green-500 text-white py-1 px-3 rounded-md">
            Create Record
          </button>
        </div>
      </div>

      <table className="table-auto w-full border-collapse border border-black">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-4 py-2">#</th>
            <th className="border border-black px-4 py-2">Name</th>
            <th className="border border-black px-4 py-2">Description</th>
            <th className="border border-black px-4 py-2">Price</th>
            <th className="border border-black px-4 py-2">Category</th>
            <th className="border border-black px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border border-black px-4 py-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="border border-black px-4 py-2">{item.name}</td>
              <td className="border border-black px-4 py-2">
                {item.description}
              </td>
              <td className="border border-black px-4 py-2">{item.price}</td>
              <td className="border border-black px-4 py-2">
                {item.category}
              </td>
              <td className="border border-black px-4 py-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white py-1 px-3 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <div>
          <button className="p-3 font-bold border-black border-2 text-black rounded-md mx-1">
          <MdOutlineKeyboardDoubleArrowLeft />
          </button>
          <button className="px-4 py-2 font-bold border-black border-2 text-black rounded-md mx-1">
           1
          </button>
          <button className="px-4 py-2 font-bold border-black border-2 text-black rounded-md mx-1">
            2
          </button>
          <button className="p-3 font-bold border-black border-2 text-black rounded-md mx-1">
          <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div>
        <div className="flex">
          <input
            type="number"
            className="border border-black rounded-l-lg px-2 py-1"
            placeholder="Type Page Number..."
          />
          <button className="border border-black font-bold bg-blue-500 p-2 rounded-r-lg">GO</button>
         
        </div>
      </div>
    </div>
  );
};

export default Table1;
