import styles from './TryItBox.module.css';

const TryItBox = () => {
  return (
    <p className={styles['try-it']}>
      <span>Try it free 7 days</span>&nbsp;then $20/mo. thereafter
    </p>
  );
};

export default TryItBox;
