import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PasswordInput from './components/passwordInput';
import IsValid from './components/isValid';

class App extends Component {
  render() {
    return (
      <div>
      <PasswordInput />
      <IsValid />
      </div>
    );
  }
}

export default App;
