import styles from './Hero.module.css';
import NavBar from './NavBar';
import { useState } from 'react';

const Hero = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuHandler = () => {
    if (!openMenu) {
      setOpenMenu(true);
      return;
    }
    if (openMenu) {
      setOpenMenu(false);
      return;
    }
  };
  return (
    <div className={styles.hero}>
      <div className={openMenu ? styles.overlay : undefined}>
        <NavBar onClick={openMenuHandler} openMenu={openMenu} />
      </div>
    </div>
  );
};

export default Hero;
