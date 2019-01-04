import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div className="homeBox box1">
      <div className="home">
        <p className="welcome-textOne">
          Welcome back Jessica! <br />
          <br />
        </p>

        <p className="welcome-textTwo">
          Tip: As your caffeine goes up, your mood tends to increase a little.
        </p>
      </div>

      <div className="dayBox">
        <FontAwesomeIcon
          icon={faCalendarDay}
          style={{ color: "white", width: "3vh", height: "auto" }}
        />
        <Link to="/form">
          <p className="add-day">Add Day</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
