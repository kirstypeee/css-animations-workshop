import { TextInput as Input } from "./textInput";
import type { Meta } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: Input,
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
};

export const TextInput = () => {
  const [email, setEmail] = useState("");
  return <Input label="Email" id="email" value={email} onChange={setEmail} />;
};

export default meta;
