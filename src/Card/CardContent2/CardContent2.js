import styles from './CardContent2.module.css';
import TextInfo from './TextInfo';

const CardContent2 = () => {
  return (
    <div className={styles.cardContent2}>
      <div className={styles.infoContainer}>
        <TextInfo title='$89,914' subTitle='of $100,000 backed' />
        <div className={styles.centerOfInfo}>
          <TextInfo title='5,007' subTitle='total backers' />
        </div>
        <TextInfo title='56' subTitle='days left' />
      </div>
      <div className={styles.bar}>
        <div className={styles.barFill}></div>
      </div>
    </div>
  );
};

export default CardContent2;
