import { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "router";
import { StyledNavLink } from "./styles";

interface IProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomNavLink = ({ children, to }: IProps) => {
  const isActive = useMatch(to);
  return (
    <StyledNavLink $isActive={isActive} to={to}>
      {children}
    </StyledNavLink>
  );
};
