import React, { Component } from 'react';
import TitleBar from '../../components/TitleBar/';
import Cards from '../../components/Cards/';
import Carousel from '../../components/Carousel/';

class Home extends Component {
  render() {
    return (
      <div>
        <TitleBar></TitleBar>

        <Carousel></Carousel>

        <Cards></Cards>
      </div>
    );
  }
}
export default Home;
