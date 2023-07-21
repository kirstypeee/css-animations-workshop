import { BounceLoading } from "./bounceLoadingIndication";
import { BounceLoadingExtra } from "./bounceLoadingExtra";
import type { Meta } from "@storybook/react";
import { SimpleLoading } from "./simpleLoading";

const meta: Meta = {
  title: "Components/LoadingIndicator",
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
};

export const SimpleLoadingIndicator = () => {
  return <SimpleLoading />;
};

export const BounceLoadingIndicator = () => {
  return <BounceLoading />;
};

export const BounceLoadingExtraIndicator = () => {
  return <BounceLoadingExtra />;
};

export default meta;
