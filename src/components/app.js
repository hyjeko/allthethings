//v({process.env.npm_package_version}
import React from "react";
import { Grommet, Box, Heading, Paragraph } from "grommet";

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

const boxProps = {
  pad: "small",
  a11yTitle: "Main Container",
  align: "center",
  alignContent: "start"
};

const h1Props = {
  level: 1
};

const paragraphProps = {
  textAlign: "center"
};

export function App() {
  return (
    <Grommet theme={theme}>
      <Box {...boxProps}>
        <Heading {...h1Props}> All The Things</Heading>
        <Paragraph {...paragraphProps}>
          Let's prioritize! Start by adding a handful of things below.
        </Paragraph>
      </Box>
    </Grommet>
  );
}
