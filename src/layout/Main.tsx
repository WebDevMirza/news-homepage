import Hero from "../components/Hero";
import "../assets/styles/layout.css";
import "../assets/styles/hero.css";
import New from "../components/New";
import Minicard from "../components/Minicard";

const Main = () => {
  return (
    <>
      <div className="layout">
        <div className="main-wrapper">
          <Hero />
          <New />
          <Minicard />
        </div>
      </div>
    </>
  );
};

export default Main;
