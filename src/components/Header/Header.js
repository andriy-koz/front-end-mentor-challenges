import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles['header']}>
      <h1 className={styles['title']}>Learn to code by watching others</h1>
      <p className={styles['intro']}>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
};

export default Header;
