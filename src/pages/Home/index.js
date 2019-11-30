import React, { Component } from 'react';
import TitleBar from '../../Components/TitleBar/';
import Cards from '../../Components/Cards/';
import Carousel from '../../Components/Carousel/';

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
