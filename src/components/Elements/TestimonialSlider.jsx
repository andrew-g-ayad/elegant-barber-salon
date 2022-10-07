import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="I am from NY and haircuts are super important and detailed. Feels good to find a shop that gives that level of service in all aspects. Best barber shop in town!!!"
            author="Nu MoNe"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Was in town needing a haircut. A friend of mine recommended this place. Karen did an awesome job cutting my hair. Haircut price very reasonable. Thank you! Highly recommended! 👍👍👍"
            author="Tutuman Xtreme"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Excelente barbería! Los barberos lo hacen sentir cómodo y una experiencia muy profesional! 5 estrellas!"
            author="Charito Chavarria"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="FThe greatest barbershop I've ever been to. When it comes to hair, they really are experts. Additionally, they are quite accommodating with their consumer."
            author="Darenn Joy Vigilia"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Super Friendly and Professional and Clean. This  Barbershop takes there time to service your Haircut"
            author="Mario Pallais"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
