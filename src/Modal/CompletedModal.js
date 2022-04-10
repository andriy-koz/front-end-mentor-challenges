import styles from './CompletedModal.module.css';

const CompletedModal = props => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClick}></div>
      <div className={styles.completedModal}>
        <div className={styles.iconCheck}></div>
        <h2 className={styles.title}>Thanks for your support!</h2>
        <p className={styles.message}>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button onClick={props.onClick} className={styles.btnGotIt}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default CompletedModal;
