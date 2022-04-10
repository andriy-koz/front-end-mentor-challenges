import { useRef, useState } from 'react';
import styles from './Form.module.css';
import Button from './Button/Button';
import Input from './Input/Input';

const Form = props => {
  const [invalidInput, setInvalidInput] = useState({
    name: true,
    lastName: true,
    email: true,
    pass: true,
  });

  const inputNameRef = useRef();
  const inputLastNameRef = useRef();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const inputDataFiller = (inputValue, inputName) => {
    inputValue.length <= 0
      ? setInvalidInput(prevState => {
          return { ...prevState, [inputName]: false };
        })
      : setInvalidInput(prevState => {
          return { ...prevState, [inputName]: true };
        });
  };

  const submitHandler = event => {
    event.preventDefault();
    inputDataFiller(inputNameRef.current.value, 'name');
    inputDataFiller(inputLastNameRef.current.value, 'lastName');
    !validateEmail(inputEmailRef.current.value)
      ? setInvalidInput(prevState => {
          return { ...prevState, email: false };
        })
      : setInvalidInput(prevState => {
          return { ...prevState, email: true };
        });
    inputDataFiller(inputPasswordRef.current.value, 'pass');
    props.onClick(
      inputNameRef.current.value,
      inputLastNameRef.current.value,
      inputEmailRef.current.value,
      inputPasswordRef.current.value
    );
  };

  return (
    <form className={styles['form']}>
      <Input
        placeholder='First Name'
        inputRef={inputNameRef}
        invalidInputValue={invalidInput.name}
        type='text'
        message='First Name can not be empty'
      />
      <Input
        placeholder='Last Name'
        inputRef={inputLastNameRef}
        invalidInputValue={invalidInput.lastName}
        type='text'
        message='Last Name can not be empty'
      />
      <Input
        placeholder='Email'
        inputRef={inputEmailRef}
        invalidInputValue={invalidInput.email}
        type='email'
        message='Looks like this is not an email'
      />
      <Input
        placeholder='Password'
        inputRef={inputPasswordRef}
        invalidInputValue={invalidInput.pass}
        type='password'
        message='Password can not be empty'
      />
      <Button onClick={submitHandler} />
    </form>
  );
};

export default Form;
