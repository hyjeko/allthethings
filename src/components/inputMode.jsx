//library
import React from 'react';

//custom components
import { Thing } from './thing';

export function InputMode(props) {
  const {
    inputValue,
    thingsArray,
    addThing,
    deleteThing,
    swapThing,
    onChange,
    onKeyDown,
    onModeChangeClick,
    isDuplicate
  } = props;

  const lessThan3Things = thingsArray.length < 3;

  return (
    <>
      <p class="py-5">Let's prioritize! Start by adding a handful of things below.</p>
      <div class="container py-5">
        <div class="flex justify-center space-x-5">
          <input
            class="border p-3"
            placeholder="Add a thing..."
            value={inputValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <button class="border rounded-3xl px-7" onClick={addThing}>+Add</button>
        </div>
      </div>
      {isDuplicate && <p>Oops! You can't add the same thing twice.</p>}
      <div class="container py-5">
        <p>
          {lessThan3Things &&
            `Add ${3 - thingsArray.length} more things to compare`}
        </p>
        {thingsArray.map((thing, index) => {
          return (
            <Thing
              deleteThing={deleteThing}
              swapThing={swapThing}
              thingIndex={index}
              thingPriority={index + 1}
              key={thing + index}
              text={thing}
            />
          );
        })}
        {!lessThan3Things && (
          <button onClick={onModeChangeClick}>Compare</button>
        )}
      </div>
    </>
  );
}
