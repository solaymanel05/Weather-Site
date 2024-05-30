import React from "react";

export default function HumiditySvg({ width = "30px", height = "30px" }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    xmlSpace="preserve"
    width={width}
    height={height}
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
      
    
    }}
  >
    <path
      d="M36.474 14.5c2.94 4.273 7.612 13.166 7.612 16.414C44.086 37.584 38.67 43 32 43s-12.086-5.416-12.086-12.086c0-5.043 6.908-14.303 10.279-18.521A2.273 2.273 0 0 1 32 11.5"
      style={{ fill: "none", stroke: "#fff", strokeWidth: "1.5px" }}
    />
    <path
      d="M40.5 32.457a6.046 6.046 0 0 1-6.043 6.043M48 46.5c0 1.104-7.169 2-16 2s-16-.896-16-2"
      style={{ fill: "none", stroke: "#fff", strokeWidth: "1.5px" }}
    />
    <path
      d="M46.395 43.5c5.831.913 9.605 2.365 9.605 4 0 2.76-10.754 5-24 5s-24-2.24-24-5c0-1.635 3.774-3.087 9.605-4"
      style={{ fill: "none", stroke: "#fff", strokeWidth: "1.5px" }}
    />
  </svg>
  
  );
}
