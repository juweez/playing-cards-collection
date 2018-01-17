import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      allCards: this.props.data.cards.edges,
      searchResults: this.sortCards(this.props.data.cards.edges),
      selectedCard: undefined,
      isOverlayOpen: false,
    };

    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.searchCards = this.searchCards.bind(this);
    this.sortCards = this.sortCards.bind(this);
  }

  sortCards(cards) {
    this.sortedCards = cards.sort((a, b) => {
      if (a.node.title < b.node.title) return -1;
      if (a.node.title > b.node.title) return 1;
      return 0;
    });

    return this.sortedCards;
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
      keys: ['node.title'],
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
    const cards = this.state.searchResults.map(({ node }) => (
      <Card item={node} key={node.id} openOverlay={this.openOverlay} />
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

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query PageQuery {
    cards: allContentfulPlayingCards {
      edges {
        node {
          id
          title
          image {
            resolutions(height: 555, toFormat: WEBP) {
              width
              height
              src
              srcSet
            }
          }
          brand
          manufacturer
          yearOfRelease
          yearOfPurchase
          numberOfCopies
          printEditionRun
          kickstarter
          url
        }
      }
    }
  }
`;
