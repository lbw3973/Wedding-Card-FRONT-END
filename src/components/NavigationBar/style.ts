import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  max-width: 768px;
  width: 100%;
  background-color: #f5f5dc;
  border-top: 1px solid #ccc;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 70px;

  font-size: 14px;
  z-index: 10000;

  div {
    position: relative;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: "";
      position: absolute;
      top: 15%;
      bottom: 15%;
      right: 0;
      width: 1px;
      background: #ccc;
    }

    &:last-child::after {
      display: none;
    }
  }
`;

export const NavLinkEl = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 4px 0;

  border-radius: 12px;
  transition-duration: 300ms;

  @media (hover: hover) {
    &:hover {
      background-color: #eaeadc;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  span {
    font-size: 14px;
    margin-top: 6px;
  }
`;
