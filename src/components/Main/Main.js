import styles from './Main.module.css';
import { useEffect, useState } from 'react';
import List from './List';
import Footer from '../Footer/Footer';

const Main = props => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    setItemsList(
      props.itemsList.map(item => {
        return (
          <List
            circleOnClick={props.circleOnClick}
            deleteItem={props.deleteItem}
            isSelected={props.selectedItem}
            onClick={props.onItemClick}
            value={item.value}
            key={item.id}
            isCompleted={item.completed}
          />
        );
      })
    );
  }, [
    props.itemsList,
    props.selectedItem,
    props.deletedItem,
    props.circleOnClick,
    props.deleteItem,
    props.onItemClick,
  ]);

  return (
    <>
      <div className={styles.card}>
        <ul className={styles.list}>{itemsList}</ul>
        <div className={styles['list-footer-mobile']}>
          <p className={styles['items-left']}>{props.numberItems} items left</p>

          {!props.mobileDisplay && (
            <Footer
              showAll={props.showAllHandler}
              showActive={props.showActiveHandler}
              showCompleted={props.showCompletedHandler}
              selected={props.footerBtn}
            />
          )}

          <button onClick={props.onClearClick} className={styles['btn-clear']}>
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
