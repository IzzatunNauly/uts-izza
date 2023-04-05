import Biodata from './components/Biodata';
import Navbar from './components/Navbar';
import Footer1 from './components/Footer1';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const LeftScreen = () => (
  <div style={{ backgroundColor: '#F2F2F2', width: '50%', height: '100vh', float: 'left' }}>
    <Navbar />
    <h1>Left Screen</h1>
    <p><Biodata /></p>
    <Footer1 />
  </div>
);

const RightScreen = () => (
  <div style={{ backgroundColor: '#E6E6E6', width: '50%', height: '100vh', float: 'right' }}>
    <Navbar />
    <h1>Right Screen</h1>
    <p><Biodata /></p>
    <Footer1 />
  </div>
);

const App = () => (
  <div>
    <LeftScreen />
    <RightScreen />
  </div>
);

export default App;

// import logo from './logo.svg';
// import './App.css';
// import MyButton from './components/MyButton';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Biodata from './components/Biodata';
// import NavbarJs from './components/NavbarJs';
// import React, { useState } from 'react';

// const ScreenA = () => {
//   const cliked = () => {
//     return alert("Button dipencet");
//  }

//  const paragraf = () => {
//   return(
//     <div>
//       <h3>Mantap Banget</h3>
//       <i>Semangat 45</i>
//       <marquee>Bismillah</marquee>
//     </div>
//   )
//  }

//  const [getNavbarValue, setNavbarValue] = useState("");
//  const changeNavbarValue = () => {
//   setNavbarValue('My Contact');
//  }

// return (
//   <div className="App">
//     <header className="App-header">
//       {/* <NavbarJs /> */}
//       <Navbar />
//       <p>
//         <Biodata />
//       </p>
//       {/* {getNavbarValue}
//       <button onClick={() => changeNavbarValue()}>Ubah Navbar</button> */}
//       <MyButton cliked={cliked} />
//       <Footer paragraf={paragraf} />
//     </header>
//   </div>
// );
// };

// const ScreenB = () => {
// return (
//   <div class="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
// )
// };

// const App = () => {
//   const [currentScreen, setCurrentScreen] = useState('A');

//   const handleButtonClick = () => {
//     setCurrentScreen(currentScreen === 'A' ? 'B' : 'A');
//   };

//   return (
//     <div>
//       <div style={{ float: 'left', width: '50%', height: '100%', backgroundColor: 'lightblue' }}>
//         {currentScreen === 'A' ? <ScreenA /> : <ScreenB />}
//       </div>
//       <div style={{ float: 'right', width: '50%', height: '100%', backgroundColor: 'lightgreen' }}>
//         <button onClick={handleButtonClick}>Switch Screens</button>
//       </div>
//     </div>
//   );
// };

// export default App;
