import styles from './NavBar.module.css';
import logo from '../images/logo.svg';

const NavBar = props => {
  return (
    <div className={styles.navBar}>
      <img src={logo} alt='logo' />
      <div
        className={`${props.openMenu ? styles.navOpen : undefined} ${
          styles.navigation
        }`}>
        <a onClick={props.onClick} href='#root'>
          About
        </a>
        <a onClick={props.onClick} className={styles.centerLink} href='#root'>
          Discover
        </a>
        <a onClick={props.onClick} href='#root'>
          Get Started
        </a>
      </div>
      <div
        className={!props.openMenu ? styles.menu : styles.closeMenu}
        onClick={props.onClick}></div>
    </div>
  );
};

export default NavBar;
