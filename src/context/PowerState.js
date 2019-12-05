import React, { useReducer, createContext } from "react";
import PowerReducer from "./PowerReducer";
import { ADD_POWER } from "./types";
import fetchData from "../utils/fetchData";

export const powerContext = createContext();

const PowerState = props => {
  const initailState = {
    falcon: 0,
    lightsaber: 0
  };
  const [state, dispatch] = useReducer(PowerReducer, initailState);
  const changeData = async kind => {
    const data = await fetchData(kind);
    dispatch({ type: ADD_POWER, payload: data });
  };
  const loadPower = () => {
    setInterval(async () => {
      const data = await fetchData();
      dispatch({ type: ADD_POWER, payload: data });
    }, 10000);
  };
  return (
    <powerContext.Provider
      value={{
        falcon: state.falcon,
        lightsaber: state.lightsaber,
        changeData,
        loadPower
      }}
    >
      {props.children}
    </powerContext.Provider>
  );
};
export default PowerState;
