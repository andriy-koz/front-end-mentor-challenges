import ReactDOM from 'react-dom';
import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import TryItBox from './components/TryItBox/TryItBox';
import Modal from './components/Modal/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [inputData, setInputData] = useState({});

  const openModalHandler = (name, lastName, email, pass) => {
    setInputData({
      inputName: name,
      inputLastName: lastName,
      inputEmail: email,
      inputPass: pass,
    });
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const ModalPortal = ReactDOM.createPortal(
    <Modal
      isOpen={openModal}
      closeModal={closeModalHandler}
      name={inputData.inputName}
      lastName={inputData.inputLastName}
      email={inputData.inputEmail}
      pass={inputData.inputPass}
    />,
    document.getElementById('modal-root')
  );

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <TryItBox />
        <Form onClick={openModalHandler} />
        {ModalPortal}
      </div>
    </div>
  );
}

export default App;
