import React from 'react';

const Toggle = ({ checked, onChange }) => (
  <span>
        <label className="hidden" htmlFor="darkModeCheck" style={ {display: 'none'}}>Dark Mode Enabled</label>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="darkModeCheck"
      style={{opacity: 0}}
    />
  </span>
);

export default Toggle;
