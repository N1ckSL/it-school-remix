import styled from "styled-components";
import { COLORS } from "../consts/colors";
import { LAYOUT } from "../consts/layout";

export const NavItem = styled.p<{ active?: boolean; disabled?: boolean }>`
  cursor: pointer;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1;
  border-radius: 2rem;
  padding: 1rem 2.4rem;
  transition: all 0.2s ease-in;
  color: ${({ disabled }) => (disabled ? COLORS.vistaWhite50 : "white")};
  background-color: ${({ active }) =>
    active ? COLORS.vistaWhite10 : "transparent"};

  @media (max-width: ${LAYOUT.BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const NavItemDropdown = styled.div<{
  active?: boolean;
  disabled?: boolean;
}>`
  cursor: default;
  position: relative;
  display: flex;
  justify-content: baseline;
  border-radius: 2rem;
  padding: 1rem 2.4rem;
  transition: all 0.2s ease-in;
  & > p {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1;
    color: inherit;
    padding-right: 2.8rem;
  }
  &:hover {
    & > div:last-child {
      display: flex;
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const NavItemDropdownContainer = styled.div<{
  headerTransparent?: boolean;
}>`
  display: flex;
  visibility: hidden;
  opacity: 0;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 4px;
  width: max-content;
  transition: all 0.2s ease-in;
  background-color: ${({ headerTransparent }) =>
    headerTransparent ? "transparent" : COLORS.oxfordBlue100};
  filter: drop-shadow(0 -10px 20px rgba(0, 0, 0, 0.2));
  padding: 1.2rem 0;
`;
