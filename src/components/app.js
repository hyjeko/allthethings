//v({process.env.npm_package_version}
import React, { useState } from "react";
import {
  Grommet,
  Box,
  Heading,
  Paragraph,
  TextInput,
  Button,
  Text
} from "grommet";

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

export function App() {
  const [isCompareMode, setCompareMode] = useState(false);
  const [thingsArray, setThingsArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const lessThan3Things = thingsArray.length < 3;

  const onChange = event => {
    setInputValue(event.target.value);
  };

  const onKeyDown = event => {
    if (event.which === 13) {
      addThing();
    }
  };

  const onModeChangeClick = _event => {
    setCompareMode(!isCompareMode);
  };

  const addThing = () => {
    if (inputValue.trim() !== "") {
      setThingsArray([...thingsArray, inputValue]);
      setInputValue("");
    }
  };

  const renderInputMode = () => {
    return (
      <>
        <Paragraph textAlign="center">
          {"Let's prioritize! Start by adding a handful of things below."}
        </Paragraph>
        <Box {...textInputBoxProps}>
          <TextInput
            placeholder="Add a thing..."
            size="medium"
            value={inputValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <Button label="+Add" onClick={addThing} margin="small" />
        </Box>
        <Box {...listBoxProps}>
          <Paragraph color="dark-5">
            {lessThan3Things &&
              `Add ${3 - thingsArray.length} more things to compare`}
          </Paragraph>
          {thingsArray.map((thing, index) => {
            return <Thing key={index} text={thing} />;
          })}
          {!lessThan3Things && (
            <Button
              primary
              label="Compare"
              margin="small"
              onClick={onModeChangeClick}
            />
          )}
        </Box>
      </>
    );
  };

  const renderCompareMode = () => {
    return (
      <>
        <Heading level="3">{"Compare Mode!"}</Heading>
        <Button
          primary
          label="Go back to Input Mode"
          onClick={onModeChangeClick}
        />
      </>
    );
  };

  return (
    <Grommet theme={theme}>
      <Box {...boxProps}>
        <Heading level={1}>{"All The Things"}</Heading>
        {isCompareMode ? renderCompareMode() : renderInputMode()}
      </Box>
    </Grommet>
  );
}

function Thing(props) {
  return (
    <Box
      border={{ color: "dark-1", size: "small" }}
      margin="xsmall"
      pad="small"
      width="medium"
    >
      <Text>{props.text}</Text>
    </Box>
  );
}
