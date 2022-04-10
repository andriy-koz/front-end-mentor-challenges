import './App.scss';
import Card from './Card.js';

function App() {
  const componentData = {
    title: 'Order Summary',
    info: 'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!',
    planTitle: 'Annual Plan',
    planPrice: '$59.99/year',
    planButton: 'Change',
    buttonOk: 'Proceed to Payment',
    buttonCancel: 'Cancel Order',
  };

  return (
    <div>
      <Card data={componentData} />
    </div>
  );
}

export default App;
