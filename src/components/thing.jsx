import React from "react";
import { Box, Text, Button } from "grommet";
import { FormSubtract } from "grommet-icons"

export function Thing(props) {

  const { deleteThing, thingIndex } = props;

  const onClick = event => {
    deleteThing(event , thingIndex)
  }

  return (
      <Box
        border={{ color: "dark-1", size: "small" }}
        margin="xsmall"
        pad="small"
        width="medium"
        direction="row"
      >
        <Box
        justify="center"
        width="medium"
        >
          <Text>{props.text}</Text>
        </Box>
        <Button primary icon={<FormSubtract size="small" />} onClick={onClick}></Button>
      </Box>
        
  );
}
