import React from 'react';
import styles from './Avatar.module.css';

type AvatarProps = {

};

const Avatar: React.FC<AvatarProps> = () => (
  <img className={styles.avatar} src={`${process.env.PUBLIC_URL}/image-avatar.jpg`} alt="" />
);

export default Avatar;
