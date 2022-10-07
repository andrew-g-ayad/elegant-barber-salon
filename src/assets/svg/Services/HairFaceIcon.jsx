import * as React from "react";

function SvgComponent(props) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={43.336}
    //   height={32.531}
    //   viewBox="0 0 43.336 32.531"
    //   {...props}
    // >
    <svg
      {...props}
      enable-background="new 0 0 512 512"
      height="50"
      width="50"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="#fff"
        id="_x33_77_x2C__Avatar_x2C__Catering_x2C__Female_x2C__Waitresses_x2C__Work"
      >
        <g>
          <path d="m383.065 379.904-53.727-23.025c-20.182-8.649-36.845-23.397-47.883-42.104 31.897-12.537 54.545-43.618 54.545-79.909v-24.157h5c13.785 0 25-11.215 25-25v-10c0-13.785-11.215-25-25-25h-5.221c-.457-6.727-1.629-13.201-3.666-19.718 8.715-7.506 13.887-18.483 13.887-30.282 0-22.057-17.944-40-40-40-11.799 0-22.776 5.172-30.282 13.887-8.077-2.524-16.663-3.887-25.561-3.887h-18.314c-8.898 0-17.483 1.362-25.561 3.887-7.505-8.715-18.483-13.887-30.282-13.887-22.056 0-40 17.943-40 40 0 11.799 5.172 22.776 13.887 30.282-1.967 6.293-3.205 12.9-3.666 19.718h-5.221c-13.785 0-25 11.215-25 25v10c0 13.785 11.215 25 25 25h5v24.157c0 37.057 23.604 68.7 56.566 80.696-2.435 4.073-5.146 7.955-8.116 11.627-1.005.834-1.762 1.764-2.346 2.805-9.998 11.483-22.578 20.708-36.991 26.885l-53.727 23.025c-31.113 13.335-52.018 46.042-52.018 81.387 0 5.522 4.477 10 10 10h365.714c5.522 0 10-4.478 10-10 .001-35.346-20.903-68.052-52.017-81.387zm-122.779 10.805v60.582h-30v-60.582c0-4.751-3.342-8.846-7.997-9.797-.208-.043-18.792-4.059-31.324-22.292 4.261-3.37 8.283-7.012 12.041-10.904 8.794 4.54 24.142 10.731 42.455 10.731 11.571 0 24.325-2.49 37.352-9.413 4.563 4.589 9.488 8.813 14.737 12.634-10.29 16.496-27.674 19.009-28.435 19.109-5.034.594-8.829 4.862-8.829 9.932zm85.714-215v10c0 2.757-2.243 5-5 5h-5v-20h5c2.757 0 5 2.243 5 5zm-40-95c11.028 0 20 8.972 20 20 0 3.79-1.072 7.41-2.991 10.514-6.954-11.138-16.386-20.568-27.522-27.522 3.103-1.921 6.723-2.992 10.513-2.992zm-55.843 10c30.73 0 56.606 21.165 63.83 49.682-16.1 7.376-35.023-.82-40.792-17.543-1.274-3.694-4.584-6.309-8.475-6.691-3.881-.381-7.645 1.536-9.615 4.912-18.055 30.94-54.505 46.004-89.105 37.053v-1.57c0-36.306 29.537-65.843 65.843-65.843zm-94.157 10c0-11.028 8.972-20 20-20 3.791 0 7.411 1.071 10.514 2.991-11.137 6.954-20.568 16.385-27.522 27.521-1.92-3.102-2.992-6.722-2.992-10.512zm-15 90c-2.757 0-5-2.243-5-5v-10c0-2.757 2.243-5 5-5h5v20zm25 44.157c0-9.462 0-42.744 0-56.207 36.388 7.455 73.56-5.938 96.858-33.92 12.88 15.758 33.965 22.063 53.142 16.246v73.881c0 36.306-29.537 65.843-65.843 65.843h-18.314c-36.306 0-65.843-29.537-65.843-65.843zm84.157 85.843c3.818 0 7.572-.276 11.261-.762 2.443 4.622 5.165 9.061 8.146 13.296-21.717 9.62-42.176 3.713-53.616-1.45 2.521-3.705 4.84-7.56 6.945-11.552 7.208.751 10.839.36 27.264.468zm-140.892 77.578c53.362-23.079 55.52-23.297 65.048-28.578 11.429 16.764 26.748 24.785 35.973 28.321v53.261h-80v-20.582c0-5.522-4.477-10-10-10s-10 4.478-10 10v20.582h-40.174c3.446-23.225 18.584-44.187 39.153-53.004zm271.052 53.004-.031-20.598c-.009-5.518-4.483-9.984-10-9.984-.005 0-.011 0-.016 0-5.522.009-9.993 4.492-9.984 10.016l.031 20.566h-80.031v-52.724c9.411-3.001 24.281-10.12 34.364-26.48 6.146 3.087 5.003 2.313 60.536 26.2 20.57 8.815 35.708 29.779 39.153 53.004z" />
          <path d="m263.07 261.384c3.905-3.904 3.906-10.236.001-14.142-3.902-3.905-10.235-3.905-14.142-.001-4.617 4.615-12.128 4.615-16.744 0-3.905-3.905-10.238-3.904-14.142.001-3.905 3.905-3.905 10.236 0 14.142 12.414 12.411 32.611 12.414 45.027 0z" />
          <path d="m272.187 217.779c1.853-1.852 4.871-1.87 6.743.001 3.904 3.905 10.237 3.904 14.142-.001s3.905-10.237-.001-14.142c-9.679-9.679-25.347-9.681-35.026 0-3.905 3.905-3.905 10.237.001 14.143 3.903 3.906 10.236 3.905 14.141-.001z" />
          <path d="m223.956 217.78c3.905-3.905 3.905-10.237 0-14.143-9.657-9.656-25.37-9.656-35.027 0-3.905 3.905-3.905 10.237 0 14.143 3.905 3.905 10.237 3.905 14.143 0 1.858-1.859 4.884-1.859 6.742 0 1.953 1.952 4.512 2.929 7.071 2.929s5.118-.977 7.071-2.929z" />
          <circle cx="46" cy="360.709" r="10" />
          <circle cx="86" cy="180.709" r="10" />
          <circle cx="66" cy="50.709" r="10" />
          <circle cx="416" cy="60.709" r="10" />
          <circle cx="406" cy="310.709" r="10" />
          <path d="m66 320.709c16.542 0 30-13.458 30-30s-13.458-30-30-30-30 13.458-30 30 13.458 30 30 30zm0-40c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10z" />
          <path d="m436 170.709c-22.056 0-40 17.943-40 40 0 22.056 17.944 40 40 40s40-17.944 40-40c0-22.057-17.944-40-40-40zm0 60c-11.028 0-20-8.973-20-20 0-11.028 8.972-20 20-20s20 8.972 20 20c0 11.027-8.972 20-20 20z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;