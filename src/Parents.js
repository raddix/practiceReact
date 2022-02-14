import React, { useState } from "react";
import Child from "./Child";

export default function Parents() {
  const [option, setOption] = useState("");

  function handleSelectedValue(value) {
    setOption(value);
  }
  return (
    <div>
      <Child handleSelectedValue={handleSelectedValue} />
      <h1>Selected option is {option}</h1>
    </div>
  );
}
