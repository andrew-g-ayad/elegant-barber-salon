import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";
import img from "../../assets/img/reach-us-map.png";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <a
          className="map"
          target="_blank"
          href="https://www.google.com/maps/dir//Elegant+Barber+%26+Salon,+628+N+Vermont+Ave+%233,+Los+Angeles,+CA+90004,+United+States/@34.082604,-118.291807,19z/data=!3m1!5s0x80c2c75d2183abe5:0xd10ea740b0439fcc!4m16!1m6!3m5!1s0x80c2c7284608dcff:0xa0f68f1ae2abddc6!2sElegant+Barber+%26+Salon!8m2!3d34.0826029!4d-118.2912598!4m8!1m0!1m5!1m1!1s0x80c2c7284608dcff:0xa0f68f1ae2abddc6!2m2!1d-118.2912598!2d34.0826029!3e4?hl=en"
        >
          <img src={img} alt="elegant-barber-salon-location" />
        </a>
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <LogoImg />
              <h1
                className="font15 extraBold whiteColor"
                style={{ marginLeft: "15px" }}
              >
                ELEGANT BARBER SALON
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span className="purpleColor font13">Andrew Ghaly</span> All Right
              Reserved
            </StyleP>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
