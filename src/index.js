import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fuse from 'fuse.js';

import './stylesheets/base.css';
import grid from './stylesheets/grid.scss';
import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCards: [],
      searchResults: [],
      selectedCard: undefined,
      isOverlayOpen: false,
    };

    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.searchCards = this.searchCards.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('http://juweez.co.uk/api/cards.json')
      .then(response => response.json())
      .then((data) => {
        const sortedCards = data.data.sort(function(a, b){
          if(a.title < b.title) return -1;
          if(a.title > b.title) return 1;
          return 0;
        });

        this.setState({
          allCards: data.data,
          searchResults: sortedCards,
        });
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

  searchCards() {
    const searchTerm = this.inputElement.value;

    const options = {
      keys: ['title'],
      threshold: 0.5,
      shouldSort: true,
    };

    const fuse = new Fuse(this.state.allCards, options);

    if (searchTerm === '') {
      this.setState({
        searchResults: this.state.allCards,
      });

    } else {
      this.setState({
        searchResults: fuse.search(searchTerm),
      });
    }

  }

  render() {
    const cards = this.state.searchResults.map(item => (
      <Card item={item} key={item.id} openOverlay={this.openOverlay} />
    ));

    return (
      <div>
        <Header />
        <Search inputRef={el => this.inputElement = el} searchCards={this.searchCards} />
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
