import React from "react";
import { Box, Text } from "grommet";

export function Thing(props) {
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
