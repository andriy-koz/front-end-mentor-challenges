import './Text.scss';

const Text = props => {
  return (
    <div className='text'>
      <h2 className='title'>
        {props.data.title1}
        <span className='title-accent'>{props.data.title2}</span>
        {props.data.title3}
      </h2>
      <p className='paragraph'>{props.data.text}</p>
      <div className='stats'>
        <p className='stats-numbers lowercase'>
          {props.data.statsNumbers[0]}
          <span className='stats-words uppercase'>
            {props.data.statsWords[0]}
          </span>
        </p>
        <p className='stats-numbers'>
          {props.data.statsNumbers[1]}
          <span className='stats-words'>{props.data.statsWords[1]}</span>
        </p>
        <p className='stats-numbers'>
          {props.data.statsNumbers[2]}
          <span className='stats-words'>{props.data.statsWords[2]}</span>
        </p>
      </div>
    </div>
  );
};

export default Text;
