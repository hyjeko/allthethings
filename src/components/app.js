//Libraries
import React, { useState } from "react";
import { Grommet, Box, Heading, Paragraph, TextInput, Button } from "grommet";

//Custom Components
import { InputMode } from "./inputMode";
import { CompareMode } from "./compareMode";
import { Thing } from "./thing";

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

//Box Container Props
const boxProps = {
  pad: "small",
  a11yTitle: "Main Container",
  align: "center"
};

//Root App Component
export function App() {
  const [isCompareMode, setCompareMode] = useState(false);
  const [thingsArray, setThingsArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

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
    const trimmedInput = inputValue.trim();
    if (trimmedInput !== "") {
      if (!thingsArray.includes(trimmedInput)) {
        setThingsArray([...thingsArray, trimmedInput]);
        setInputValue("");
      }
    }
  };

  const deleteThing = (_event, index) => {
    const thing = thingsArray[index];
    if (thing) {
      const newThingsArray = [...thingsArray];
      delete newThingsArray[index];
      setThingsArray(newThingsArray);
    }
  };

  return (
    <Grommet theme={theme}>
      <Box {...boxProps}>
        <Heading level={1}>{"All The Things"}</Heading>
        {isCompareMode ? (
          <CompareMode
            thingsArray={thingsArray}
            onModeChangeClick={onModeChangeClick}
          />
        ) : (
          <InputMode
            inputValue={inputValue}
            thingsArray={thingsArray}
            addThing={addThing}
            deleteThing={deleteThing}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onModeChangeClick={onModeChangeClick}
        /> 
        ) 

        }
      </Box>
    </Grommet>
  );
}
