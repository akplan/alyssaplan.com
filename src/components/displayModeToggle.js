import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DisplayModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button type="button" onClick={darkMode.disable}>
        light
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        dark
      </button>
    </div>
  );
};

export default DisplayModeToggle;
