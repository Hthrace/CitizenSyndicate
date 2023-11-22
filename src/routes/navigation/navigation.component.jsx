import { Outlet } from "react-router-dom";
import communityLogo from "../../assets/logos/MadeByTheCommunity_Black.png";
import { Fragment } from "react";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
  Logo,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <Logo src={communityLogo} />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to={"/categories"}>Locate</NavLink>
          <NavLink to={"/updateinfo"}>Update</NavLink>
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
