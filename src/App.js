import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PasswordInput from './components/passwordInput';
import IsValid from './components/isValid';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      password: "password"
    };
  }
  render() {
    return (
      <div>
      <PasswordInput />
      <IsValid password={this.state.password}  />
      </div>
    );
  }
}