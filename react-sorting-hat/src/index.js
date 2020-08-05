import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const BgStyle = {
    backgroundImage: `url("/static/media/housecrests.7925ec0b.png")`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `50% 50%`,
    backgroundPosition: `center`
  }

ReactDOM.render(<div style={BgStyle}><App /></div>, document.getElementById('root'));
