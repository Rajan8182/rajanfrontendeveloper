import React, { useContext } from "react";
import DataContext from "./DataContext";

function ChildComponent() {
  const data = useContext(DataContext);
  return (
    <div>
      <h1 className="heading">This is Child Component {data}</h1>
    </div>
  );
}

export default ChildComponent;
