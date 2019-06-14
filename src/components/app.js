import React from "react";
import { Grommet } from "grommet";

//theme
const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

export function App() {
  return (
    <Grommet theme={theme}>
      <h1>All The Things! v({process.env.npm_package_version})</h1>
    </Grommet>
  );
}
