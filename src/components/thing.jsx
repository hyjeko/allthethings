import React from 'react';

export function Thing(props) {
  const { deleteThing, swapThing, thingIndex, thingPriority } = props;

  const onClick = (event) => {
    deleteThing(event, thingIndex);
  };

  const onDragStart = (event) => {
    event.dataTransfer.setData('text/plain', thingIndex);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    event.preventDefault();
    const sourceIndex = event.dataTransfer.getData('text/plain');
    swapThing(sourceIndex, thingIndex);
  };

  return (
    <div
      class="border border-black cursor-move mx-auto max-w-sm p-2"
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div>
        <text>{thingPriority}</text>
      </div>
      <div>
        <text>{props.text}</text>
      </div>
      <button onClick={onClick}>Remove</button>
    </div>
  );
}
