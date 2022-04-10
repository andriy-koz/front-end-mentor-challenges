import styles from './SelectedModalAddOn.module.css';
import SelectedModalMobile from './SelectedModalMobile';

const SelectedModalAddOn = props => {
  return (
    <div className={styles.modalAddOn}>
      {props.id !== '1' && (
        <div className={styles.pledgeContainer}>
          <p className={styles.enterPledge}>Enter your pledge</p>
          <p className={styles.dollarSign}>$</p>
          {props.id === '2' && (
            <input
              className={`${styles.input} ${styles.btnAndInputStyles}`}
              type='number'
              min='25'
              placeholder='25'></input>
          )}
          {props.id === '3' && (
            <input
              className={`${styles.input} ${styles.btnAndInputStyles}`}
              type='number'
              min='75'
              placeholder='75'></input>
          )}
        </div>
      )}
      <button
        onClick={props.onClickContinue}
        className={`${styles.btnContinue} ${styles.btnAndInputStyles}`}>
        Continue
      </button>
      <SelectedModalMobile onClick={props.onClickContinue} id={props.id} />
    </div>
  );
};

export default SelectedModalAddOn;
