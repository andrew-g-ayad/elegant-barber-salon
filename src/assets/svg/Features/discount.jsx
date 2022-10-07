import * as React from "react";

function SvgComponent(props) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={39.581}
    //   height={39.58}
    //   viewBox="0 0 39.581 39.58"
    //   {...props}
    // >
    <svg
      id="Layer_1"
      height="80"
      width="80"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
    >
      <path d="m19 31h-12a1 1 0 0 0 -1 1v22a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2l17.08 2.84a7.09 7.09 0 0 0 5.92-1.56l13.8-11.92a3.56 3.56 0 0 0 1-4 3.8 3.8 0 0 0 -6-1.46l-7.12 5.45a4 4 0 0 0 -3.68-2.35h-12a5 5 0 0 0 -5-5h-4v-2a1 1 0 0 0 -1-1zm-1 22h-10v-20h10zm6-17a3 3 0 0 1 3 3v1a1 1 0 0 0 1 1h13a2 2 0 0 1 0 4h-14v2h14a4 4 0 0 0 3.93-3.34l8.07-6.21a1.82 1.82 0 0 1 1.2-.45 1.72 1.72 0 0 1 1.65 1.1 1.56 1.56 0 0 1 -.4 1.76l-13.75 11.9a5.08 5.08 0 0 1 -4.28 1.15l-17.42-2.91v-14z" />
      <path d="m38 37a14 14 0 1 0 -14-14 14 14 0 0 0 14 14zm0-26a12 12 0 1 1 -12 12 12 12 0 0 1 12-12z" />
      <path
        d="m29 22h18v2h-18z"
        transform="matrix(.707 -.707 .707 .707 -5.13 33.6)"
      />
      <path d="m34 22a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" />
      <path d="m42 24a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" />
    </svg>
  );
}

export default SvgComponent;
