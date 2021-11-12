import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.68 2.00006L7.02057e-05 8.72L7.68 15.4399L7.68 12L13 12L13 6L7.68 6L7.68 2.00006Z"
        fill="#60605F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.32 24.4399L23.9999 17.7199L16.32 11V14.4399H11L11 20.4399H16.32V24.4399Z"
        fill="#60605F"
      />
    </Svg>
  );
};

export default Icon;
