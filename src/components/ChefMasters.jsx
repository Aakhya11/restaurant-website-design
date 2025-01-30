import Chef from "./Chef";

const ChefMasters = () => {
  return (
    <div className="container flex justify-around w-auto my-20">
      <Chef
        name={"Manuel Olveira"}
        image={"/images/chef4.webp"}
        designation={"Executive Chef"}
      />
      <Chef
        name={"Liam Chen"}
        image={"/images/chef3.jpg"}
        designation={"Senior Chef"}
      />
      <Chef
        name={"Maria Lopez"}
        image={"/images/chef5.webp"}
        designation={"Sous Chef"}
      />
    </div>
  );
};

export default ChefMasters;
