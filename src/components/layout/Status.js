import React, { useContext, useEffect } from "react";
import { powerContext } from "../../context/PowerState";
import toggleState from "../../utils/toggleState";
import falconPng from "../../assets/imgs/falcon.png";
import lightsaberPng from "../../assets/imgs/lightsaber.png";

const Status = () => {
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
    // eslint-disable-next-line
  }, []);

  const addClassFalcon = `${
    falcon !== 0 ? "status-images  status-image__border" : "status-images"
  } ${falconClass ? "status-images_bg" : ""}`;

  const addClassLightsaber = `${
    lightsaber !== 0 ? "status-images  status-image__border" : "status-images"
  } ${lightsaberClass ? "status-images_bg" : ""}`;

  return (
    <section className="status">
      <div className="status-container">
        <h1 className="my-1">
          TOTAL POWER:{" "}
          <span className="status-number">{falcon + lightsaber}</span> kW
        </h1>
        <div className="status-image">
          <div onClick={handleFalconClick} className={addClassFalcon}>
            <img src={falconPng} alt="Millennium Falcon" />
          </div>
          <div onClick={handleLightsaberClick} className={addClassLightsaber}>
            <img src={lightsaberPng} alt="Lightsaber" />
          </div>
        </div>
        <div className="status-values">
          <h2 className="my-1">
            <span className="status-number">{falcon}</span> kW{" "}
          </h2>
          <h2 className="my-1">
            <span className="status-number">{lightsaber}</span> kW
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Status;
