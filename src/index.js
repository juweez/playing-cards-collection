import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/base.css';
import grid from './stylesheets/grid.scss';
import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      selectedCard: undefined,
      isOverlayOpen: false,
    };

    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
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

  openOverlay(item) {
    this.setState({
      isOverlayOpen: true,
      selectedCard: item,
    });
  }

  closeOverlay() {
    this.setState({
      isOverlayOpen: false,
    });
  }

  render() {
    const sortedCards = this.state.cards.sort(function(a, b){
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    });
    const cards = sortedCards.map(item => (
      <Card item={item} key={item.id} openOverlay={this.openOverlay} />
    ));

    return (
      <div>
        <Header />
        <div className={grid.container}>{cards}</div>
        <Overlay
          open={this.state.isOverlayOpen}
          closeOverlay={this.closeOverlay}
          item={this.state.selectedCard}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
