import React from 'react';
import styles from './Toolbar.module.css';
import Avatar from '../Avatar/Avatar';
import Separator from '../Separator/Separator';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import useMediaQuery from '../../hooks/useMediaQuery';

type ToolbarProps = {
  className: string,
};

const Toolbar: React.FC<ToolbarProps> = ({ className = '' }) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <aside className={`${styles.toolbar} ${className}`}>
      <Logo className={styles.logo} />
      <ThemeSwitcher />
      <Separator vertical={isMobile} />
      <div className={styles.user}>
        <Avatar />
      </div>
    </aside>
  );
};

export default Toolbar;
