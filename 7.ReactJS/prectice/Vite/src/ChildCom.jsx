import React from "react";

function ChildCom(props) {
  return (
    <div>
      <h1 className="heading">This is Child{props.value}</h1>
    </div>
  );
}

export default ChildCom;
