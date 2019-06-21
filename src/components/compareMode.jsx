import React from "react";
import { Heading, Button } from "grommet";

export function CompareMode(props) {
  const { onModeChangeClick } = props;

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
}
