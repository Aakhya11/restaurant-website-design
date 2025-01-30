const OrderCard = ({ image, name, oldprice, newprice }) => {
  return (
    <div className="shadow-lg w-80">
      <img className="w-80 h-80" src={image} alt="" />
      <h1 className="my-5 text-lg text-gray-900 font-playwrite">{name}</h1>
      <h1>------------------------------------------------</h1>
      <div className="flex justify-between">
        <div className="flex gap-1 ">
          <p className="text-sm text-gray-600 line-through">{oldprice}</p>
          <p className="text-gray-800">${newprice}</p>
        </div>
        <div className="text-yellow-400 ">⭐⭐⭐⭐⭐</div>
      </div>
    </div>
  );
};

export default OrderCard;
