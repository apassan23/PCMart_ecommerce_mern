import React from 'react';
import Featured from './Featured';
import Carousel from './Carousel';
import Showcase from './Showcase';
import AppCarousel from './AppCarousel';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carousel />
        <Featured />
        <Showcase />
        <AppCarousel />
      </React.Fragment>
    );
  }
}

export default Home;
