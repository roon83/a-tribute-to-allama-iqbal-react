let React = require('react');
let PropTypes = require('prop-types');
let ReactBootstrap = require('react-bootstrap');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../carousel.css');
require('../index.css');
const iqbal_pic1 = require('../image/010.png'),
iqbal_pic2 = require('../image/06.png'),
iqbal_pic3 = require('../image/02.png'),
iqbal_pic4 = require('../image/03.png'),
iqbal_pic5 = require('../image/08.png'),
iqbal_pic6 = require('../image/01.png'),
iqbal_pic7 = require('../image/05.png'),
iqbal_pic8 = require('../image/09.png');

let Carousel = ReactBootstrap.Carousel,
Row = ReactBootstrap.Row,
Col = ReactBootstrap.Col,
Thumbnail = ReactBootstrap.Thumbnail,
Grid = ReactBootstrap.Grid;

const MyCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Grid>
                    <div className='slide-wrapper'>
                        <Row>
                            <Col xs={4}>
                                <div className='slide-image'>
                                    <Thumbnail src={iqbal_pic1} />
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className='slide-image'>
                                    <Thumbnail src={iqbal_pic2} />
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className='slide-text text-color'>
                                    <p className='text-center fjallafont'>Some photos of Iqbal taken at different occasions</p>
                                    <p className='text-center fjallafont'>Click right arrow for more</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </Carousel.Item>
            <Carousel.Item>
                <Grid>
                    <div className='slide-wrapper'>
                        <Row>
                            <Col xs={4}>
                                <div className='slide-image'>
                                    <Thumbnail src={iqbal_pic3} />
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className='slide-image'>
                                    <Thumbnail src={iqbal_pic4} />
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className='slide-image'>
                                    <Thumbnail src={iqbal_pic5} />
                                </div>
                            </Col>
                        </Row>>
                    </div>
                </Grid>
            </Carousel.Item>
            <Carousel.Item>
                <Grid>
                    <div className='slide-wrapper'>
                        <Row>
                            <Col xs={4}>
                                <div className='slide-image'>
                                    <Thumbnail src={iqbal_pic6} />
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className='slide-image'>
                                    <Thumbnail src={iqbal_pic7} />
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className='slide-image'>
                                    <Thumbnail src={iqbal_pic8} />
                                </div>
                            </Col>
                        </Row>>
                    </div>
                </Grid>
            </Carousel.Item>
        </Carousel>
    )
};

module.exports = MyCarousel;

