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
          <button class="border-2 rounded-3xl px-7 border-purple-400" 
          onClick={addThing}>+Add</button>
        </div>
      </div>
      {isDuplicate && <p class="text-red-500">Oops! You can't add the same thing twice.</p>}
      <p>
          {lessThan3Things &&
            `Add ${3 - thingsArray.length} more things to compare`}
      </p>
      <div class="container py-5 space-y-2">
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
      </div>
      {!lessThan3Things && (
        <button class="border rounded-3xl px-6 py-2 border-purple-600 bg-purple-600 text-white" 
        onClick={onModeChangeClick}>Compare</button>
      )}
    </>
  );
}
