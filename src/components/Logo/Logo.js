import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='ma4 ml2'>
        <div style={
          {
            height: '100px',
            width: '100px',
            backgroundColor: 'darkgreen'
          }
        }>
          <h1><img style={{paddingTop: '5px'}}src={brain} alt='brain logo'/></h1>
        </div>
      </Tilt>
    </div>
  );
}
export default Logo;
