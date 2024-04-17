
const OneCard = ({ product }) => {
    const { image, title, location, price, sellerName } = product;
  
    return (
      <div className="mt-5 rounded-2xl  w-auto">
        <img
          src={image}
          alt={title}
          className=" object-cover h-auto w-auto rounded-2xl"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">{location}</p>
          <p className="text-green-500 font-bold mb-2">${price}</p>
          <p className="text-sm">{`Sold by ${sellerName}`}</p>
        </div>
      </div>
    );
  };
  
  export default OneCard;
  