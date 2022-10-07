import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      id="Layer_3"
      viewBox="0 0 511.726 511.726"
      width={51}
      height={51}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#fff">
        <path d="m402.222 82.106c0-5.919-.827-11.777-2.467-17.518l.199.018-.762-1.882c-1.045-3.29-2.36-6.539-3.941-9.736-4.207-10.182-14.058-19.915-15.462-21.27-19.829-19.861-49.628-31.718-79.729-31.718-32.252 0-61.708 13.402-79.638 36.037h-14.297c-31.969 0-59.609 21.757-67.215 52.909l14.572 3.558c5.961-24.415 27.608-41.467 52.643-41.467h4.796l-10.675 17.826 12.869 7.706 17.285-28.864c14.635-20.178 41.296-32.705 69.66-32.705 26.23 0 52.085 10.229 69.161 27.363l.118.116c2.014 1.934 6.993 7.271 10.188 12.606l2.151 4.296c3.678 7.348 5.543 14.994 5.543 22.725 0 18.553-14.291 38.538-38.241 53.506-1.243.659-16.147 8.391-35.681 11.211-26.31 3.798-48.407-2.708-65.68-19.333-31.479-30.301-60.673-17.314-65.279-14.962-11.812 4.642-22.48 15.931-30.439 26.532v-33.35h-15v64.102h-10.681c-14.457 0-26.219 11.762-26.219 26.219v16.24c0 14.457 11.762 26.219 26.219 26.219h10.681v37.667c-3.451.456-7.182.708-11.257.708l-1.059 14.925 1.537.219c-2.897 4.606-5.186 11.039-5.186 19.886 0 14.619 10.841 27.613 24.085 29.945-4.097 5.556-6.371 12.34-6.371 19.32 0 17.934 14.591 32.525 32.525 32.525 6.394 0 12.529-1.888 17.721-5.264 1.661 14.042 13.638 24.97 28.12 24.97 7.113 0 13.321-1.789 18.299-5.164h19.799v16.438c0 9.649 7.851 17.5 17.5 17.5h7.438v69.563h55v-30.5h-15v15.5h-25v-54.563h25v24.229h15v-24.229h7.5c9.649 0 17.5-7.851 17.5-17.5v-16.438h22.626v-74.063h-27.506c.774-2.272 1.422-4.589 1.936-6.943.438-1.706 3.06-12.596 3.06-28.927v-4.716l12.534-1.788-1.059-14.925c-4.16 0-7.964-.261-11.475-.735v-37.64h11.301c14.457 0 26.218-11.762 26.218-26.219v-16.24c0-14.457-11.761-26.219-26.218-26.219h-11.301v-23.573c26.408-17.553 42.054-41.293 42.054-64.133zm-41.433 102.706h10.682c6.186 0 11.218 5.033 11.218 11.219v16.24c0 6.186-5.033 11.219-11.218 11.219h-10.682zm-8.112-42.667h-.001l-.072-.131.073.118zm-226.455 81.344c-6.186 0-11.219-5.033-11.219-11.219v-16.24c0-6.186 5.033-11.219 11.219-11.219h10.681v38.677h-10.681zm90.796 174.9c-7.342 0-13.316-5.974-13.316-13.316 0-2.139.504-4.195 1.498-6.11l3.979-7.669-19.472-7.339-3.242 5.769c-3.106 5.527-8.964 8.96-15.288 8.96-9.663 0-17.525-7.862-17.525-17.525 0-4.935 1.999-9.503 5.628-12.862l4.497-4.162-8.696-17.177-5.275.216c-.18.007-.358.019-.537.031l-.093.006c-6.816-.056-13.239-7.473-13.239-15.316 0-12.353 6.408-16.153 9.048-17.195l40.998 5.849 15.252 1.782.576.044c1.073.042 2.143.063 3.213.063 8.751 0 17.389-1.405 25.719-4.188l2.309-.771v85.86c-.005.178-.135 4.331-2.284 8.186-2.574 4.619-7.072 6.864-13.75 6.864zm128.035 26.274c0 1.378-1.122 2.5-2.5 2.5h-69.938c-1.378 0-2.5-1.122-2.5-2.5v-16.438h74.938zm22.626-31.437h-7.626-104.937-7.063v-9.839-34.223h119.626zm-22.51-94.933c0 15.289-2.574 25.143-2.595 25.224l-.093.381c-.764 3.547-1.927 6.983-3.456 10.265h-90.972v-41.695l.591-.198 17.9 5.979c11.917 3.98 24.792 5.148 37.229 3.372l41.396-5.906zm-35.075-32.401c5.996 5.508 12.688 11.657 21.646 16.588l-30.084 4.292c-10.145 1.446-20.642.496-30.358-2.75l-22.652-7.566-22.652 7.566c-7.535 2.518-15.378 3.651-23.313 3.374l-14.672-1.712-22.458-3.204c8.958-4.932 15.65-11.08 21.646-16.588 9.583-8.804 17.153-15.758 30.825-15.758 7.479 0 13.606 1.924 18.209 5.717 7.195 5.93 17.638 5.929 24.832 0 4.603-3.793 10.729-5.717 18.209-5.717 6.793 0 12.351 1.612 18.021 5.228l8.064-12.647c-8.111-5.171-16.4-7.58-26.086-7.58-11.052 0-20.388 3.076-27.749 9.142-1.64 1.35-4.113 1.351-5.751 0-7.36-6.066-16.697-9.142-27.749-9.142-19.516 0-30.424 10.021-40.973 19.712-7.134 6.554-14.421 13.238-25.144 17.496v-105.604c5.825-10.684 21.401-34.773 36.193-40.354l1.045-.489c.22-.126 22.462-12.254 48.077 12.401 20.606 19.835 47.833 27.892 78.733 23.298 11.838-1.759 22.033-5.044 29.217-7.858v118.52c-10.606-4.262-17.841-10.901-24.927-17.41l-1.993-1.827-10.109 11.082z" />
        <path d="m189.971 190.517h14.875v15h-14.875z" />
        <path d="m294.971 190.517h14.875v15h-14.875z" />
        <path d="m268.537 363.694h78.658v15h-78.658z" />
        <path d="m86.238 443.226h14.875v15h-14.875z" />
        <path d="m416.113 293.226h14.875v15h-14.875z" />
        <path d="m189.971 432.226h14.875v15h-14.875z" />
        <g>
          <path d="m63.613 327.53h15v15h-15z" />
          <path d="m63.613 357.53h15v15h-15z" />
          <path d="m78.613 342.53h15v15h-15z" />
          <path d="m48.613 342.53h15v15h-15z" />
        </g>
        <g>
          <path d="m433.113 417.226h15v15h-15z" />
          <path d="m433.113 447.226h15v15h-15z" />
          <path d="m448.113 432.226h15v15h-15z" />
          <path d="m418.113 432.226h15v15h-15z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
