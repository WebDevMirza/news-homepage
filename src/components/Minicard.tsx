import "../assets/styles/minicard.css";
import RetroPCs from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import Gaming from "../assets/images/image-gaming-growth.jpg";

const Minicard = () => {
  return (
    <>
      <div className="mini">
        <div className="mini-img">
          <img src={RetroPCs} alt="retro pcs" />
        </div>
        <div className="mini-body">
          <span>01</span>
          <a href="#" className="h3">
            Reviving Retro PCs
          </a>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>

      <div className="mini">
        <div className="mini-img">
          <img src={Laptops} alt="laptops" />
        </div>
        <div className="mini-body">
          <span>02</span>
          <a href="#" className="h3">
            Top 10 Laptops of 2022
          </a>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>

      <div className="mini">
        <div className="mini-img">
          <img src={Gaming} alt="gaming" />
        </div>
        <div className="mini-body">
          <span>03</span>
          <a href="#" className="h3">
            The Growth of Gaming
          </a>
          <p>How the pandemic has sparked fresh opportunities</p>
        </div>
      </div>
    </>
  );
};

export default Minicard;
