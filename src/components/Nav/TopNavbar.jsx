import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate"
        style={
          y > 100
            ? {
                height: "70px",
                backgroundColor: "rgba(20,20,20, 0.85)",
                backdropFilter: "blur(9px)",
              }
            : { height: "100px" }
        }
      >
        <NavInner className="container flexSpaceCenter">
          <Link
            className="pointer flexNullCenter whiteColor"
            to="home"
            smooth={true}
          >
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              ELEGANT BARBER SALON
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link
                className="whiteColor"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                className="whiteColor"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
              >
                Features
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                className="whiteColor"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
              >
                Projects
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                className="whiteColor"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="blog"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Testimonials
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                className="whiteColor"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="pricing"
                spy={true}
                smooth={true}
                offset={-20}
              >
                Pricing
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                className="whiteColor"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="map"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Find Us
              </Link>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
