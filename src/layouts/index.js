import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content="Personal playing cards collection of Juweez" />
      <meta
        name="keywords"
        content="playing cards, decks, bicycle, the ellusionist, theory 11, dan & dave"
      />
      <title>Playing cards collection | Juweez</title>
      <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400|Libre+Franklin:500" rel="stylesheet" />
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      <link rel="mask-icon" href="safari-pinned-tab.svg" color="#1b243e" />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="Playing Cards Collection" />
      <meta name="application-name" content="Playing Cards Collection" />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="theme-color" content="#1b243e" />
    </Helmet>
    <div>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: null,
};

export default TemplateWrapper;
