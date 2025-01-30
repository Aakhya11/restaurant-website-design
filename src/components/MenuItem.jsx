const MenuItem = ({ name, image, description, price }) => {
  return (
    <div className="flex gap-2 mx-2 my-4">
      <div>
        <img className="rounded-full size-16" src={image} alt="" />
      </div>

      <div className="flex flex-col">
        <h1 className="">{name}</h1>
        <div className="flex gap-8 text-gray-500">
          <p>{description}</p>
          <p>-------------</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
