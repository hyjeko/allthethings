import React, { useState, useEffect } from "react";
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
  //Props from App.js
  const {
    onModeChangeClick,
    thingsArray,
    setThingsArray,
    setCompareMode
  } = props;
  //UI currently selected (Not its index but its value)
  const [selectedThing, setSelectedThing] = useState(null);

  //Well ordered subset of things (Used to build the sorted elements)
  const [thingsSubset, setThingsSubset] = useState([thingsArray[0]]);
  //Left-hand index of current comparison (Should always be a subset element index)
  const [leftCompareIndex, setLeftNewCompareIndex] = useState(0);
  //Right-hand index of current comparison (Should always be a new element index from original array)
  const [rightCompareIndex, setRightNewCompareIndex] = useState(1);

  //When the lengths match, it's all sorted!
  useEffect(() => {
    if (thingsSubset.length === thingsArray.length) {
      setThingsArray(thingsSubset);
      setCompareMode(false);
    }
  });

  //(UI) Update the currently selected thing
  const onSelect = event => {
    setSelectedThing(event.target.id);
  };

  //(UI) Determine if selected
  const isSelected = id => {
    return id === selectedThing;
  };

  //Event handler for clicking "Next"
  //Holds logic for what to display & save upon click
  const nextClick = _event => {
    if (thingsArray.indexOf(selectedThing) === rightCompareIndex) {
      //Right side selected
      const newSubset = thingsSubset;
      //Insert
      newSubset.splice(leftCompareIndex, 0, thingsArray[rightCompareIndex]);
      setThingsSubset(newSubset);
      //Update right-side index
      setRightNewCompareIndex(rightCompareIndex + 1);
      //Reset Selected
      setSelectedThing(null);
    } else {
      //Left side selected
      if (thingsSubset.indexOf(selectedThing) > -1 && thingsSubset.length > 1) {
        //Left side is already in subset, so increment the left side first
        //First see if the increment would put us out of bounds
        if (thingsSubset[leftCompareIndex + 1]) {
          setLeftNewCompareIndex(leftCompareIndex + 1);
          setSelectedThing(null);
        } else {
          //Next index is out of bounds so add to the end and reset the left index and increment the right index
          const newSubset = thingsSubset;
          //Insert
          newSubset.push(thingsArray[rightCompareIndex]);
          setThingsSubset(newSubset);
          //Update right-side index
          setRightNewCompareIndex(rightCompareIndex + 1);
          setLeftNewCompareIndex(0);
          //Reset Selected
          setSelectedThing(null);
        }
      } else {
        //Not in subset yet, so insert and increment
        const newSubset = thingsSubset;
        //Insert
        newSubset.push(thingsArray[rightCompareIndex]);
        setThingsSubset(newSubset);
        //Update right-side index
        setRightNewCompareIndex(rightCompareIndex + 1);
        //Reset Selected
        setSelectedThing(null);
      }
    }
  };

  console.log(thingsSubset);

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
          thing={thingsSubset[leftCompareIndex]}
        />
        <ThingButton
          isSelected={isSelected}
          onSelect={onSelect}
          thing={thingsArray[rightCompareIndex]}
        />
      </Box>
      <Box pad="small" direction="row" gap="medium">
        <Button label="Oops" onClick={onModeChangeClick} />
        <Button
          primary
          label="Next"
          disabled={!selectedThing}
          onClick={nextClick}
        />
      </Box>
    </>
  );
}
