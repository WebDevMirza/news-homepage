import HeroImgDesktop from "../assets/images/image-web-3-desktop.jpg";
import HeroImgMobile from "../assets/images/image-web-3-mobile.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-img">
          <picture>
            <source media="(min-width: 1024px)" srcSet={HeroImgDesktop} />
            <img src={HeroImgMobile} alt="the bright future of the web 3.0" />
          </picture>
        </div>
        <div className="hero-body">
          <h1 className="h1 hero-title">The Bright Future of Web 3.0?</h1>
          <div className="hero-rest">
            <p className="hero-text">
              We dive into the next evolution of the web that claims to put the power of the platforms back into the
              hands of the people. But is it really fulfilling its promise?
            </p>
            <div>
              <a className="btn-hero" href="#">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
