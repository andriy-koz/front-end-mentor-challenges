import './TitleInfo.scss';

const TitleInfo = props => {
  return (
    <div className='info'>
      <h2 className='info__title'>{props.title}</h2>
      <p className='info__info'>{props.info}</p>
    </div>
  );
};

export default TitleInfo;
