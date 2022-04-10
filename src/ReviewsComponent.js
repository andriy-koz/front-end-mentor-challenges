import './ReviewsComponent.scss';

const ReviewsComponent = props => {
  return (
    <div className='ReviewsComponent'>
      <div className='ReviewsHeader'>
        <img className='ReviewsHeader__img' src={props.image} alt='Author' />
        <div className='ReviewsHeader__author'>
          <p>
            {props.author}
            <span>{props.subtitle}</span>
          </p>
        </div>
      </div>
      <p className='ReviewText'>{props.review}</p>
    </div>
  );
};

export default ReviewsComponent;
