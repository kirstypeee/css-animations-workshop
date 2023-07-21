import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

interface TextInputProps {
  label: React.ReactNode;
  id: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.shape.borderRadius}px;
  padding: ${theme.shape.padding}px;
  height: ${theme.shape.inputHeight}px;
  width: calc(100% - 2 * ${theme.shape.padding}px);
  background: ${theme.colors.paper};
  outline: none;
`;
const StyledLabel = styled.label`
`;

export const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputField>
      <StyledInput
        id={id}
        type="text"
        onChange={handleChange}
        value={value}
        data-testid={id}
      />
      <StyledLabel htmlFor={id}>
        {label}
      </StyledLabel>
    </InputField>
  );
};
