import styles from './List.module.css';
import iconCross from '../../images/icon-cross.svg';
import checkIcon from '../../images/icon-check.svg';

const List = props => {
  let selected = '';
  props.value === props.isSelected
    ? (selected = styles.selected)
    : (selected = '');

  return (
    <li
      className={`${styles.list} ${selected} ${
        props.isCompleted ? styles.completed : ''
      }`}>
      <div className={styles['check-circle']} onClick={props.circleOnClick}>
        <div
          className={styles['inner-check-circle']}
          onClick={props.circleOnClick}
        />
        <img
          className={styles['icon-check']}
          src={checkIcon}
          alt='Check icon'
        />
      </div>
      <p onClick={props.onClick}>{props.value}</p>
      <img
        className={styles['icon-cross']}
        src={iconCross}
        onClick={props.deleteItem}
        alt='Cross icon'
      />
    </li>
  );
};

export default List;
