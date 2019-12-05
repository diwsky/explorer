import React, { Component } from 'react';
import TitleBar from '../../Components/TitleBar';
import Cards from '../../Components/Cards/';
import Carousel from '../../Components/Carousel';
import Container from '../../Components/Container';

const styleCard = {
  display: 'flex',
  width: '900px',
  marginTop: '20px',
  justifyContent: 'space-around',
};

class Home extends Component {
  onClickButton = e => {
    this.props.history.push({
      pathname: '/book',
      places: e,
    });
  };
  render() {
    return (
      <div>
        <Carousel></Carousel>

        <center>
          <Container
            header={'Explore our new places!'}
            description={'Get the best offer you can get in town!'}
            customStyle={styleCard}
          >
            <Cards
              title={'Mount Gede'}
              desc={
                'Have the fascinating view of rain forest inside the heart of West Java'
              }
              img={'/img/gede.jpg'}
              onAction={this.onClickButton}
              places="Gede"
            ></Cards>
            <Cards
              title={'Mount Slamet'}
              desc={
                'Need more adventure with steep trek and challanging trail? Slamet might suit you best!'
              }
              img={'/img/slamet.jpg'}
              onAction={this.onClickButton}
              places="Slamet"
            ></Cards>
            <Cards
              title={'Mount Semeru'}
              desc={
                'Experience one of the 7 summit Indonesia, located in East Java. Seek the beauty of Ranu Kumbolo'
              }
              img={'/img/semeru.jpg'}
              onAction={this.onClickButton}
              places="Semeru"
            ></Cards>
          </Container>
        </center>
      </div>
    );
  }
}
export default Home;
