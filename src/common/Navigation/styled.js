import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1360px;
  display: grid;
  grid-template-columns: auto minmax(205px, 432px);
  margin: auto;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const StyledNavigation = styled.nav`
  width: 100%;
  gap: 12px;
  padding: 22px 16px;
  background-color: ${({ theme }) => theme.colors.woodSmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    margin-top: 14px;
  }
`;
export const StyledLogo = styled(Logo)`
  width: 220px;
  height: auto;
  border-top: 23px;
  border-left: 550px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 150px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    height: 50px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  max-width: 1218px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  line-height: 21px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.woodSmoke};
  text-transform: uppercase;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 12px;
    padding: 8px 12px;
  }

  &:hover {
    filter: brightness(90%);
  }

  &.active {
    outline: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 24px;
  }
`;
