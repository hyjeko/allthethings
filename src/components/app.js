//v({process.env.npm_package_version}
import React, { useState } from "react";
import { Grommet, Box, Heading, Paragraph, TextInput, Button } from "grommet";

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
  align: "center"
};

const textInputBoxProps = {
  align: "center",
  width: "medium",
  direction: "row"
};

const listBoxProps = {
  margin: "medium",
  align: "center",
  width: "medium",
  border: {
    color: "brand",
    size: "small",
    side: "top"
  }
};

const headingProps = {
  level: 1
};

const paragraphProps = {
  textAlign: "center"
};

const textInputProps = {
  placeholder: "Add a thing...",
  size: "medium"
};

export function App() {
  const [inputValue, setInputValue] = useState("");

  const onChange = event => setInputValue(event.target.value);

  return (
    <Grommet theme={theme}>
      <Box {...boxProps}>
        <Heading {...headingProps}> All The Things</Heading>
        <Paragraph {...paragraphProps}>
          Let's prioritize! Start by adding a handful of things below.
        </Paragraph>
        <Box {...textInputBoxProps}>
          <TextInput
            {...textInputProps}
            value={inputValue}
            onChange={onChange}
          />
          <Button label="+Add" onClick={() => {}} margin="small" primary />
        </Box>
        <Box {...listBoxProps}>
          <Paragraph color="dark-5">
            Add at least 3 things to start prioritizing
          </Paragraph>
        </Box>
      </Box>
    </Grommet>
  );
}
