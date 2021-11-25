// images

import ethereum from "./img/icon-ethereum.svg";
import clock from "./img/icon-clock.svg";

// styles
import "./App.scss";

// components;

import Author from "./components/Author";
import Attribution from "./components/Attribution";
import Hero from "./components/Hero";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="main__inner">
          <Hero />
          <Title />
          <p className="main__description">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="main__price-container">
            <span>
              <img src={ethereum} alt="" aria-hidden="true" />
              0.041 ETH
            </span>
            <span>
              <img src={clock} alt="" />3 days left
            </span>
          </div>
          <Author />
        </div>
      </main>
      <footer>
        <Attribution />
      </footer>
    </div>
  );
}

export default App;
