import './StarsComponent.scss';
import FiveStars from './FiveStars';

const StarsComponent = props => {
  return (
    <div className='StarsComponent'>
      <FiveStars />
      <p className='StarsText'>
        {props.text} {props.variable}
      </p>
    </div>
  );
};

export default StarsComponent;
