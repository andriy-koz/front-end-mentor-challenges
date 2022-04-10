import './Plan.scss';
import iconMusic from './images/icon-music.svg';

const Plan = props => {
  return (
    <div className='plan'>
      <img className='plan__icon' src={iconMusic} alt='Icon music' />
      <div className='plan__container'>
        <p className='plan__title'>{props.title}</p>
        <p className='plan__price'>{props.price}</p>
      </div>
      <a href='#card' className='plan__change'>
        {props.button}
      </a>
    </div>
  );
};

export default Plan;
