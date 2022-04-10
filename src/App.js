import './App.scss';
import ReviewsSection from './ReviewsSection';
import StarsSection from './StarsSection';
import TextSection from './TextSection';

function App() {
  const siteData = {
    textTitle: '10,000+ of our \n users love our \n products.',
    textParagraph:
      'We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.',
    ratedFiveStarsText: 'Rated 5 Stars in',
    ratedFiveStarsVariables: ['Reviews', 'Report Guru', 'BestTech'],
    reviewersNames: ['Colton Smith', 'Irene Roberts', 'Anne Wallace'],
    verifiedBuyer: 'Verified Buyer',
    reviewersReviews: [
      '" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "',
      '" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "',
      '" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "',
    ],
  };
  return (
    <div className='App'>
      <TextSection
        title={siteData.textTitle}
        paragraph={siteData.textParagraph}
      />
      <StarsSection
        text={siteData.ratedFiveStarsText}
        variables={siteData.ratedFiveStarsVariables}
      />
      <ReviewsSection
        authors={siteData.reviewersNames}
        subtitle={siteData.verifiedBuyer}
        reviews={siteData.reviewersReviews}
      />
    </div>
  );
}

export default App;
