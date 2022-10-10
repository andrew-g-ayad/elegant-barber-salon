import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

// Assets
const img = `${process.env.PUBLIC_URL}/hair-dryer-comb-barber-s-hands-dark.jpg`;

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className=" ">
        <div className="container whiteColor">
          <HeaderInfo>
            <h1 className="font40 ">Check Our Pricing</h1>
            <p className="font20 lh1">
              Since 2020, we’ve offered a wide range of services and products to
              give you the elegant and fabulous look that you deserve.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="$25"
                title="Haircut"
                text="Choose from 10s of Awesome  Haircuts, And leave it on our professionals."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="face-shave"
                price="$20"
                title="Face Shave"
                text="Simply Safe, Clean, And Fast Shaving. You Can Get it Now. "
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="hair-face"
                price="$45"
                title="Shave & Cut"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              />
            </TableBox>
          </TablesWrapper>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="$25"
                title="Haircut"
                text="Choose from 10s of Awesome  Haircuts, And leave it on our professionals."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="face-shave"
                price="$20"
                title="Face Shave"
                text="Simply Safe, Clean, And Fast Shaving. You Can Get it Now. "
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="hair-face"
                price="$45"
                title="Shave & Cut"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
  background-attachment: fixed;
  background-image: url(${img});
  @media (max-width: 860px) {
    background-size: 950px 750px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
const HeaderInfo = styled.div`
  margin-top: 50px;
  margin-bottom: 90px;
  text-align: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;

  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;
