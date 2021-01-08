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
      <p>{"Let's prioritize! Start by adding a handful of things below."}</p>
      <div>
        <input
          placeholder="Add a thing..."
          value={inputValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button onClick={addThing}>+Add</button>
      </div>
      {isDuplicate && <p>Oops! You can't add the same thing twice.</p>}
      <div>
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
