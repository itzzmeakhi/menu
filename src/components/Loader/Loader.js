import React from 'react';

import './Loader.css';

const Loader = () => {
  return (
    <div className='loader'>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Loading</p>
    </div>
  );
};

export default Loader;