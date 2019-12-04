import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { powerContext } from "../../context/PowerState";
import toggleState from "../../utils/toggleState";

const Status = props => {
  const { falcon, lightsaber, changeData, loadPower } = useContext(
    powerContext
  );
  const [falconClass, setFalconClass] = toggleState();
  const [lightsaberClass, setLightsaberClass] = toggleState();

  const handleFalconClick = () => {
    changeData("falcon");
    setFalconClass();
  };
  const handleLightsaberClick = () => {
    changeData("lightsaber");
    setLightsaberClass();
  };
  useEffect(() => {
    loadPower();
  }, []);

  let addClassFalcon = "";
  if (falcon !== 0) {
    addClassFalcon = "status-images status-image__left status-image__green";
  } else {
    addClassFalcon = "status-images status-image__left";
  }
  let addClassLightsaber = "";
  if (lightsaber !== 0) {
    addClassLightsaber =
      "status-images status-image__right status-image__green";
  } else {
    addClassLightsaber = "status-images status-image__right";
  }

  return (
    <section className="status">
      <div className="status-container">
        <h1>
          TOTAL POWER: <span id="status-total">{falcon + lightsaber}</span> kW
        </h1>
        <div className="status-image">
          <div onClick={handleFalconClick} className={addClassFalcon}></div>
          <div
            onClick={handleLightsaberClick}
            className={addClassLightsaber}
          ></div>
        </div>
        <div className="status-values">
          <h2>{falcon} kW </h2>
          <h2>{lightsaber} kW</h2>
        </div>
      </div>
    </section>
  );
};

Status.propTypes = {};

export default Status;
