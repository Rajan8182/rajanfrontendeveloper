import React from "react";
import img_1 from '../pic/fresh.jpg'
import img_2 from '../pic/magic_1.jpg'
import img_3 from '../pic/Blog_6.jpg'
import img_4 from '../pic/Blog_7.jpg'
import img_5 from '../pic/blog-9.jpg'
import img_6 from '../pic/blog-10.jpg'

const Home = () => {  
  const salads = [
    {
      title: "Guacamole Greens",
      description:
        "Roasted chicken, avocado, tomatoes, red onions, shredded cabbage",
      priceSmall: 8.0,
      priceLarge: 12.0,
      imageSrc:img_1, 
    },
    {
      title: "Harvest Bowl",
      description:
        "Roasted chicken, roasted sweet potatoes, apples, goat cheese",
      priceSmall: 7.0,
      priceLarge: 10.0,
      imageSrc: img_2,
    },
    {
      title: "Summer Asian Slaw",
      description:
        "Pickled carrots + celery, tomatoes, cilantro, blue cheese, za'atar",
      priceSmall: 10.0,
      priceLarge: 14.0,
      imageSrc: img_3,
    },
    {
      title: "Shredded Brussels Sprout",
      description:
        "Raw beets, cucumbers, basil, sunflower seeds, warm wild rice, shredded kale",
      priceSmall: 9.0,
      priceLarge: 13.0,
      imageSrc:img_4,
    }, 
    {
      title: "Shredded Brussels Sprout",
      description:
        "Raw beets, cucumbers, basil, sunflower seeds, warm wild rice, shredded kale",
      priceSmall: 9.0,
      priceLarge: 13.0,
      imageSrc:img_5,
    }, 
    {
      title: "Shredded Brussels Sprout",
      description:
        "Raw beets, cucumbers, basil, sunflower seeds, warm wild rice, shredded kale",
      priceSmall: 9.0,
      priceLarge: 13.0,
      imageSrc:img_6
    }, 
    
  ];


  const MenuCard = ({ title, description, priceSmall, priceLarge, imageSrc }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-700 mb-2">{description}</p>
          <div className="flex justify-between text-green-700">
            <span>Small ${priceSmall}</span>
            <span>Large ${priceLarge}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
     <div className="bg-[#f8f8f0] min-h-screen p-4">
     {/* Navbar */}
     <nav className="flex justify-between items-center py-4">
       <div className="text-green-600 font-bold text-3xl">GRAND VEGGIE</div>
       <ul className="hidden md:flex space-x-6 text-gray-700">
         <li><a href="#home" className="hover:text-green-600">Home</a></li>
         <li><a href="#menu" className="hover:text-green-600">Our Menus</a></li>
         <li><a href="#about" className="hover:text-green-600">About Us</a></li>
         <li><a href="#contact" className="hover:text-green-600">Contact Us</a></li>
       </ul>
       <button className="bg-green-950 text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-green-950">Make a Reservation</button>
     </nav>

     {/* Main Content */}
     <div className="grid md:grid-cols-2 gap-8 mt-8">
       {/* Left Section */}
       <div className="flex flex-col justify-center">
         <h2 className="text-4xl font-bold text-gray-800 mb-4">
           Where every ingredient tells a story
         </h2>
         <p className="text-lg text-gray-600">
           Highlights: A delightful culinary journey of fresh, clean, and vibrant ingredients that make every dish unique.
         </p>
       </div>

       {/* Right Section (Image) */}
       <div className="relative">
         <img
           src="https://example.com/path-to-your-image.jpg" // Replace with actual image path
           alt="Fresh Salad"
           className="rounded-lg object-cover shadow-lg"
         />
       </div>
     </div>
   </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {salads.map((salad, index) => (
            <MenuCard
              key={index}
              title={salad.title}
              description={salad.description}
              priceSmall={salad.priceSmall}
              priceLarge={salad.priceLarge}
              imageSrc={salad.imageSrc}
            />
          ))}
        </div>
      </div>
    </>
    
  );
};

export default Home;
