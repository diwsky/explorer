import React, { Component } from 'react';
import { Link } from 'react-router-bootstrap';
import { Redirect } from 'react-router-dom';
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
  place = '1';

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
              indexValue={1}
              places="Gede"
            ></Cards>
            <Cards
              title={'Mount Slamet'}
              desc={
                'Need more adventure with steep trek and challanging trail? Slamet might suit you best!'
              }
              img={'/img/slamet.jpg'}
              indexValue={2}
              places="Slamet"
            ></Cards>
            <Cards
              title={'Mount Semeru'}
              desc={
                'Experience one of the 7 summit Indonesia, located in East Java. Seek the beauty of Ranu Kumbolo'
              }
              img={'/img/semeru.jpg'}
              indexValue={3}
              places="Semeru"
            ></Cards>
          </Container>
        </center>
      </div>
    );
  }
}
export default Home;
