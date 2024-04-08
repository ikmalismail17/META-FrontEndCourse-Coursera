import React from 'react';
import logo from './assets/logo.svg';
import './assets/styles/App.css';
import TestProps from './TestProps';
import PropChildDiv from './PropChildDiv';
import GuessingGame from './GuessingGame';

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

  const resetText = () => {
    setTitle('');
    setWish('');
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <div id='changetext'>
          <Edit />
        </div>
        <div id='changetext1'>
          <Edit1 />
        </div>
        <PropChildDiv>
          <TestProps title={title} wish={wish} handleResetText={resetText} passObj={myObject}/>
          <button onClick={resetText} style={{ color: "blue" }}>Reset From Parent</button>
          <button onClick={changeText} style={{ color: "red" }}>Click Here</button>
        </PropChildDiv>
        <PropChildDiv>
          <GuessingGame />
        </PropChildDiv>
      </header>
    </div>
  );
}

export default App;
