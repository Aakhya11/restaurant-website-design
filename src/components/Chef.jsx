const Chef = ({ image, name, designation }) => {
  return (
    <div className="my-20">
      <img className="rounded-br-full w-80 h-[70vh]" src={image} alt="" />
      <h1 className="my-5 text-lg text-gray-900 font-playwrite">{name}</h1>
      <p className="text-sm text-gray-500">{designation}</p>
    </div>
  );
};

export default Chef;
