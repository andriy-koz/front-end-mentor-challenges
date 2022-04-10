import { useState } from 'react';
import styles from './BookBtn.module.css';

const BookBtn = () => {
  let [bookMarked, setBookMarked] = useState(false);

  const bookClickHandler = () => {
    !bookMarked ? setBookMarked(true) : setBookMarked(false);
  };
  return (
    <button
      className={`${bookMarked ? styles.markedBtn : styles.markBtn} ${
        styles.bookBtn
      }`}
      onClick={bookClickHandler}>
      <div
        className={`${bookMarked ? styles.markedIcon : styles.markIcon} ${
          styles.bookIcon
        }`}></div>
      {!bookMarked ? 'Bookmark' : 'Bookmarked'}
    </button>
  );
};

export default BookBtn;
