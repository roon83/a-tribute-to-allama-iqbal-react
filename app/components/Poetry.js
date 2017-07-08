let React = require('react');
let ReactBootstrap = require('react-bootstrap');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
const poem = require('../image/old-paper-2.jpg');

let Grid = ReactBootstrap.Grid, Thumbnail = ReactBootstrap.Thumbnail;

const Poetry = () => {
    return (
        <div className='poetrysection' id='poetry'>
            <div className='text-center text-color lobsterfont'>
                <h2>Poem written by Iqbal in persian</h2>
            </div>
            <Grid className='flex-center'>
                <Thumbnail src={poem} alt='Persian poem of Allama Iqbal' />
            </Grid>
        </div>
    )
};

module.exports = Poetry;
