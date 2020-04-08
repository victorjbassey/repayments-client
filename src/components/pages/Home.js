import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <div class="home__textbox">
        <h1 class="home__heading">
          <span class="home__heading--main">the portal</span>
          <span class="home__heading--sub">for all repayments</span>
        </h1>
        <Link to="/dashboard">
          <button className="home__btn btn btn--white" href="#">
            get started
          </button>
        </Link>
      </div>
      }
    </main>
  );
};

export default Home;
