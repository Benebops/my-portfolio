import "./home.css";
import HomeSubA from "./HomeSubA";
import HomeSubB from "./HomeSubB";

const Home = () => {
  return (
    <div className="intro-section" id="home-section">
      <div className="text-content">
        <HomeSubA />
      </div>
      <div className="image-content">
        <HomeSubB />
      </div>
    </div>
  );
};

export default Home;
