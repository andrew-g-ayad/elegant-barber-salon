import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import CleanIcon from "../../assets/svg/Features/water";
import ChairIcon from "../../assets/svg/Features/chair";
import BadgeIcon from "../../assets/svg/Features/badge";
import DiscountIcon from "../../assets/svg/Features/discount";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    case "clean":
      getIcon = <CleanIcon />;
      break;
    case "chair":
      getIcon = <ChairIcon />;
      break;
    case "badge":
      getIcon = <BadgeIcon />;
      break;
    case "discount":
      getIcon = <DiscountIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font15">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  padding: 5px 0;
  @media (max-width: 860px) {
    padding: 10px 0;
    font-size: 2rem;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 280px;
  font-size: 1.15rem;
  margin: 0 auto;
  line-height: 1.4rem;
  @media (max-width: 860px) {
    font-size: 1.15rem;
    margin: 0 auto;
  }
`;
