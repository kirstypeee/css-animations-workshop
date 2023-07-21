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
  background-position: center;
`;

export const ButtonRippleSimple: React.FC = () => {
  return <StyledButton>BUTTON</StyledButton>;
};
