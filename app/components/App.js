let React = require('react');
let ReactDom = require('react-dom');
let NavBar = require('./NavBar');
let MyCarousel = require('./MyCarousel');
let About = require('./About');
let Footer = require('./Footer');

class App extends React.Component {
    render(){
        return (
            <div>
                <NavBar />,
                <Footer />
            </div>
        )
    }
}

module.exports = App;

