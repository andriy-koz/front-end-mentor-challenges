import styles from './TextInfo.module.css';

const TextInfo = props => {
  return (
    <div className={styles.textInfo}>
      <h2>{props.title}</h2>
      <p>{props.subTitle}</p>
    </div>
  );
};

export default TextInfo;
