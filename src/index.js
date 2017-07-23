import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/base.css';
import grid from './stylesheets/grid.css';
import Card from './components/Card';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('http://juweez.co.uk/api/cards.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({ cards: data.data });
      }).catch(err => console.error('Cannot retrieve card data.', err));
  }

  render() {
    const cards = this.state.cards.map(item => (
      <Card item={item} key={item.id} />
    ));

    return (
      <div>
        <Header />
        <div className={grid.container}>{cards}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
