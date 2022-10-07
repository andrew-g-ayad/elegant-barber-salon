import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HaircutIcon from "../../assets/svg/Services/HaircutIcon";
import FaceShaveIcon from "../../assets/svg/Services/FaceShaveIcon";
import HairFaceIcon from "../../assets/svg/Services/HairFaceIcon";
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import CheckMark from "../../assets/svg/Checkmark";

export default function PricingTable({
  icon,
  price,
  title,
  text,
  offers,
  action,
}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <HaircutIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "face-shave":
      getIcon = <FaceShaveIcon />;
      break;
    case "hair-face":
      getIcon = <HairFaceIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="radius8   whiteColor">
      <div className="flexSpaceCenter">
        {getIcon}
        <p className="font30 extraBold">{price}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="font30 extraBold">{title}</h4>
        <p className="font13">{text}</p>
      </div>

      <div style={{ maxWidth: "80px", margin: "30px 0 0 auto" }}>
        <FullButton title="Get it" action={action} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
