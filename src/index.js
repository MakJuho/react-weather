import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //현재 같은 폴더 안에 App.js파일
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// root DOM을 찾고 App을 찾아 실행

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
