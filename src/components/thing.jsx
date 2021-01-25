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
      class="flex justify-between items-center space-x-3 border border-black rounded-xl cursor-move mx-auto max-w-sm p-2"
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div class="p-2 rounded border-purple-600 bg-purple-600 text-white">
        <text>{thingPriority}</text>
      </div>
      <div>
        <text>{props.text}</text>
      </div>
      <button class="p-2" onClick={onClick}>
        x
      </button>
    </div>
  );
}
