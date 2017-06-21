let React = require('react');
let PropTypes = require('prop-types');
let ReactBootstrap = require('react-bootstrap');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../index.css');

let Affix = require('react-overlays').Affix, Navbar = ReactBootstrap.Navbar, Nav = ReactBootstrap.Nav, Grid = ReactBootstrap.Grid, NavItem = ReactBootstrap.NavItem;

const NavBar = () => {
        return (
            <Affix>
                <Navbar fixedTop={true} fluid={true}>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Brand>
                        <a className='lobsterfont' href='#home'>Allama Muhammad Iqbal</a>
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <div className='hover fjallafont'>
                            <Nav pullRight>
                                <NavItem eventKey={1} href='#home'>Home</NavItem>
                                <NavItem eventKey={2} href='#about'>About</NavItem>
                                <NavItem eventKey={3} href='#poetry'>Poetry</NavItem>
                                <NavItem eventKey={4} href='#more'>More</NavItem>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Affix>
        )
}

module.exports = NavBar;

