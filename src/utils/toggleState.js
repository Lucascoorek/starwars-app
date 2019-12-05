import { useState } from "react";

export default (initailVal = false) => {
  const [val, setVal] = useState(initailVal);
  const toggleState = () => setVal(!val);
  return [val, toggleState];
};
