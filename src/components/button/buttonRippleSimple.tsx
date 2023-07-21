import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

const StyledButton = styled.button`
  padding: 8px 24px;
  align-items: center;
  display: flex;
  border: 1px solid ${theme.colors.primary.main};
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.paper};
  border-radius: 24px;
  cursor: pointer;
  transition-property: background;
  transition-duration: 0.8s;
  background-position: center;
  transition: background 0.8s;
  &:hover {
    background: ${theme.colors.primary.light}
      radial-gradient(circle, transparent 1%, ${theme.colors.primary.light} 1%)
      center/15000%;
  }
  &:active {
    background-color: ${theme.colors.primary.lightest};
    background-size: 100%;
    transition: background 0s;
  }
`;

export const ButtonRippleSimple: React.FC = () => {
  return <StyledButton>BUTTON</StyledButton>;
};
