import StarsComponent from './StarsComponent';
import './StarsSection.scss';

const StarsSection = props => {
  return (
    <div className='StarsSection'>
      <StarsComponent text={props.text} variable={props.variables[0]} />
      <div className='mg-left-md'>
        <StarsComponent text={props.text} variable={props.variables[1]} />
      </div>
      <div className='mg-left-lg'>
        <StarsComponent text={props.text} variable={props.variables[2]} />
      </div>
    </div>
  );
};

export default StarsSection;
