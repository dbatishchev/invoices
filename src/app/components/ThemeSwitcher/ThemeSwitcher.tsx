import React from 'react';
import styles from './ThemeSwitcher.module.css';
import { ReactComponent as Moon } from '../../icons/moon.svg';

type ThemeSwitcherProps = {

};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const handleClick = () => {
    if (document.body.classList.contains('theme--bright')) {
      document.body.classList.remove('theme--bright');
      document.body.classList.add('theme--dark');
    } else {
      document.body.classList.remove('theme--dark');
      document.body.classList.add('theme--bright');
    }
  };

  return (
    <button type="button" className={styles.themeSwitcher} onClick={handleClick}>
      <Moon />
      <span className="visually-hidden">Switch theme</span>
    </button>
  );
};

export default ThemeSwitcher;
