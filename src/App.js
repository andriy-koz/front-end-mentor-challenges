import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import useLocalStorage from 'use-local-storage';

function App() {
  const [value, setValue] = useState([]);
  const [showedValues, setShowedValues] = useState([]);
  const [numberItems, setNumberItems] = useState(0);
  const [selectedItem, setSelectedItem] = useState('');
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );
  const [footerBtn, setFooterBtn] = useState(1);
  const [mobileDisplay, setMobileDisplay] = useState(
    window.innerWidth < 376 ? true : false
  );

  window.addEventListener('resize', e => {
    if (e.target.innerWidth > 376) {
      setMobileDisplay(false);
    }
    if (e.target.innerWidth < 376) {
      setMobileDisplay(true);
    }
  });

  const clickHandler = e => {
    let targetEl = '';
    e.target.localName !== 'li'
      ? (targetEl = e.target.parentElement)
      : (targetEl = e.target);
    setSelectedItem(targetEl.textContent);
  };

  const onSubmitHandler = enteredValue => {
    let repeatedValue = false;
    value.forEach(item => {
      if (item.value === enteredValue) repeatedValue = true;
    });
    if (!repeatedValue && enteredValue.trim().length > 0) {
      const id = Math.random().toFixed(5);
      const newValue = { id: id, value: enteredValue, completed: false };
      setValue(prevValue => [newValue, ...prevValue]);
      setShowedValues(prevValue => [newValue, ...prevValue]);
    } else {
      alert('Please enter another task');
    }
  };

  const unselectHandler = () => {
    setSelectedItem('');
  };

  useEffect(() => {
    const numberCompletedItems = value.filter(item => !item.completed);
    setNumberItems(numberCompletedItems.length);
  }, [value]);

  const deleteItemHandler = () => {
    const newValue = value.filter(item => item.value !== selectedItem);
    setValue(newValue);
    setShowedValues(newValue);
  };

  const circleOnClickHandler = e => {
    let clickedValue = '';
    if (e.target.parentElement.localName === 'div') {
      clickedValue = e.target.parentElement.parentElement.textContent;
    } else {
      clickedValue = e.target.parentElement.textContent;
    }
    const newValue = value.map(item => {
      if (item.completed === false && clickedValue === item.value) {
        return { ...item, completed: true };
      }
      if (item.completed === true && clickedValue === item.value) {
        return { ...item, completed: false };
      }
      return item;
    });
    setValue(newValue);
    setShowedValues(newValue);
    setSelectedItem('');
  };

  const clearCompletedHandler = () => {
    const newValue = value.filter(item => !item.completed);
    setValue(newValue);
    setShowedValues(newValue);
  };

  const showAllHandler = () => {
    setShowedValues(value);
    setFooterBtn(1);
  };

  const showActiveHandler = () => {
    const values = value.filter(item => !item.completed);
    setShowedValues(values);
    setFooterBtn(2);
  };

  const showCompletedHandler = () => {
    const values = value.filter(item => item.completed);
    setShowedValues(values);
    setFooterBtn(3);
  };

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className='App' data-theme={theme}>
      <div className='container'>
        <Header
          inputValue={onSubmitHandler}
          unselect={unselectHandler}
          theme={theme}
          switchTheme={switchTheme}
        />
        <Main
          circleOnClick={circleOnClickHandler}
          deleteItem={deleteItemHandler}
          onItemClick={clickHandler}
          selectedItem={selectedItem}
          itemsList={showedValues}
          numberItems={numberItems}
          onClearClick={clearCompletedHandler}
          footerBtn={footerBtn}
          mobileDisplay={mobileDisplay}
          showAllHandler={showAllHandler}
          showActiveHandler={showActiveHandler}
          showCompletedHandler={showCompletedHandler}
        />
        {mobileDisplay && (
          <Footer
            showAll={showAllHandler}
            showActive={showActiveHandler}
            showCompleted={showCompletedHandler}
            selected={footerBtn}
          />
        )}
      </div>
    </div>
  );
}

export default App;
