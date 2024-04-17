import React, { useState } from 'react';

const NewAdd = ({handleNewAdd}) => {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Καλείς τη συνάρτηση για την υποβολή της φόρμας, περνώντας τα δεδομένα
    // που έχουν συμπληρωθεί στον γονικό κώδικα
    onSubmit(formData);
  };

  return (
    <div className="w-full h-screen bg-slate-300 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md  xl:w-3/4">
        <div className="mb-4">
          <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactInfo" className="block text-gray-700 font-bold mb-2">
            Contact Information
          </label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded"  onClick={handleNewAdd}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewAdd;
