import styles from './Footer.module.css';

const Footer = props => {
  return (
    <div className={styles.card}>
      <button
        className={props.selected === 1 ? styles.selected : ''}
        onClick={props.showAll}>
        All
      </button>
      <button
        className={props.selected === 2 ? styles.selected : ''}
        onClick={props.showActive}>
        Active
      </button>
      <button
        className={props.selected === 3 ? styles.selected : ''}
        onClick={props.showCompleted}>
        Completed
      </button>
    </div>
  );
};

export default Footer;
