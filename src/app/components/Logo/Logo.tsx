import React from 'react';
import logo from './logo.svg';
import styles from './Logo.module.css';

type LogoProps = {
  className: string,
};

const Logo: React.FC<LogoProps> = ({ className = '' }) => (
  <div className={`${styles.logo} ${className}`}>
    <img
      className={styles.img}
      src={logo}
      alt=""
    />
  </div>
);

export default Logo;
