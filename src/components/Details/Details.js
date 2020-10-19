import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Main from '../Main/Main';
import FetchData from '../../service/FetchData';
import useLaunches from '../useLaunches/useLaunches';
import Youtube from 'react-youtube';
import './details.css';

//const fetchData = new FetchData();

export default function Details(props) {
  const id = props.match.params.id;
  const {getLaunch} = useLaunches();
  const [launch, setLaunch] = useState(null);

  useEffect(() => {
    setLaunch(getLaunch(id))
  })

  if (!launch) return null;

  const videoId = launch.links.webcast.split('=')[1];

  return (
    <>
      <Main name={launch.name} />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={launch.links.patch.small} alt="" />
            </div>
            {launch.details && <div className="details-content">
              <p className="details-description">{launch.details}</p>
            </div>}
          </div>
          <div>
            <Youtube className='details-youtube' videoId={videoId} />
            {/* <iframe className="details-youtube" width="560" height="315" src={'https://www.youtube.com/embed/' + videoId} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
          </div>
        </div>
        <Link to='/calendar' className="button button-back">go back</Link>
      </main>
    </>
  )
}