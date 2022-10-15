import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/man-shaving-procedure.jpg";
import HeroImage from "../../assets/img/elgeant-barber-salon.webp";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

export default function Header() {
  return (
    <Wrapper>
      <Container id="home" className="container flexSpaceCenter">
        <LeftSide className="whiteColor">
          <div>
            <h1 className="font80">
              Elegant
              <br />
              Barber
              <br />
              Salon
            </h1>
            <HeaderP className="font40 semiBold">You are most welcomed</HeaderP>
            <BtnWrapper>
              <FullButton border title="Request an Appointment" to="services" />
            </BtnWrapper>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <Img
              className="radius8"
              src={HeaderImage}
              alt="office"
              style={{ zIndex: 9 }}
            />
            <QuoteWrapper className="flexCenter darkBg radius8">
              <QuotesWrapper>
                <QuotesIcon />
              </QuotesWrapper>
              <div>
                <p className="font15 whiteColor">
                  <em>
                    Adipisicing elit. Ex cumque dolorum illum commodi similique
                    Perferendis.
                  </em>
                </p>
                <p
                  className="font13 orangeColor textRight"
                  style={{ marginTop: "10px" }}
                >
                  Ralph Waldo Emerson
                </p>
              </div>
            </QuoteWrapper>
            <DotsWrapper>
              <Dots />
            </DotsWrapper>
          </ImageWrapper>
          <GreyDiv className="darkBg"></GreyDiv>
        </RightSide>
      </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
    max-height: 70vh;
  }
`;
const Wrapper = styled.section`
  width: 100%;
  min-height: 740px;
  background-image: url(${HeroImage});
  background-attachment: fixed;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  margin-top: -150px;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 960px) {
    height: 80vh;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    display: none;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
