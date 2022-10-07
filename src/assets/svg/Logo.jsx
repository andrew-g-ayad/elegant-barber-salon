import * as React from "react";

function SvgComponent(props) {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" width={27} height={40} viewBox="0 0 27 40" {...props}>
    //   <g data-name="Group 101" transform="translate(-375 -21)">
    //     <rect data-name="Rectangle 16" width={13} height={8} rx={4} transform="translate(375 53)" fill="#f40051" />
    //     <rect data-name="Rectangle 11" width={20} height={8} rx={4} transform="translate(382 21)" fill="#7F7219" />
    //     <rect data-name="Rectangle 15" width={20} height={8} rx={4} transform="translate(382 37)" fill="#7620ff" />
    //     <rect data-name="Rectangle 12" width={8} height={8} rx={4} transform="translate(375 29)" fill="#4cd5c5" />
    //   </g>
    // </svg>
    <svg
      preserveAspectRatio="xMidYMid meet"
      data-bbox="55.5 53.9 90 90"
      viewBox="55.5 53.9 90 90"
      height="40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
      data-type="shape"
      role="presentation"
      aria-hidden="true"
      fill="#fff"
    >
      <g>
        <switch>
          <g>
            <path d="M100.5 53.9c-24.9 0-45 20.1-45 45s20.1 45 45 45 45-20.1 45-45c0-24.8-20.2-45-45-45zm0 85.7c-22.5 0-40.7-18.2-40.7-40.7 0-22.5 18.2-40.7 40.7-40.7s40.7 18.2 40.7 40.7c0 22.5-18.3 40.7-40.7 40.7z"></path>
            <path d="M117.3 106.2c-1.4 0-2.6.4-3.7 1L103.4 97l16.8-17c.8-.8.8-2.1 0-2.8-.8-.8-2.1-.8-2.8 0l-16.9 16.9-17-16.9c-.8-.8-2.1-.8-2.8 0-.8.8-.8 2.1 0 2.8l16.9 16.9-10.2 10.2c-1.1-.6-2.4-1-3.7-1-4.2 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5c4.2 0 7.5-3.4 7.5-7.5 0-1.3-.4-2.6-1-3.7l10.2-10.2 10.2 10.2c-.6 1.1-1 2.4-1 3.7 0 4.2 3.4 7.5 7.5 7.5 4.2 0 7.5-3.4 7.5-7.5s-3.2-7.4-7.3-7.4zm-33.6 11.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm33.6 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
          </g>
        </switch>
      </g>
    </svg>
  );
}

export default SvgComponent;
