const Meal = () => {
  return (
    <section className="flex flex-col gap-10 mx-20 mt-20 text-center">
      <h1 className="text-4xl font-playwrite">Meals Right From The Oven</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ad?
        Lorem ipsum dolor sit, <br />
        amet consectetur adipisicing elit. Similique, eum.
      </p>
      <div className=" h-96">
        <img
          className="object-cover rounded-xl size-full"
          src="/images/meal2.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Meal;
