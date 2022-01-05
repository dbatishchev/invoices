import React from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Container from '../Container/Container';

type LayoutProps = {
  children: React.ReactNode,
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={styles.layout}>
    <Toolbar className={styles.toolbar} />
    <main className={styles.content}>
      <Container>
        {children}
      </Container>
    </main>
  </div>
);

export default Layout;
