import cookimg from "../assets/cookimg1.webp";
function Hero() {
  return (
    <section className="h-[80vh] mx-20 flex container w-auto">
      <div className="relative flex items-center justify-center w-full h-full text-4xl leading-relaxed text-center font-playwrite">
        <h1 className="relative z-10 text-white ">
          Discover The Taste <br /> Of Perfection
        </h1>
        <img
          src={cookimg}
          alt=""
          className="absolute w-full h-full rounded-xl"
        />
      </div>
    </section>
  );
}
export default Hero;
