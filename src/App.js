import { useState } from 'react';
import './App.css';
import Hero from './Hero/Hero';
import Card from './Card/Card';
import CardContent1 from './Card/CardContent1/CardContent1';
import CardContent2 from './Card/CardContent2/CardContent2';
import CardContent3 from './Card/CardContent3/CardContent3';
import Modal from './Modal/Modal';
import CompletedModal from './Modal/CompletedModal';

function App() {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [completedModalOpen, setCompletedModalOpen] = useState(false);

  const onSelectHandler = event => {
    const selectedId = event.target.parentElement.id;
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
    if (selectedId === '1') setSelected1(true);
    if (selectedId === '2') setSelected2(true);
    if (selectedId === '3') setSelected3(true);
  };

  const closeModal = () => {
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
    setModalOpen(false);
  };

  const openModalHandler = () => {
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
    window.scrollTo(0, 250);
    setModalOpen(true);
  };

  const cardSelectedHandler = id => {
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
    if (id === '1') setSelected1(true);
    if (id === '2') setSelected2(true);
    if (id === '3') setSelected3(true);
    setModalOpen(true);
    window.scrollTo(0, 250);
  };

  const completedModalClose = () => {
    setCompletedModalOpen(false);
  };

  const completedModalHandler = () => {
    setModalOpen(false);
    setCompletedModalOpen(true);
    window.scrollTo(0, 250);
  };

  return (
    <div id='App'>
      {completedModalOpen && <CompletedModal onClick={completedModalClose} />}
      {modalOpen && (
        <Modal
          selected1={selected1}
          selected2={selected2}
          selected3={selected3}
          onSelect={onSelectHandler}
          onClose={closeModal}
          fixed={false}
          onClickContinue={completedModalHandler}
        />
      )}
      <Hero />
      <div className='margin-top'>
        <Card className='padding-top positionAbs'>
          <CardContent1 openModal={openModalHandler} />
        </Card>
      </div>
      <div className='margin-top-sm'>
        <Card>
          <CardContent2 />
        </Card>
      </div>
      <div className='margin-top-sm'>
        <Card>
          <CardContent3 selectedHandler={cardSelectedHandler} />
        </Card>
      </div>
    </div>
  );
}

export default App;
