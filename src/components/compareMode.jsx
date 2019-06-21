import React, { useState } from "react";
import { Heading, Button, Paragraph, Box } from "grommet";

import { ThingButton } from "./thingButton";

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

export function CompareMode(props) {
  const [selectedThing, setSelectedThing] = useState(null);
  const { onModeChangeClick, thingsArray } = props;

  const onSelect = event => {
    setSelectedThing(event.target.id);
  };

  const isSelected = id => {
    return id === selectedThing;
  };

  return (
    <>
      <Paragraph textAlign="center">{"Let the prioritizing begin!"}</Paragraph>
      <Box {...compareHeadingBoxProps}>
        <Heading level="3">{"Which thing is more important?"}</Heading>
      </Box>
      <Box {...compareBoxProps}>
        <ThingButton
          isSelected={isSelected}
          onSelect={onSelect}
          thing={thingsArray[0]}
        />
        <ThingButton
          isSelected={isSelected}
          onSelect={onSelect}
          thing={thingsArray[1]}
        />
      </Box>
      <Box pad="small" direction="row" gap="medium">
        <Button label="Oops" onClick={onModeChangeClick} />
        <Button primary label="Next" onClick={() => {}} />
      </Box>
    </>
  );
}
