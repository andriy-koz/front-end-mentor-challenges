import './CtaButtons.scss';

const CtaButtons = props => {
  return (
    <div className='cta'>
      <a className='cta-payment' href='#card'>
        {props.btnPayment}
      </a>
      <a className='cta-cancel' href='#card'>
        {props.btnCancel}
      </a>
    </div>
  );
};

export default CtaButtons;
