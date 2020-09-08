import React from 'react';

const Toggle = ({ checked, onChange }) => (
  <span>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
