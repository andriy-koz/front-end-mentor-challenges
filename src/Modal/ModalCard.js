import styles from './ModalCard.module.css';

const ModalCard = props => {
  // Conditional styles declarations
  const modalCardStyles = `${styles.modalCard} ${
    !props.stock && styles.outOfStock
  } ${props.selected && styles.selectedStyle}`;
  const hoverContainer = props.stock
    ? styles.hoverContainer
    : styles.flexHelper;
  const title = !props.reward ? 'Pledge with no reward' : props.title;
  const pledge = !props.reward ? '' : `Pledge $${props.pledge} or more`;
  const daysLeft = !props.reward ? (
    ''
  ) : (
    <p className={styles.daysLeft}>
      {props.daysLeft}
      <span>left</span>
    </p>
  );
  //////////////////////////

  return (
    <div className={modalCardStyles}>
      <div className={styles.header}>
        <div id={props.id} className={hoverContainer} onClick={props.onClick}>
          <div className={styles.checkCircle}>
            <div className={styles.checkCircleInner}></div>
          </div>
          <div className={styles.titlePledge}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.pledge}>{pledge}</p>
          </div>
        </div>
        {daysLeft}
      </div>
      <p className={styles.content}>{props.content}</p>
      {!props.reward ? (
        ''
      ) : (
        <p className={styles.daysLeftMobile}>
          {props.daysLeft}
          <span>left</span>
        </p>
      )}
    </div>
  );
};

export default ModalCard;
