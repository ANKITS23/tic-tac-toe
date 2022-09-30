import logo from './logo.svg';
import './App.css';
import Board from './pages/board'
import React from 'react';


export default class App extends React.Component {
  render() {
    return (

        <div className="mt-5 flex flex-col justify-center items-center">
          <Board /> 
      </div>
    );
  }
}