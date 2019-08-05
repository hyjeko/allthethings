import React from "react";
import { Box, Text, Button } from "grommet";
import { FormClose } from "grommet-icons"

export function Thing(props) {

  const { deleteThing, swapThing, thingIndex, thingPriority } = props;

  const onClick = event => {
    deleteThing(event , thingIndex)
  }

  const onDragStart = event => {
    event.dataTransfer.setData('text/plain', thingIndex);
  }

  const onDragOver = event => {
    event.preventDefault();
  }

  const onDrop = event => {
    event.preventDefault();
    const sourceIndex = event.dataTransfer.getData('text/plain');
    swapThing(sourceIndex, thingIndex);
  }

  return (
      <Box
        draggable
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        border={{ color: "dark-1", size: "small" }}
        margin="xsmall"
        pad={{vertical: "small", left: "small", right: "xsmall"}}
        width="medium"
        direction="row"
      >
        <Box
        background="brand"
        justify="center"
        pad={{horizontal: "small", vertical: "xsmall"}}
        margin={{right: "small"}}>
          <Text alignSelf="center">{thingPriority}</Text>
        </Box>
        <Box
        justify="center"
        width="medium"
        >
          <Text>{props.text}</Text>
        </Box>
        <Button icon={<FormClose size="medium" />} onClick={onClick}></Button>
      </Box>
  );
}
