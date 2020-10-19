import React from 'react';
import {Link} from 'react-router-dom';
import './launches.css';

export default function Launches(props) {
  return (
    <article className="launches">
        <div className="launches-image">
          <img src={props.image} alt="" />
        </div>
        <div className="launches-content">
          <h2 className="launches-title">
            <a href={props.link}>
              {props.text}
            </a>
          </h2>
          <Link to={{pathname:'/details/'+ props.id}} className="button launches-details">Подробнее</Link>
        </div>
      </article>
  )
}