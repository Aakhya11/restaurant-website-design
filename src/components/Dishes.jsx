const Dishes = () => {
  return (
    <section className="flex flex-col w-screen">
      <div className="flex w-full h-96">
        <div className="relative w-1/2 h-96">
          <img
            className="object-cover w-full h-full"
            src="/images/mush1.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-end justify-start pb-5 pl-5 text-lg text-gray-900 font-playwrite">
            Truffle Mushroom Risotto
          </div>
        </div>
        <div className="relative w-1/2 h-96">
          <img
            className="object-cover w-full h-full"
            src="/images/lamb2.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-end justify-start pb-5 pl-5 text-xl text-gray-900 font-playwrite">
            Hurb-crusted Lamb Chops
          </div>
        </div>
      </div>
      <div className="flex w-full h-96">
        <div className="relative w-1/2 h-full">
          <img
            className="object-cover w-full h-full"
            src="/images/seabass3.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-end justify-start pb-5 pl-5 text-lg text-white font-playwrite">
            Pan-seared Sea Bass
          </div>
        </div>
        <div className="relative w-1/2 h-96">
          <img
            className="object-cover w-full h-full"
            src="/images/spinach4.webp"
            alt=""
          />
          <div className="absolute inset-0 flex items-end justify-start pb-5 pl-5 text-lg text-white font-playwrite">
            Wild mushroom and spanich stuffed chicken
          </div>
        </div>
      </div>
      <div className="flex w-full h-96">
        <div className="relative w-1/2 h-full">
          <img
            className="object-cover w-full h-full"
            src="/images/ravioli5.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-end justify-start pb-5 pl-5 text-lg text-gray-900 font-playwrite">
            Lobester Ravioli
          </div>
        </div>
        <div className="relative w-1/2 h-96">
          <img
            className="object-cover w-full h-full"
            src="/images/choco6.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-end justify-start pb-5 pl-5 text-lg text-gray-900 font-playwrite">
            Flourless Chocolate Torte
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dishes;
