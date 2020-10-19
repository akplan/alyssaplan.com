import React from 'react';

import Toggle from './toggle';
import useDarkMode from 'use-dark-mode';
import '../css/font-awesome-4.7.0/css/font-awesome.min.css'

import displayModeToggleStyles from './styles/displayModeToggle.module.scss'

const DisplayModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button className={`${displayModeToggleStyles.button} ${darkMode.value ? displayModeToggleStyles.darkMode: displayModeToggleStyles.lightMode}`} type="button" onClick={darkMode.disable}>
      <i class="fa fa-2x fa-sun-o" aria-hidden="true"></i>
      </button>
        {darkMode.value === false && <i class="fa fa-2x fa-toggle-off" aria-hidden="true"></i>}
        {darkMode.value === true && <i class="fa fa-2x fa-toggle-on" aria-hidden="true"></i>}
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button className={`${displayModeToggleStyles.button} ${darkMode.value ? displayModeToggleStyles.darkMode: displayModeToggleStyles.lightMode}`} type="button" onClick={darkMode.enable}>
      <i class="fa fa-2x fa-moon-o" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default DisplayModeToggle;
