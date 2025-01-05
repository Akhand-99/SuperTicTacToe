import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "./css/styles1.css";

function App() {
  return (
    <>
      {/* <h1>Super Tic-Tac-Toe</h1> */}
      <div className="main-grid-container">
        <div className="main-grid-cell border-right border-bottom">
          <div className="small-grid-container">
            <div className="small-grid-cell border-right border-bottom">
              1.1
            </div>
            <div className="small-grid-cell border-right border-bottom">
              1.2
            </div>
            <div className="small-grid-cell border-bottom">1.3</div>
            <div className="small-grid-cell border-right border-bottom">
              1.4
            </div>
            <div className="small-grid-cell border-right border-bottom">
              1.5
            </div>
            <div className="small-grid-cell border-bottom">1.6</div>
            <div className="small-grid-cell border-right">1.7</div>
            <div className="small-grid-cell border-right">1.8</div>
            <div className="small-grid-cell">1.9</div>
            <div className="overlay-small-board">X</div>
          </div>
        </div>
        <div className="main-grid-cell border-right border-bottom">2</div>
        <div className="main-grid-cell border-bottom">3</div>
        <div className="main-grid-cell border-right border-bottom">4</div>
        <div className="main-grid-cell border-right border-bottom">
          <div className="small-grid-container">
            <div className="small-grid-cell border-right border-bottom">
              1.1
            </div>
            <div className="small-grid-cell border-right border-bottom">
              1.2
            </div>
            <div className="small-grid-cell border-bottom">1.3</div>
            <div className="small-grid-cell border-right border-bottom">
              1.4
            </div>
            <div className="small-grid-cell border-right border-bottom">
              1.5
            </div>
            <div className="small-grid-cell border-bottom">1.6</div>
            <div className="small-grid-cell border-right">1.7</div>
            <div className="small-grid-cell border-right">1.8</div>
            <div className="small-grid-cell">1.9</div>
            <div className="overlay-small-board">O</div>
          </div>
        </div>
        <div className="main-grid-cell border-bottom">6</div>
        <div className="main-grid-cell border-right">7</div>
        <div className="main-grid-cell border-right">8</div>
        <div className="main-grid-cell">9</div>
      </div>
    </>
  );
}

export default App;
