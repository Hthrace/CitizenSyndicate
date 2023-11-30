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
        <LogoContainer to={"/citizenSyndicate"}>
          <Logo src={communityLogo} />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to={"locate"}>Locate</NavLink>
          <NavLink to={"update"}>Update</NavLink>
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
