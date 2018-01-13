import React, { Component } from 'react';
import Fuse from 'fuse.js';

import Card from '../components/Card';
import Grid from '../components/Grid';
import Header from '../components/Header';
import Overlay from '../components/Overlay';
import Search from '../components/Search';

class IndexPage extends Component {
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
    fetch('https://juweez.co.uk/api/cards.json')
      .then(response => response.json())
      .then((data) => {
        const sortedCards = data.data.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });

        this.setState({
          allCards: data.data,
          searchResults: sortedCards,
        });
      }).catch(err => console.error('Cannot retrieve card data.', err)); // eslint-disable-line no-console
  }

  openOverlay(evt, item) {
    evt.preventDefault();

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
        <Search inputRef={(el) => { this.inputElement = el; }} searchCards={this.searchCards} />
        <Grid>{cards}</Grid>
        <Overlay
          open={this.state.isOverlayOpen}
          closeOverlay={this.closeOverlay}
          item={this.state.selectedCard}
        />
      </div>
    );
  }
}

export default IndexPage;
