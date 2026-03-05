import React from "react";
import type { colors } from "../../pages/SingleProduct";

const Colors = ({prop}:colors) => {
  return (
    <div className={"w-6 h-6 border rounded-full flex justify-center items-center " + prop}>
    </div>
  );
};

export default Colors;
