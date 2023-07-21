import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";
import { theme } from "./theming/defaultTheme";

const AppStyles = styled.div`
  font-family: ${theme.font.family};
`;

const App: React.FC = () => {
  WebFont.load({
    google: {
      families: theme.font.family.split(","),
    },
  });
  return <AppStyles />;
};

export default App;
