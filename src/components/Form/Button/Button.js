import styles from './Button.module.css';

const Button = props => {
  return (
    <>
      <button onClick={props.onClick} className={styles['button']}>
        CLAIM YOUR FREE TRIAL
      </button>
      <p className={styles['terms']}>
        By clicking the button, you are agreeing to our{' '}
        <span>Terms and Services</span>
      </p>
    </>
  );
};

export default Button;
