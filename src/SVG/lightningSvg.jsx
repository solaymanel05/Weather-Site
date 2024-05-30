import React from 'react';

export default function LightningSvg ({width = "100px", height = "100px"}){
  return (
    <>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve"
  width={width}
  height={height}
  style={{
    shapeRendering: "geometricPrecision",
    textRendering: "geometricPrecision",
    imageRendering: "optimizeQuality",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }}
  viewBox="0 0 2048 2048"
  xmlnsXlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html:
          "\n   \n    .fil60 {fill:none}\n    .fil61 {fill:#00838F}\n    .fil62 {fill:#FFFFFE;fill-rule:nonzero}\n   \n  "
      }}
    />
  </defs>
  <g id="Layer_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer" />
    <rect className="fil60" width={2048} height={2048} />
    <rect
      className="fil61"
      width={2048}
      height={2048}
      rx="256.001"
      ry="256.001"
    />
    <polygon
      className="fil62"
      points="837.501,879.05 1581.42,256.499 1248.7,743.66 1443.99,741.908 1464.13,797.878 1098.07,1095.7 1312.8,1079.54 1334.17,1136.25 465.363,1792.5 879.459,1283.33 623.084,1316.87 598.743,1261.4 990.343,933.35 858.011,934.772 "
    />
  </g>
</svg>

    </>
  );
}


