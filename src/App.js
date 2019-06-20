import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
     const SVG = ({ style = {}, fill = '#fff', width = '100%', className = '', height = '100%', viewBox = '0 0 32 32', }) => <svg width={width} style={style} height={height} viewBox={viewBox} className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" > <path d="0 10 10 20" fill={fill} /> </svg>;
        </header>
           
      </div>
    );
  }
}

export default App;
