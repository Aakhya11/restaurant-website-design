import OrderCard from "./OrderCard";

const Orders = () => {
  return (
    <div className="container flex justify-around w-auto my-20 ">
      <OrderCard
        image={"/images/order1.jpg"}
        name={"Tomato Pasta"}
        oldprice={"20.00"}
        newprice={"18.00"}
      />
      <OrderCard
        image={"/images/order2.jpg"}
        name={"Eggs Benedict Burger"}
        oldprice={"20.00"}
        newprice={"18.00"}
      />

      <OrderCard
        image={"/images/order4.jpg"}
        name={"Hawaiian Chicken"}
        oldprice={"20.00"}
        newprice={"18.00"}
      />

      {/* <div className="shadow-lg w-80">
        <img className="w-80 h-80" src="/images/order1.jpg" alt="" />
        <h1 className="my-5 text-lg text-gray-900 font-playwrite">
          Tomato Pasta
        </h1>
        <h1>------------------------------------------------</h1>
        <div className="flex gap-1">
          <p className="text-sm text-gray-600 line-through">$20.00</p>
          <p className="text-gray-800">$18.00</p>
          <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
      <div className="shadow-lg w-80 ">
        <img className=" w-80 h-80" src="/images/order2.jpg" alt="" />
        <h1 className="my-5 text-lg text-gray-900 font-playwrite">
          Eggs Benedict Burger
        </h1>
        <h1>------------------------------------------------</h1>
        <div className="flex gap-1">
          <p className="text-sm text-gray-600 line-through">$20.00</p>
          <p className="text-gray-800">$13.00</p>
          <div className="text-yellow-400"></div>
        </div>
      </div>
      <div className="shadow-lg w-80">
        <img className="w-80 h-80" src="/images/order4.jpg" alt="" />
        <h1 className="my-5 text-lg text-gray-900 font-playwrite">
          Hawaiian Chicken
        </h1>
        <h1>------------------------------------------------</h1>
        <div className="flex gap-1">
          <p className="text-sm text-gray-600 line-through">$20.00</p>
          <p className="text-gray-800">$15.00</p>
          <div className="text-yellow-400"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Orders;
