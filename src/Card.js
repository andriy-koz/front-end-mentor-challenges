import './Card.scss';
import TitleInfo from './TitleInfo';
import Plan from './Plan';
import CtaButtons from './CtaButtons';
import heroImg from './images/illustration-hero.svg';

const Card = props => {
  return (
    <div className='card' id='card'>
      <img src={heroImg} className='image' alt='hero'></img>
      <TitleInfo title={props.data.title} info={props.data.info} />
      <Plan
        title={props.data.planTitle}
        price={props.data.planPrice}
        button={props.data.planButton}
      />
      <CtaButtons
        btnPayment={props.data.buttonOk}
        btnCancel={props.data.buttonCancel}
      />
    </div>
  );
};

export default Card;
