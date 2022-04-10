import styles from './SmCard.module.css';
import GreenBtn from '../../../Buttons/GreenBtn';
import OutOfStockBtn from '../../../Buttons/OutOfStockBtn';

const SmCard = props => {
  const clickSmHandler = () => {
    props.selected(props.id);
  };
  return (
    <div className={styles.smCard}>
      <div className={styles.titlesContainer}>
        <h2>{props.title}</h2>
        <h3>Pledge ${props.pledgeAmount} or more</h3>
      </div>
      <p className={styles.info}>{props.info}</p>
      <div className={`${styles.titlesContainer} ${styles.marginTop}`}>
        <p className={styles.daysLeft}>
          {props.daysLeft}
          <span>left</span>
        </p>
        {!props.outOfStock ? (
          <GreenBtn
            onClickSm={clickSmHandler}
            small={true}
            btnContent='Select Reward'
          />
        ) : (
          <OutOfStockBtn btnContent='Out of stock' />
        )}
      </div>
    </div>
  );
};

export default SmCard;
