import './App.scss';
import Text from './Text';
import HeaderImage from './HeaderImage';

function App() {
  const cardData = {
    title1: 'Get ',
    title2: 'insights ',
    title3: 'that help your business grow.',
    text: 'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.',
    statsNumbers: ['10k+', '314', '12m+'],
    statsWords: ['companies', 'templates', 'queries'],
  };
  return (
    <div className='app'>
      <Text data={cardData} />
      <HeaderImage />
    </div>
  );
}

export default App;
