import styles from './Input.module.css';

const Input = props => {
  return (
    <>
      <div className={styles['input-container']}>
        <input
          placeholder={props.placeholder}
          className={`${styles['input']} ${
            !props.invalidInputValue ? styles['red-border'] : undefined
          }`}
          type={props.type}
          ref={props.inputRef}></input>
        {!props.invalidInputValue && (
          <div className={styles['error-sign']}></div>
        )}
      </div>
      {!props.invalidInputValue && (
        <p className={styles['error-message']}>{props.message}</p>
      )}
    </>
  );
};

export default Input;
