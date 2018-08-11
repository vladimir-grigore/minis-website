import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './pages/App';
import Contact from './pages/Contact';
import Showcase from './pages/Showcase';

ReactDOM.render(
  <Router>
    <div>
    <Route exact path="/" component={App}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/showcase" component={Showcase}/>
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
