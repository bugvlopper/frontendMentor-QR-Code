import React from 'react';
import '../css/Card.css';
class Card extends React.Component {
    
    render() { 
        return (
            <div>
                <div id='card'>
                    <img src={require("../images/image-qr-code.png")} alt="QR code" className='mainImage' />
                    <div id='info'>
                        <h2><p>Improve your front-end skills by building projects</p></h2>
                        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                    </div>
                </div>
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                    Coded by <a href="https://github.com/bugvlopper" target="_blank" rel="noreferrer">Bugvlopper</a>.
                </div>
            </div>
        );
    }
}
 
export default Card;