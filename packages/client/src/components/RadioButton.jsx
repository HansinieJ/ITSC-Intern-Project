import React from 'react';

export const RadioButton = ({ groupName, label, onChanged, onChecked, value }) =>
  <>
    <label>
      <input
        type="radio"
        name={groupName}
        value={value}
        checked={onChecked}
        onChange={onChanged}
      />
      {label}
    </label>
  </>;
