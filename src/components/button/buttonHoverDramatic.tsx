import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

const StyledButton = styled.button`
  padding: 8px 24px;
  align-items: center;
  display: flex;
  border: 1px solid ${theme.colors.primary.main};
  background: ${theme.colors.paper};
  color: ${theme.colors.primary.main};
  border-radius: 24px;
  cursor: pointer;
  transition-property: color, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  &:hover {
  background: ${theme.colors.primary.main};
  color: ${theme.colors.paper};
  }
`;

export const ButtonHoverDramatic: React.FC = () => {
  return <StyledButton>BUTTON</StyledButton>;
};
