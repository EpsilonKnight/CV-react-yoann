import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard} from 'react-copy-to-clipboard'

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                <h1>Contactez-moi</h1>
                <ul>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>NICE</span>
                    </li>
                    <li>
                        <i className="fas fa-mobile-alt"></i>
                        <CopyToClipboard text="06 50 76 44 76">
                        <span className='clickInput' onClick={() => {alert('Téléphone copié')}}><b>  06.50.76.44.56 </b></span>
                        
                        </ CopyToClipboard>
                    </li>
                    <li>
                        <i className="far fa-envelope"></i>
                        <CopyToClipboard text="yoann.jeanrat.dev@gmail.com">
                        <span className='clickInput' onClick={() => {alert('Email copié')}}><b> yoann.jeanrat.dev@gmail.com </b></span>
                        </ CopyToClipboard>
                    </li>
                </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                     <a href="http://www.google.com" target="_blank" rel='noopener noreferrer'>
                        <h4>LinkedIn</h4>
                        <i className='fab fa-linkedin'></i>
                        </a>   
                     <a href="http://www.google.com" target="_blank" rel='noopener noreferrer'>
                        <h4>GitHub</h4>
                        <i className='fab fa-github'></i>
                        </a>   
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;