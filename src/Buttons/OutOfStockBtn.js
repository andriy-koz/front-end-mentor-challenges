import styles from './OutOfStockBtn.module.css';

const OutOfStockBtn = props => {
  return <button className={styles.outOfStockBtn}>{props.btnContent}</button>;
};

export default OutOfStockBtn;
