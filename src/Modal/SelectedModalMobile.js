import styles from './SelectedModalMobile.module.css';

const SelectedModalMobile = props => {
  return (
    <div className={styles.selectedModalMobile}>
      {props.id !== '1' && (
        <div className={styles.pledgeContainerM}>
          <p className={styles.dollarSignM}>$</p>
          {props.id === '2' && (
            <input
              className={`${styles.inputM} ${styles.btnAndInputStylesM}`}
              type='number'
              min='25'
              placeholder='25'></input>
          )}
          {props.id === '3' && (
            <input
              className={`${styles.inputM} ${styles.btnAndInputStylesM}`}
              type='number'
              min='75'
              placeholder='75'></input>
          )}
        </div>
      )}
      <button
        onClick={props.onClick}
        className={`${styles.btnContinueM} ${styles.btnAndInputStylesM}`}>
        Continue
      </button>
    </div>
  );
};

export default SelectedModalMobile;
