import styled from "styled-components";

export const StyledMainPage = styled.div`
  display: flex;
  align-items: center;
`;

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
`;

export const Text = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  transform: rotate(-0.31deg);
`;

export const SubText = styled.h3`
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
`;

export const Btn = styled.button`
  background-color: #ef5b5b;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 0px 10px 35px rgba(229, 89, 55, 0.58);
  color: #ffffff;
  font-weight: 400;
  font-size: 32px;
  width: 300px;
  transition: all 0.1s linear;
  &:hover {
    background-color: #f73636;
    box-shadow: 0px 10px 35px rgba(229, 89, 55, 0.58);
    cursor: pointer;
  }
`;

export const DogImage = styled.div`
  width: 50%;
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-position: 0 -160px;
`;
