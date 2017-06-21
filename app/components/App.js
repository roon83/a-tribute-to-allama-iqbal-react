let React = require('react');
let ReactDom = require('react-dom');
let NavBar = require('./NavBar');
let MyCarousel = require('./MyCarousel');
let About = require('./About');

class App extends React.Component {
    render(){
        return (
            <div>
                <NavBar />,
                <MyCarousel />,
                <About />
            </div>
        )
    }
}

module.exports = App;

