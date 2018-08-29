import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IsValid from './components/isValid';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
