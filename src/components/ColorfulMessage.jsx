import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, //同じ場合は省略できる
    fontSize: "24px"
  };
  return <p style={contentStyle}>{children}</p>;
};
