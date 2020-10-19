import React from 'react';
import './calendar.css';
import Launches from '../Launches/Launches';
import Main from '../Main/Main';
import useLaunches from '../useLaunches/useLaunches';

export default function Calendar() {

  const { data } = useLaunches();

  return (
    <>
      <Main name="SpaceX Calendar" />
      <section className="calendar">
          <div className="container">
            <ul className="calendar-list">
              {
                data.map((item, i) => (
                  <li className="calendar-item" key={i}>
                    <Launches image={item.links.patch.small} link={item.links.article} text={item.name} id={item.id} />
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
    </>
  )
}