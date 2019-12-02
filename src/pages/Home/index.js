import React, { Component } from 'react';
import TitleBar from '../../Components/TitleBar';
import Cards from '../../Components/Cards/';
import Carousel from '../../Components/Carousel';

const styleBody = {
  display: 'flex',
  width: '900px',
  justifyContent: 'space-around',
};

class Home extends Component {
  render() {
    return (
      <div>
        <TitleBar></TitleBar>
        <Carousel></Carousel>


        <center>
          <div style={styleBody}>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
          </div>
        </center>
      </div>
    );
  }
}
export default Home;
