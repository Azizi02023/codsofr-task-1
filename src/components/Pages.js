import React from 'react';

import './PagesStyle.css';

function Pages(props) {
  return (
    <div>
    <div className={props.cName}>
      <img alt='AbcImage' src={props.heroIma}></img>
    </div>
    <div className='text'>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <a href={props.url} className={props.btnclass}>
        {props.buttonText}
        </a>
    </div>
    </div>
  );
}

export default Pages;
