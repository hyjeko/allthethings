import React from 'react';

export function App() {
  return <div>Hello World</div>;
}

// //Libraries
// import React, { useState, useEffect } from "react";
// import { Grommet, Box, Heading } from "grommet";

// //Custom Components
// import { InputMode } from "./inputMode";
// import { CompareMode } from "./compareMode";

// //Theme
// const theme = {
//   global: {
//     font: {
//       family: "Roboto",
//       size: "14px",
//       height: "20px"
//     }
//   }
// };

// //Box Container Props
// const boxProps = {
//   pad: "small",
//   a11yTitle: "Main Container",
//   align: "center"
// };

// //Root App Component
// export function App() {
//   const thingsFromStorage = localStorage.getItem("thingsArray");
//   const initialThings = thingsFromStorage ? thingsFromStorage.split(",") : [];

//   const [isCompareMode, setCompareMode] = useState(false);
//   const [thingsArray, setThingsArray] = useState(initialThings);
//   const [inputValue, setInputValue] = useState("");
//   const [isDuplicate, setDuplicateError] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("thingsArray", thingsArray);
//   }, [thingsArray]);

//   const onChange = event => {
//     setInputValue(event.target.value);
//   };

//   const onKeyDown = event => {
//     if (event.which === 13) {
//       addThing();
//     }
//   };

//   const onModeChangeClick = _event => {
//     setCompareMode(!isCompareMode);
//   };

//   const addThing = () => {
//     const trimmedInput = inputValue.trim();
//     if (trimmedInput !== "") {
//       if (!thingsArray.includes(trimmedInput)) {
//         setThingsArray([...thingsArray, trimmedInput]);
//         setInputValue("");
//         setDuplicateError(false);
//       }
//       if (thingsArray.includes(trimmedInput)) {
//         setDuplicateError(true);
//       }
//     }
//   };

//   const swapThing = (sourceIndex, destinationIndex) => {
//     const sourceThing = thingsArray[sourceIndex];
//     const destinationThing = thingsArray[destinationIndex];
//     const newThingsArray = [...thingsArray];
//     newThingsArray[sourceIndex] = destinationThing;
//     newThingsArray[destinationIndex] = sourceThing;
//     setThingsArray(newThingsArray);
//   }

//   const deleteThing = (_event, index) => {
//     const thing = thingsArray[index];
//     if (thing) {
//       const newThingsArray = [...thingsArray];
//       delete newThingsArray[index];
//       const updatedThingsArray = newThingsArray.filter(things => things);
//       setThingsArray(updatedThingsArray);
//     }
//   };

//   return (
//     <Grommet theme={theme}>
//       <Box {...boxProps}>
//         <Heading level={1}>{"All The Things"}</Heading>
//         {isCompareMode ? (
//           <CompareMode
//             onModeChangeClick={onModeChangeClick}
//             thingsArray={thingsArray}
//             setThingsArray={setThingsArray}
//             setCompareMode={setCompareMode}
//           />
//         ) : (
//           <InputMode
//             inputValue={inputValue}
//             thingsArray={thingsArray}
//             addThing={addThing}
//             deleteThing={deleteThing}
//             swapThing={swapThing}
//             onChange={onChange}
//             onKeyDown={onKeyDown}
//             onModeChangeClick={onModeChangeClick}
//             isDuplicate={isDuplicate}
//           />
//         )}
//       </Box>
//     </Grommet>
//   );
// }
