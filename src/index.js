import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PasswordInput from './components/passwordInput';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PasswordInput />, document.getElementById('root'));
registerServiceWorker();
