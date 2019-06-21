import React from "react";
import { Box, Button } from "grommet";

const thingBoxProps = {
  margin: "medium",
  align: "center",
  justify: "center",
  width: "medium",
  fill: "vertical",
  alignContent: "center"
};

export function ThingButton(props) {
  const { isSelected, thing, onSelect } = props;
  return (
    <Box {...thingBoxProps}>
      <Button
        fill
        color={isSelected(thing) ? "accent-1" : "brand"}
        label={thing}
        id={thing}
        onClick={onSelect}
      />
    </Box>
  );
}
