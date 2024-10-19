import React from 'react'
import React, { useState } from 'react';


const table = () => {

    const [items, setItems] = useState([
        { name: 'Pillow', description: 'Sleeping well is important.', price: '$8.99', category: 'Personal' },
        { name: 'Earphone', description: 'You need this one if you love music.', price: '$9.00', category: 'Personal' },
        { name: 'Mouse', description: 'Very useful if you love your computer.', price: '$11.35', category: 'Personal' },
        { name: 'Trash Can', description: 'It will help you maintain cleanliness.', price: '$3.95', category: 'Sports' },
        { name: 'Eye Glasses', description: 'It will make you read better.', price: '$6.00', category: 'Sports' },
      ]);
  return (
    <div className="bg-emerald-800 container mx-auto p-4">
        <div className="flex justify-between mb-4">
           <input
             type="text"
             className="border border-black rounded-md px-2 py-1"
             placeholder="Type a name..."
             />
           <div>
             <button className="bg-red-500 text-white py-1 px-3 rounded-md mr-2">Delete Selected</button>
             <button className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2">Export CSV</button>
             <button className="bg-green-500 text-white py-1 px-3 rounded-md">Create Record</button>
           </div>
        </div>  

        <table className="table-auto w-full border-collapse border border-black">
        <thead>
          <tr className="bg-amber-400">
            <th className="border border-black ">#</th>
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
              <td className="border border-black px-4 py-2">{item.description}</td>
              <td className="border border-black px-4 py-2">{item.price}</td>
              <td className="border border-black px-4 py-2">{item.category}</td>
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
          
        </div>
        <input
          type="number"
          className="border border-gray-300 rounded-md px-2 py-1"
          placeholder="Type page number..."
        />
      </div>
    </div>
  );
};

export default table;
