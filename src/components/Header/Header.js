import styles from './Header.module.css';
import iconMoon from '../../images/icon-moon.svg';
import iconSun from '../../images/icon-sun.svg';

const Header = props => {
  const submitHandler = e => {
    if (e.key === 'Enter') {
      props.inputValue(e.target.value);
      e.target.value = '';
    }
  };
  return (
    <div onClick={props.unselect} className={styles.header}>
      <div className={styles['logo-icon']}>
        <h1>TODO</h1>
        <img
          src={props.theme === 'light' ? iconMoon : iconSun}
          onClick={props.switchTheme}
          alt='Select theme icon'
        />
      </div>
      <div className={styles.input}>
        <div className={styles['input-circle']} />
        <input
          onKeyPress={submitHandler}
          type='text'
          placeholder='Create a new todo...'></input>
      </div>
    </div>
  );
};

export default Header;
