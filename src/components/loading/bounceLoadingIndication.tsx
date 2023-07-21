import styled, { keyframes } from "styled-components";

import React from "react";
import { theme } from "../../theming/defaultTheme";

const BALL_COUNT = 4;

const bounceAnimation = keyframes`
   0%, 100% {transform: translateY(0);} 
   50% {transform: translateY(-20px);} 
`;

const Row = styled.div`
  display: flex;
  padding: 2rem;
  width: calc(24px * ${BALL_COUNT} + 7px * ${BALL_COUNT});
  align-items: center;
  justify-content: space-between;
`;

const StyledLoaderBall = styled.div<{ color: string; delay: number }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  animation-name: ${bounceAnimation};
  animation-duration: 1s;
  animation-delay: ${({ delay }) => delay}s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
`;

export const BounceLoading: React.FC = () => {
  const colors = [
    theme.colors.primary.dark,
    theme.colors.primary.main,
    theme.colors.primary.light,
    theme.colors.primary.lightest,
  ];
  const render = () => {
    const balls = [];
    for (let i = 0; i < BALL_COUNT; i++) {
      balls.push(
        <StyledLoaderBall color={colors[i]} delay={i * (1 / BALL_COUNT)} />
      );
    }
    return balls;
  };
  return <Row>{render()}</Row>;
};
