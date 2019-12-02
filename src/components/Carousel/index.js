import React, { Component, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import gede from '../../img/gede.jpg';
import slamet from '../../img/slamet.jpg';
import semeru from '../../img/semeru.jpg';

class index extends Component {
  render() {
    const styleImg = {
      width: '50%',
      flex: 1,
      height: '400px',
    };

    return (
      <div>
        <Carousel
          style={{
            height: '400px',
          }}
        >
          <Carousel.Item>
            <img
              style={styleImg}
              className="d-block w-100"
              src={gede}
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis
                interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={styleImg}
              className="d-block w-100"
              src={slamet}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={styleImg}
              className="d-block w-100"
              src={semeru}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl
                consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default index;
