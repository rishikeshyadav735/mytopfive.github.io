import React from 'react';

function Cards(props) {
    return (
        <div className="cards">
            <div className="card">
                <img className="cardimg" src={props.imgsrc} alt="pic" />
                <div className="cardinfo">
                    <span className="category">A Netflix Original Series</span>
                    <h3 className="cardtitle">{props.title}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>

            </div>

        </div>
    );

}

export default Cards;