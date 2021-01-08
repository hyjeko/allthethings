import React from 'react';

export function ThingButton(props) {
  const { isSelected, thing, onSelect } = props;
  return (
    <div>
      <button id={thing} onClick={onSelect}>
        {thing}
      </button>
    </div>
  );
}
