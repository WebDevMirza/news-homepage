import "../assets/styles/new.css";

const New = () => {
  return (
    <>
      <aside className="new">
        <h1 className="h1">New</h1>
        <div className="new-card">
          <a href="#" className="h2">
            Hydrogen VS Electric Cars
          </a>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>

        <div className="hr-line"></div>

        <div className="new-card">
          <a href="#" className="h2">
            The Downsides of AI Artistry
          </a>
          <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>

        <div className="hr-line"></div>

        <div className="new-card">
          <a href="#" className="h2">
            Is VC Funding Drying Up?
          </a>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </aside>
    </>
  );
};

export default New;
