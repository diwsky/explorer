import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class index extends Component {
  render() {
    const styleImg = {
      width: '100%',
      flex: 1,
      height: '400px',
      backgroundPosition: 'center',
    };

    return (
      <div>
        <Carousel
          style={{
            height: '400px',
          }}
        >
          <Carousel.Item style={styleImg}>
            <img
              width="100%"
              height="600px"
              className="d-block w-100"
              src="/img/cover1.jpg"
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>Experience the adventurous beauty of Indonesia</h3>
              <p>
                Indonesia is the best place for all the hiker-lovers
                and
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={styleImg}
              className="d-block w-100"
              src="/img/cover2.jpg"
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
              src="/img/cover3.jpg"
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
