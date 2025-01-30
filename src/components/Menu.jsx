import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="flex justify-around">
      <div>
        <h1 className="my-6 text-3xl font-playwrite">Main Dish</h1>
        <MenuItem
          name={"Grilled Selmon With Dil Sauce"}
          image={"/images/selmon.jpg"}
          description={"Candied Jerusalem artichokes, truffle"}
          price={40}
        />
        <MenuItem
          name={"Roast Beef with Vegetable"}
          image={"/images/img2.jpg"}
          description={"Candied Jerusalem artichokes, truffle"}
          price={20}
        />
        <MenuItem
          name={"Marrkesh Vegetarian Curruy"}
          image={"/images/img3.jpg"}
          description={"Candied Jerusalem artichokes, truffle"}
          price={25}
        />
        <MenuItem
          name={"Spicy Vegan Potato Curry"}
          image={"/images/img4.jpg"}
          description={"Candied Jerusalem artichokes, truffle"}
          price={30}
        />

        <div>
          <h1 className="my-6 mt-20 text-3xl font-playwrite">Desserts</h1>
        </div>
        <MenuItem
          name={"Apple pie with cream"}
          image={"/images/dessert1.jpg"}
          description={"Candied Jerusalem artichokes, truffle"}
          price={40}
        />
        <MenuItem
          name={"Lemon Meringue Pie"}
          image={"/images/dessert2.jpg"}
          description={"Candied Jerusalem artichokes, truffle"}
          price={20}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="my-6 text-3xl font-playwrite">Starters</h1>

        <div className="">
          <MenuItem
            name={"French Onion Soup"}
            image={"/images/img7.jpg"}
            description={"Candied Jerusalem artichokes, truffle"}
            price={30}
          />
          <MenuItem
            name={"Tomato Bruschetta"}
            image={"/images/img8.jpg"}
            description={"Candied Jerusalem artichokes, truffle"}
            price={25}
          />
          <MenuItem
            name={"Bronciole"}
            image={"/images/img5.jpg"}
            description={"Candied Jerusalem artichokes, truffle"}
            price={30}
          />
          <MenuItem
            name={"Spring Roll"}
            image={"/images/img6.jpg"}
            description={"Candied Jerusalem artichokes, truffle"}
            price={20}
          />
          <div className="h-48 mt-20 w-96">
            <img src="/images/meal2.avif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
