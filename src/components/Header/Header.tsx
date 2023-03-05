import { LogoIcon } from "assets";
import { CustomNavLink } from "components";
import { ROUTE } from "router";
import { StyledHeader, StyledLink } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to={ROUTE.MAIN}>
        <LogoIcon />
      </StyledLink>
      <CustomNavLink to={ROUTE.MAIN}>HOME</CustomNavLink>
      <CustomNavLink to={ROUTE.FRIENDS}>FRIENDS</CustomNavLink>
      <CustomNavLink to={ROUTE.SERVICE}>SERVICE</CustomNavLink>
      <CustomNavLink to={ROUTE.CONTACTS}>CONTACTS</CustomNavLink>
    </StyledHeader>
  );
};
