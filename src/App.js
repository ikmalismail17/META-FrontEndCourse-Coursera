import React from 'react';
import logo from './assets/logo.svg';
import './assets/styles/App.css';
import TestProps from './components/TestProps';
import PropChildDiv from './components/PropChildDiv';
import GuessingGame from './components/GuessingGame';
import TryUseReducer from './components/TryUseReducer';
import MealsProvider from './hooks/TryCreateContext';
import TryUseContext from './components/TryUseContext';
import { Routes, Route, Link } from 'react-router-dom';
import mdylama from './assets/images/Daerah-Yan-1339x500.png';
import mdybaru from './assets/images/YAN KEDAH 1.png';
import ReactVideoPlayer from './components/ReactVideoPlayer';
import SimpleCalculator from './components/SimpleCalculator';
import DessertsList from './components/DessertList';
import ControlledForm from './components/ControlledForm';
import TryThemeContext from './components/TryThemeContext';

// create basic list
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

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
  
  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav'>
          <Link to="/" className='nav-item' style={{ paddingRight: '10px', textDecoration: 'none' }}>Home</Link>
          <Link to="/image" className='nav-item' style={{ paddingRight: '10px', textDecoration: 'none' }}>Image</Link>
          <Link to="/video" className='nav-item' style={{ paddingRight: '10px', textDecoration: 'none' }}>Video/Audio</Link>
          <Link to="/calculator" className='nav-item' style={{ paddingRight: '10px', textDecoration: 'none' }}>Calculator</Link>
          <Link to="/form" className='nav-item' style={{ paddingRight: '10px', textDecoration: 'none' }}>Form</Link>
          <Link to="/theme" className='nav-item' style={{ paddingRight: '10px', textDecoration: 'none' }}>Theme</Link>
        </nav>
        <img src={logo} className="App-logo" alt="logo"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image" element={<Image />} />
          <Route path="/video" element={<ReactVideoPlayer />} />
          <Route path="/calculator" element={<SimpleCalculator />} />
          <Route path="/form" element={<ControlledForm />} />
          <Route path="/theme" element={<TryThemeContext />} />
        </Routes>
      </header>
    </div>
  );
}

const Home = () => {
  const [text, setText] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [wish, setWish] = React.useState();
  const [toggle, setToggle] = React.useState(false);

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

  //toggle web title using useEffect
  const toggleWebTitle = () => {
      setToggle(!toggle);
   };

  React.useEffect(()=> {
    document.title = toggle ? 'Try Use Effect' : 'React App ';
  }, [toggle])

  return (
    <div>
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
        <PropChildDiv>
          {/* Basic List Items */}
          <DessertsList data={desserts} />
        </PropChildDiv>
        <PropChildDiv>
          {/* useEffect */}
          <p>Using useEffect on web title</p>
          <button onClick={toggleWebTitle}>Try Use Effect</button>
        </PropChildDiv>
    </div>
  );
};

const Image = () => {
  return (
    <div>
      <div style={{ margin: '5px', textAlign:'center' }}>
        <div>
         <img src={mdylama} alt="MDY lama" height={300}/>
         <p>MDY lama</p>
        </div>
        <div>
          <img src={mdybaru} alt="MDY baru" height={300}/>
          <p>MDY baru</p>
        </div>
        <div>
          <img src={require('./assets/images/YAN KEDAH 2.png')} alt="MDY baru 2" height={300}/>
          <p>MDY baru 2</p>
        </div>
      </div>
    </div>
  );
};

export default App;
