import React, { useState } from "react";
import OneCard from "./OneCard";

const Cards = () => {
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

    const products = [
        {
            id: 1,
            title: 'First Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 2,
            title: 'Second Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 3,
            title: 'Third Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 4,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 5,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 6,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 7,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 8,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 9,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 10,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 11,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 12,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 13,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 14,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 15,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 16,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 17,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 18,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 19,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 20,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 21,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 22,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 23,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 24,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 25,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 26,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 27,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 28,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 29,
            title: 'Example Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
        {
            id: 30,
            title: 'Last Product',
            location: 'City, Country',
            price: 50,
            sellerName: 'John Doe',
            image:'assets/1280px-Left_side_of_Flying_Pigeon.jpg'           
        },
    ];

  // Υπολογισμός του εύρους προϊόντων που θα εμφανιστούν στην τρέχουσα σελίδα
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=" ">
      <div className="w-full flex items-center justify-center mt-6">
        <p className=" text-gray-800 text-3xl font-bold">Recently Added</p>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-7  gap-4 w-11/12">
          {currentProducts.map((product) => (
            <OneCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-4 mb-20">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`mx-2 px-4 py-2 rounded ${
              i + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cards;
