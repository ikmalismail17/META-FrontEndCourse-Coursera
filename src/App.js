import React from 'react';
import logo from './assets/logo.svg';
import './assets/styles/App.css';
import TestProps from './components/TestProps';
import PropChildDiv from './components/PropChildDiv';
import GuessingGame from './components/GuessingGame';
import TryUseReducer from './components/TryUseReducer';
import MealsProvider from './hooks/TryCreateContext';
import TryUseContext from './components/TryUseContext';

const myObject = {
  name: 'John',
  age: 25,
  city: 'New York'
};

function App() {
  return (
    <AppContent />
  );
}

function Edit(){
  return (
    <>
    <p>
          Edit <code>src/App.js</code> and save to reload.
    </p>
    </>
  );
}

function Edit1(){
  return (
    <>
    <p>
      Edit LOL <code>src/App.js</code> and save to win a vaganza price.
    </p>
    </>
  );
}

function AppContent(){
  const [text, setText] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [wish, setWish] = React.useState();

  // Change the text
  const changeText = () => {
    setText(!text);
    switch(text){
      case true:
        document.getElementById('changetext').style.display = 'none';
        document.getElementById('changetext1').style.display = 'block';
        break;
      default:
        document.getElementById('changetext').style.display = 'block';
        document.getElementById('changetext1').style.display = 'none';
    }
    setTitle('World!');
    setWish('Happy Eid Mubarak!');
  }

  // Reset the text
  const resetText = () => {
    setTitle('');
    setWish('');
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        {/* Change the text based on 'Click Here Button'*/}
        <div id='changetext'>
          <Edit />
        </div>
        <div id='changetext1'>
          <Edit1 />
        </div>

        {/* Using Children Props */}
        <PropChildDiv>
          {/* Passing props to the child component */}
          <TestProps title={title} wish={wish} handleResetText={resetText} passObj={myObject}/>
          <button onClick={resetText} style={{ color: "blue" }}>Reset From Parent</button>
          <button onClick={changeText} style={{ color: "red" }}>Click Here</button>
        </PropChildDiv>
        <PropChildDiv>
          {/* Guessing game */}
          <GuessingGame />
        </PropChildDiv>
        <PropChildDiv>
          {/* useReducer */}
          <TryUseReducer />
        </PropChildDiv>
        <PropChildDiv>
          {/* createContext MealsProvider */}
          <MealsProvider>
            {/* useContext TryUseContext */}
            <TryUseContext />
          </MealsProvider>
        </PropChildDiv>
      </header>
    </div>
  );
}

export default App;
