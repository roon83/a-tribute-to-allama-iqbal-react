let React = require('react');
let PropTypes = require('prop-types');
let MyCarousel = require('./MyCarousel');
let About = require('./About');
let Poetry = require('./Poetry');
let More = require('./More');
let ReactBootstrap = require('react-bootstrap');
import Scrollspy from 'react-scrollspy';
import Scrollchor from 'react-scrollchor';
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../index.css');

let Affix = require('react-overlays').Affix,
Navbar = ReactBootstrap.Navbar,
Nav = ReactBootstrap.Nav,
Grid = ReactBootstrap.Grid,
NavItem = ReactBootstrap.NavItem,
Jumbotron = ReactBootstrap.Jumbotron,
Row = ReactBootstrap.Row,
Col = ReactBootstrap.Col;


class NavBar extends React.Component {
    render(){
        return (
            <div ref='main'>
                <div id='home'>
                    <Affix viewOffsetTop={20} container={this.getMain}>
                        <Navbar fixedTop={true} fluid={true}>
                            <Navbar.Header>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Brand>
                                <a id='home' className='lobsterfont'>Allama Muhammad Iqbal</a>
                            </Navbar.Brand>
                            <Navbar.Collapse>
                                <Scrollspy offset={ -120 } className='navbar-nav nav navbar-right' items={ ['home', 'about', 'poetry', 'more'] } currentClassName='active'>
                                    <li className='hover fjallafont nav-btn-fontsize'><Scrollchor to='#home' className='nav-link'>Home</Scrollchor></li>
                                    <li className='hover fjallafont nav-btn-fontsize'><Scrollchor to='#about' className='nav-link'>About</Scrollchor></li>
                                    <li className='hover fjallafont nav-btn-fontsize'><Scrollchor to='#poetry' className='nav-link'>Poetry</Scrollchor></li>
                                    <li className='hover fjallafont nav-btn-fontsize' ><Scrollchor to='#more' className='nav-link'>More</Scrollchor></li>
                                </Scrollspy>
                            </Navbar.Collapse>
                        </Navbar>
                    </Affix>
                </div>
                <MyCarousel />
                <div>
                    <Grid>
                        <Jumbotron className='aboutsection'>
                            <Row>
                                <Col xs={12}>
                                    <About />
                                    <Poetry />
                                    <More />
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Grid>
                </div>
            </div>
        )
    }
}

module.exports = NavBar;

