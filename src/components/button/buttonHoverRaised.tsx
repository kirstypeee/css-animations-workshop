import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

const StyledButton = styled.button`
  padding: 8px 24px;
  align-items: center;
  display: flex;
  border: 1px solid ${theme.colors.primary.main};
  background: ${theme.colors.primary.main};
  color: ${theme.colors.paper};
  border-radius: 24px;
  box-shadow: ${theme.elevation[1].boxShadow};
  cursor: pointer;
  transition-property: border, background-color, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  &:hover {
    border: 1px solid ${theme.colors.primary.dark};
    background: ${theme.colors.primary.dark};
    box-shadow: ${theme.elevation[2].boxShadow};
  }
`;

export const ButtonHoverRaised: React.FC = () => {
  return <StyledButton>BUTTON</StyledButton>;
};
