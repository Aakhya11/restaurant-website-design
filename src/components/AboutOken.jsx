const AboutOken = () => {
  return (
    <div className="container w-auto mx-20 my-20 rounded-lg md:flex bg-brown-0">
      <div className="flex flex-col justify-center flex-1 pl-32">
        <h1 className="my-6 text-3xl text-white font-playwrite">About Oken</h1>
        <p className="text-center text-white sm:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel alias,
          <br />
          officia quibusdam eaque non laboriosam tempore deleniti a at quaerat{" "}
          <br />
          eos blanditiis fugiat fugit sint dignissimos dolores veniam ipsa,{" "}
          <br />
          porro corporis? Voluptates nulla iste maxime.
        </p>
      </div>
      <div className="flex flex-1 object-cover px-5 py-5 rounded-r-xl ">
        <img src="/images/food.jpg" alt="" />
      </div>
    </div>
  );
};

export default AboutOken;
