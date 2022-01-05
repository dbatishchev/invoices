import React from 'react';
import styles from './Button.module.css';

export enum COLOR {
  primary = 'primary',
  faint = 'faint',
  dark = 'dark',
  warning = 'warning',
}

const COLOR_CLASSNAMES = {
  [COLOR.primary]: styles.primary,
  [COLOR.faint]: styles.faint,
  [COLOR.dark]: styles.dark,
  [COLOR.warning]: styles.warning,
};

type ButtonProps = {
  children: React.ReactNode,
  onClick?: () => void,
  className?: string,
  type?: 'submit' | 'button',
  color?: COLOR,
  icon?: React.ReactNode,
};

const Button: React.FC<ButtonProps> = ({
  children, onClick, className = '', type = 'button', color = COLOR.primary, icon,
}) => (
  <button
    type={type}
    className={`
      ${styles.btn}
      ${COLOR_CLASSNAMES[color]}
      ${icon ? styles.withIcon : ''} 
      ${className}
    `}
    onClick={onClick}
  >
    {icon && (
      <span className={styles.icon}>{icon}</span>
    )}
    {children}
  </button>
);

export default Button;
