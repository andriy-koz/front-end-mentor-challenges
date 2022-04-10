import './TextSection.scss';

const TextSection = props => {
  return (
    <div className='TextSection'>
      <p className='TextSection__title'>{props.title}</p>
      <p className='TextSection__paragraph'>{props.paragraph}</p>
    </div>
  );
};

export default TextSection;
