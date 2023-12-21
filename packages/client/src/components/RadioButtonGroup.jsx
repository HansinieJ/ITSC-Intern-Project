import React, { useState } from 'react';
import RadioButton from './RadioButton';

export const RadioGroup = ({ Btn1Value, Btn2Value, groupName, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (value) => {
    setSelectedValue(value);
    onSelect(groupName, value);
  };

  return (
    <>
      {/* <div>
        <h3>{groupName} Group</h3>
        {options.map(({ value}) => (
          <RadioButton
            key={value}
            value={value}
            label={label}
            onSelect={handleSelect}
            isSelected={selectedValue === value}
          />
        ))}
      </div> */}

      <div>
        <RadioButton 
        label="Yes"
        groupName={groupName} 
        onChanged=
        onChecked=
        value={Btn1Value} />


      </div>
    </>
  );groupName, onChanged, onChecked, value
};
