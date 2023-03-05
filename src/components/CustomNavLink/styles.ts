import { NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)<{ $isActive: PathMatch<string> | null }>`
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  color: #000000;
  border-bottom: ${({ $isActive }) => ($isActive ? "2px solid #000000" : "none")};
  transition: all 0.1s linear;
  padding: 10px 20px;
  &:hover {
    color: ${({ $isActive }) => ($isActive ? "#000000" : "#ffffff")};
  }
`;
