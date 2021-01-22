import React from 'react';

export function ThingButton(props) {
  const { isSelected, thing, onSelect } = props;
  return (
    <div class="border rounded-xl border-purple-600">
      <button class="h-72 w-96" id={thing} onClick={onSelect}>
        {thing}
      </button>
    </div>
  );
}
