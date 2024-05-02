import React from "react";
import styled from "styled-components";
import { a1, a2, a3, a4, a5, a6, bvir, bviradmin, grm, istanbulCity, luqmoniHakim } from "../../../assets/img/img";
import { Tittle } from "../About/About";
import Card from "./Card";

const Work = styled.div`
  background-color: #22252c;
`;
const Box1 = styled.div``;
const Text = styled.div`
  background-color: #22252c;
  display: flex;
  align-items: center;
  padding: 114px 0px 80px 0px;

  @media (max-width: 430px) {
    padding: 50px 0px 50px 0px;
  }
`;
const Tittle1 = styled(Tittle)`
  text-align: center;
  text-transform: uppercase;
`;
const Portfolios = styled.div`
  display: flex;
  align-items: center;
  padding: 100px 0px 75px 0px;
  background-color: #00ffc5b2;
`;
const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 30px;
  column-gap: 30px;

  @media (max-width: 885px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 430px) {
    grid-template-columns: auto;
  }
`;
const Btn = styled.button`
  padding: 17px 46px;
  border: none;
  background-color: #22252c;
  text-transform: uppercase;
  color: #02cfb4;
  font-weight: 600;
  font-size: 14px;
  transition: 0.8s;

  &:hover {
    color: #22252c;
    border: 2px solid #22252c;
    background-color: transparent;
  }
`;
export default function Works() {
  return (
    <Work>
      <Text>
        <div className="container">
          <Box1>
            <Tittle1>Some Of My Works</Tittle1>
          </Box1>
        </div>
      </Text>
      <Portfolios>
        <div className="container">
          <Box2>
            <Cards>
              <Card img={a6} link={"https://cosmetika.netlify.app"} />
              <Card img={luqmoniHakim} link={"https://luqmonihakim.netlify.app/"} />
              <Card img={bvir} link={"https://agroxizmatlar.uz/"} />
              <Card img={bviradmin} link={"https://admin.agroxizmatlar.uz/"} />
              <Card img={istanbulCity} link={"https://istanbul-city.netlify.app/"} />
              <Card
                img={grm}
                link={"https://sanathali.getter.uz/"}
              />
            </Cards>
            <Btn>Load More</Btn>
          </Box2>
        </div>
      </Portfolios>
    </Work>
  );
}
