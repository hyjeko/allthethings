import React from "react";
import { Heading, Button, Paragraph, Box } from "grommet";

const compareHeadingBoxProps = {
  margin: {
    top: "medium"
  },
  align: "center",
  width: "medium",
  border: {
    color: "brand",
    size: "small",
    side: "top"
  }
};

const compareBoxProps = {
  margin: "medium",
  align: "center",
  width: "large",
  height: "small",
  direction: "row"
};

const thingBoxProps = {
  margin: "medium",
  align: "center",
  justify: "center",
  width: "medium",
  fill: "vertical",
  alignContent: "center"
};

export function CompareMode(props) {
  const { onModeChangeClick } = props;

  return (
    <>
      <Paragraph textAlign="center">{"Let the prioritizing begin!"}</Paragraph>
      <Box {...compareHeadingBoxProps}>
        <Heading level="3">{"Which thing is more important?"}</Heading>
      </Box>
      <Box {...compareBoxProps}>
        <Box {...thingBoxProps}>
          <Button fill label="Example Text" />
        </Box>
        <Box {...thingBoxProps}>
          <Button fill label="Example Text" />
        </Box>
      </Box>
      <Box pad="small" direction="row" gap="medium">
        <Button label="Oops" onClick={onModeChangeClick} />
        <Button primary label="Next" onClick={() => {}} />
      </Box>
    </>
  );
}
