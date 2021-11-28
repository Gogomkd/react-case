import React from "react";
import { Link } from "react-router-dom";

import Slider from "./slider";

const MissionDetails = ({ rocketInfo }) => {
  return (
    <div>
      <h1>Mission Name: {rocketInfo.mission_name}</h1>
      <div>
        <h1>Rocket Used: {rocketInfo.rocket.rocket_name}</h1>
        <p>Company: {rocketInfo.rocket.rocket.company}</p>
        <p>Country: {rocketInfo.rocket.rocket.country}</p>
        <p>Description: {rocketInfo.rocket.rocket.description}</p>
      </div>
      <h6>rocket images</h6>
      <Slider images={rocketInfo} />
      <Link to="/" style={{ display: "flex", justifyContent: "end" }}>
        <button className="btn btn-secondary">Back</button>
      </Link>
    </div>
  );
};
export default MissionDetails;
