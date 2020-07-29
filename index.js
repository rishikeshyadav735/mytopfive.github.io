import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';
import './index.css';

function ncard(val) {
  return (
    <Cards
      imgsrc={val.imgsrc}
      title={val.sname}
      link={val.links}
    />
  );
}


ReactDOM.render(

  <>
    <h3 className="heading">My Top 5 Picks</h3>
    {Sdata.map((val) => {
      return (
        <Cards
          imgsrc={val.imgsrc}
          title={val.sname}
          link={val.links}
        />
      );

    })}
  </>
  , document.getElementById("root"));