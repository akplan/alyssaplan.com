import useDarkMode from 'use-dark-mode';

const DarkModeStatus = () => {
  const { value } = useDarkMode(false);
  return value;
};

export default DarkModeStatus;
