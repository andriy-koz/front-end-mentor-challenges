import styles from './CardContent1.module.css';
import GreenBtn from '../../Buttons/GreenBtn';
import BookBtn from '../../Buttons/BookBtn';
import logoMaster from '../../images/logo-mastercraft.svg';
import { useState } from 'react';

const CardContent1 = props => {
  const [bookedM, setBookedM] = useState(false);

  const clickHandler = () => {
    props.openModal();
  };

  const bookMHandler = () => {
    !bookedM ? setBookedM(true) : setBookedM(false);
  };

  return (
    <div className={styles.CardContent1}>
      <img src={logoMaster} alt='Logo Mastercraft'></img>
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className={styles.btnContainer}>
        <GreenBtn
          onClick={clickHandler}
          small={false}
          btnContent='Back this project'
        />
        <BookBtn />
        <div
          onClick={bookMHandler}
          className={`${styles.bookMobile} ${
            bookedM ? styles.bookedMobile : undefined
          }`}></div>
      </div>
    </div>
  );
};

export default CardContent1;
