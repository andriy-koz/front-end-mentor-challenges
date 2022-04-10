import styles from './GreenBtn.module.css';

const GreenBtn = props => {
  const clickHandler = () => {
    !props.small && props.onClick();
    props.small && props.onClickSm();
  };
  return (
    <button
      onClick={clickHandler}
      className={`${styles.greenBtn} ${
        !props.small ? styles.greenBtnMd : styles.greenBtnSm
      }`}>
      {props.btnContent}
    </button>
  );
};

export default GreenBtn;
