import React from "react";
import { Box, Text, Button } from "grommet";
import { FormClose } from "grommet-icons"

export function Thing(props) {

  const { deleteThing, thingIndex, thingPriority } = props;

  const onClick = event => {
    deleteThing(event , thingIndex)
  }

  return (
      <Box
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
