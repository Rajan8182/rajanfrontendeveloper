import React from "react";
import {DatePicker} from "@nextui-org/react";
import Model from "./Models";

export default function Date() {
  return (
    <>
    <DatePicker label="Birth date" className="max-w-[284px] shadow-xl m-12" />
    <Model/>
    </>
  );
}
