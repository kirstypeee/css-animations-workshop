import { ButtonHover } from "./buttonHover";
import { ButtonHoverDramatic } from "./buttonHoverDramatic";
import { ButtonHoverRaised } from "./buttonHoverRaised";
import { ButtonRippleSimple } from "./buttonRippleSimple";
import type { Meta } from "@storybook/react";

const meta: Meta = {
  title: "Components/Button",
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
};

export const ButtonHoverEffect = () => {
  return <ButtonHover />;
};

export const ButtonHoverRaisedEffect = () => {
  return <ButtonHoverRaised />;
};

export const ButtonHoverDramaticEffect = () => {
  return <ButtonHoverDramatic />;
};

export const ButtonRippleSimpleEffect = () => {
  return <ButtonRippleSimple />;
};

export default meta;
