import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

const CoverCircle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid ${theme.colors.borderHover};
  background-color: ${theme.colors.borderFocus};
  z-index: 1;
`;

const HiddenCircle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${theme.colors.paper};
`;

const RevealWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const HingeCircleReveal: React.FC = () => {
  return (
    <RevealWrapper>
      <HiddenCircle>
        <CoverCircle id="cover" />
      </HiddenCircle>
    </RevealWrapper>
  );
};
