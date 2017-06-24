let React = require('react');
let ReactBootstrap = require('react-bootstrap');
require('../../node_modules/font-awesome/css/font-awesome.min.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');

let Navbar = ReactBootstrap.Navbar, Grid = ReactBootstrap.Grid, AutoAffix = require('react-overlays').AutoAffix;

const Footer = () => {
    return (
        <AutoAffix>
            <Navbar inverse fixedBottom={true} fluid={true}>
                <div className='navbar-text pull-left'>
                    <div>
                        <p className='fjallafont'>2017 free to copy</p>
                    </div>
                    <div>
                        <p className='fjallafont'>Created by Ghulam Ahmed Lasi</p>
                    </div>
                </div>
                <div className='navbar-text pull-right'>
                    <a href='#'><i className='fa fa-facebook-square fa-2x'></i></a>
                    <a href='#'><i className='fa fa-twitter fa-2x'></i></a>
                    <a href='#'><i className='fa fa-google-plus fa-2x'></i></a>
                </div>
            </Navbar>
        </AutoAffix>
    )
};

module.exports = Footer;

