//library
import React from "react";
import { Paragraph, TextInput, Box, Button, FormField } from "grommet";

//custom components
import { Thing } from "./thing";

const textInputBoxProps = {
  align: "center",
  width: "medium",
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

export function InputMode(props) {
  const {
    inputValue,
    thingsArray,
    addThing,
    deleteThing,
    onChange,
    onKeyDown,
    onModeChangeClick,
  } = props;

  const lessThan3Things = thingsArray.length < 3;
  const isDuplicate = true;

  return (
    <>
      <Paragraph textAlign="center">
        {"Let's prioritize! Start by adding a handful of things below."}
      </Paragraph>
      <Box {...textInputBoxProps}>
        <Box {...textInputBoxProps} direction="row">
          <TextInput
            placeholder="Add a thing..."
            size="medium"
            value={inputValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <Button label="+Add" onClick={addThing} margin="small" />
        </Box>
        <Paragraph color="status-error">
        {isDuplicate && `Oops! You can't add the same thing twice.`}
        </Paragraph>
      </Box>
      <Box {...listBoxProps}>
        <Paragraph color="dark-5">
          {lessThan3Things &&
            `Add ${3 - thingsArray.length} more things to compare`}
        </Paragraph>
        {thingsArray.map((thing, index) => {
          return <Thing deleteThing={deleteThing} thingIndex={index} key={thing + index} text={thing} />;
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
}
