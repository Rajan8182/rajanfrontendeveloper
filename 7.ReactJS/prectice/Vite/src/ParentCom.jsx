import React from "react";
import ChildCom from "./ChildCom";

function ParentCom() {
  const parentValue = "Data from Parent";
  return (
    <>
     <h1 className="heading">This is Parent Component</h1>
      <ChildCom value={parentValue} />
    </>
  );
}

export default ParentCom;
