
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel style={{ position: 'relative' }}>
                <Carousel.Item>

                    <img
                        height="500px"
                        className="d-block w-100"
                        src={`https://www.redelephantreps.com/wp-content/uploads/2020/07/Bali-swing-2000px.png`}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Super Bike</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="500px"
                        className="d-block w-100"
                        src={`https://valefyachts.com/wp-content/uploads/2019/03/valef-yachts-discover-croatia-2000px.jpg`}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Super Bike</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="500px"
                        className="d-block w-100"
                        src={`https://i.pinimg.com/originals/e8/82/67/e88267a222de3b152d6aced055fc84a7.jpg`}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Super Shops</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;