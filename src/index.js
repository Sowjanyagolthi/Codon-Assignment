import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom' 
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calculator from './components/Calculator';

const routing=(
    <Router>
        <Route path="/" component={App}/>
        <Route path="/components/Calculator" component={Calculator}/>
    </Router>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <App />
  );
























