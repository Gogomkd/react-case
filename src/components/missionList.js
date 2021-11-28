import React from "react";
import { Link } from "react-router-dom";

const MisionList = ({ missions, length, missionDetail }) => {
  return (
    <>
      <p className="lead">Total launched missions: {length}</p>
      <div className="missionInfo">
        {missions.map((mission, index) => (
          <div
            className="missionContent"
            key={index}
            style={{ width: "15rem" }}
          >
            <img
              src={mission.links.flickr_images[0]}
              className="card-img-top"
              alt="Some badass rocket"
            />
            <div className="card-body">
              <h5 className="card-title">
                Mission name: {mission.mission_name}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Launch Date: {mission.launch_date_local}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Rocket: {mission.rocket.rocket_name}
              </h6>
              <p className="card-text"></p>
              <Link to="/missionDetails">
                <button
                  onClick={() => missionDetail(mission)}
                  className="btn btn-info m-1"
                >
                  Mission Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MisionList;
