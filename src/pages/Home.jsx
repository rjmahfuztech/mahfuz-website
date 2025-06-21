import Banner from "../components/Home/Banner";
import Service from "../components/Home/Service";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="bg-[#02050A]">
        <div className="max-w-[1400px] mx-auto px-4 xl:px-0">
          <Service />
        </div>
      </div>
    </>
  );
};

export default Home;
