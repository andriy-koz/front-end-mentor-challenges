import './FiveStars.scss';
import star from './images/icon-star.svg';

const FiveStars = () => {
  return (
    <div className='FiveStars'>
      <img src={star} alt='star' />
      <img src={star} alt='star' />
      <img src={star} alt='star' />
      <img src={star} alt='star' />
      <img src={star} alt='star' />
    </div>
  );
};

export default FiveStars;
