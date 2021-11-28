import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import MissionList from "./missionList";
import MissionDetails from "./missionDetails";
import { Routes, Route } from "react-router-dom";
import Pagination from "./pagination";
import paginate from "../util/paginate.js";

const Missions = () => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [rockectDetails, setRocketDetails] = useState();

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function missionDetail(mission) {
    data.launchesPast.filter(function (m) {
      if (m.mission_name === mission.mission_name) return setRocketDetails(m);
    });
  }

  const missionsList = gql`
    query GetMissions {
      launchesPast {
        mission_name
        launch_date_local
        links {
          video_link
          flickr_images
        }
        rocket {
          rocket_name
          rocket {
            id
            company
            name
            type
            description
            country
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(missionsList);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  const missionList = data.launchesPast.filter(function (m) {
    return m.links.flickr_images.length > 0;
  });

  const dataPerPage = paginate(missionList, currentPage, pageSize);

  return (
    <div>
      <div>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div className="content">
                <MissionList
                  missions={dataPerPage}
                  length={missionList.length}
                  missionDetail={missionDetail}
                />
                <Pagination
                  itemsCount={missionList.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            }
          />
          <Route
            path="/missionDetails"
            element={<MissionDetails rocketInfo={rockectDetails} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Missions;
