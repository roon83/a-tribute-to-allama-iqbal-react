let React = require('react');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');

const More = () => {
    return (
        <div className='moresection' id='more'>
            <div className='text-center'>
                <h2 className='text-color lobsterfont'>Want to know more about Iqbal then please click any of the following links</h2>
                <div className='fjallafont text-center font-size'>
                    <div>
                        <a href='https://en.wikipedia.org/wiki/Muhammad_Iqbal'>Wikipedia page of Allama Muhammad Iqbal</a>
                    </div>
                    <div>
                        <a href='http://www.britannica.com/biography/Muhammad-Iqbal'>Encyclopaedia Britannica page of Allama Muhammad Iqbal</a>
                    </div>
                    <div>
                        <a href='http://www.allamaiqbal.com/person/years/years.htm'>Detailed timeline of Allama Muhammad Iqbal's life</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

module.exports = More;

