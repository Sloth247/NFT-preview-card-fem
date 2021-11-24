// styles
import "./Hero.scss";

// images
import equilibrium from "../img/image-equilibrium.jpg";

export default function Hero() {
  const url = "#";
  return (
    <div>
      <div className="hero-container">
        <a href={url} className="hero-img">
          <img src={equilibrium} alt="view this equilibrium" />
        </a>
      </div>
    </div>
  );
}
