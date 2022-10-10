import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/projects/project-1.jpg";
import AddImage2 from "../../assets/img/projects/project-2.jpg";
import AddImage3 from "../../assets/img/projects/project-3.jpg";
import AddImage4 from "../../assets/img/projects/project-4.jpg";
import AddImage5 from "../../assets/img/projects/project-5.jpg";
import AddImage6 from "../../assets/img/projects/project-6.jpg";

export default function Services() {
  return (
    <Wrapper id="services">
      <StyledDiv className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font60 extraBold">WHY US?</h1>
            <p className="font20 lh1">
              Here you can list all features you offer in your awesome Elegant
              Barber Shop to Your Clients.
              <br />
              Because Here you can tell your clients why they should choose your
              Barber Shop, And how it stands out from the crowd.
            </p>
          </HeaderInfo>
        </div>
        <Grid>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="chair"
                title="Comfortable"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="clean"
                title="Clean Tools"
                subtitle="We Cleanup Our Tools After Using It For Each one of our Clients."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="chair"
                title="Comfortable"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="badge"
                title="Professional Staff"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="discount"
                title="Competing Price"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="discount"
                title="Competing Price"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </Grid>
        <div className=" ">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A few words about us</h4>
                <h2 className="font40 extraBold">A Story of Creativity</h2>
                <AboutParagraph>
                  Elegant Barber Salon is a premier Barber Shop and Salon in
                  between the heart of Koreatown and East Hollywood. Our barbers
                  have been serving the Los Angeles community for over 12 years.
                  Since 2020, we’ve offered a wide range of services and
                  products to give you the elegant and fabulous look that you
                  deserve. Give us a call to book an appointment or enjoy our
                  walk-in services. (Appointments Recommended).
                </AboutParagraph>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px auto" }}
                >
                  <div style={{ width: "190px" }}>
                    <FullButton
                      title="Get Started"
                      action={() => alert("clicked")}
                    />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </StyledDiv>
    </Wrapper>
  );
}

const AboutParagraph = styled.p`
  font-size: 1.09rem;
  line-height: 1.5rem;
`;
const StyledDiv = styled.div`
  padding: 100px 0;
  margin: 0 auto;
  max-width: 1300px;
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;
const Grid = styled.div`
  padding: 80px 0;
  margin: 0 auto;
  max-width: 1300px;
  @media (max-width: 860px) {
    padding: 20px 0;
    flex-direction: column;
  }
`;
const Wrapper = styled.section`
  background-color: white;
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 33%;
  padding: 35px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 29px 0;
  }
`;
const HeaderInfo = styled.div`
  text-align: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-around;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
