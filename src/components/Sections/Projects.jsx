import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/project-1.jpg";
import ProjectImg2 from "../../assets/img/projects/project-2.jpg";
import ProjectImg3 from "../../assets/img/projects/project-3.jpg";
import ProjectImg4 from "../../assets/img/projects/project-4.jpg";
import ProjectImg5 from "../../assets/img/projects/project-5.jpg";
import ProjectImg6 from "../../assets/img/projects/project-6.jpg";
import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
  return (
    <Wrapper id="projects" className="darkBg whiteColor">
      <div>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Projects</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Some Name Haircut"
                text="Some-Name Wanted to something, and we understood his needs which caused this awesome result."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Some Name Haircut"
                text="Some-Name Wanted to something, and we understood his needs which caused this awesome result."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Some Name Haircut"
                text="Some-Name Wanted to something, and we understood his needs which caused this awesome result."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Awesome Project"
                text="Some-Name Wanted to something, and we understood his needs which caused this awesome result."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Awesome Project"
                text="Some-Name Wanted to something, and we understood his needs which caused this awesome result."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Awesome Project"
                text="Some-Name Wanted to something, and we understood his needs which caused this awesome result."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton
                title="See More Styles"
                action={() => alert("clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 60px 0px;
`;
const HeaderInfo = styled.div`
  text-align: center;
`;
