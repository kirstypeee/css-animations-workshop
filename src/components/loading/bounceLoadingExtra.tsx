import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

const BALL_COUNT = 5;

const Row = styled.div`
  display: flex;
  padding: 2rem;
  width: calc(12px * ${BALL_COUNT} + 6px * ${BALL_COUNT});
  align-items: center;
  justify-content: space-between;
`;

const StyledLoaderBall = styled.div<{ delay: number }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${theme.colors.primary.main};
`;

export const BounceLoadingExtra: React.FC = () => {
  const render = () => {
    const balls = [];
    for (let i = 0; i < BALL_COUNT; i++) {
      balls.push(<StyledLoaderBall delay={i * (1 / (BALL_COUNT + 1))} />);
    }
    return balls;
  };
  return <Row>{render()}</Row>;
};
