import { ADD_POWER } from "./types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_POWER:
      return {
        ...payload
      };
    default:
      return state;
  }
};
