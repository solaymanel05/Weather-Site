import React from "react";

export default function LocationSvg({width="50px",height="30px"}) {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={width} height={height}>
  <defs>
    <style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#009392}" }} />
  </defs>
  <g id="location">
    <path
      className="cls-1"
      d="m24.1 6-.1-.1A9.12 9.12 0 0 0 16 2a9.12 9.12 0 0 0-8 3.9l-.1.1C3.85 11.42 6.48 21.35 14 29.16a2.75 2.75 0 0 0 4 0C25.52 21.35 28.15 11.42 24.1 6zm-7.56 21.77a.76.76 0 0 1-1.08 0c-7.82-8.09-8.9-16.62-6-20.53l.11-.15A7.16 7.16 0 0 1 16 4a7.16 7.16 0 0 1 6.39 3.09l.11.15c2.94 3.91 1.86 12.44-6 20.53z"
    />
    <path
      className="cls-1"
      d="M16 7a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"
    />
  </g>
</svg>

    </>
  );
}
