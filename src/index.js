import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/base.css';
import Header from './components/Header/';

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
