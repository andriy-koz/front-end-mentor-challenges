import ReviewsComponent from './ReviewsComponent';
import './ReviewsSection.scss';
import colton from './images/image-colton.jpg';
import irene from './images/image-irene.jpg';
import anne from './images/image-anne.jpg';

const ReviewsSection = props => {
  return (
    <div className='ReviewsSection'>
      <ReviewsComponent
        image={colton}
        subtitle={props.subtitle}
        author={props.authors[0]}
        review={props.reviews[0]}
      />
      <div className='margin-top-sm'>
        <ReviewsComponent
          image={irene}
          subtitle={props.subtitle}
          author={props.authors[1]}
          review={props.reviews[1]}
        />
      </div>
      <div className='margin-top-lg'>
        <ReviewsComponent
          image={anne}
          subtitle={props.subtitle}
          author={props.authors[2]}
          review={props.reviews[2]}
        />
      </div>
    </div>
  );
};

export default ReviewsSection;
