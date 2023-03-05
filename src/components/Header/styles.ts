import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 50px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  color: #000000;
  transition: all 0.1s linear;
  padding: 10px 20px;
  &:hover {
    color: #ffffff;
  }
`;
