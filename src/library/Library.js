import './Library.css';
import React from 'react';
import { BsBook } from 'react-icons/bs';
import Home from "../home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from 'react-bootstrap';

import action from './json_data/action.json'

function Library() {
  return (
    <div className="Library">

      <header>

          <Nav.Link href="/" className='logo'>
            <p>wazoom</p>
          </Nav.Link>

          <Nav.Link href="/library" className='library'>
            <BsBook className='icon' />
            <p>Library</p>
          </Nav.Link>

      </header>

      <div className='tv_card'>
        {
          action.map( action_tv => {
            return(
              <div className='tv_box' key={ action_tv.url }>
                <img src={ action_tv.img }/><br/>
                <div className='info'>
                  { action_tv.name }<br/>
                  { action_tv.seriesDetails }<br/>
                  <p>Duration: { action_tv.total_time } minutes</p>
                  <a href={ action_tv.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default Library;


// import adventure from './json_data/adventure.json'
// import biography from './json_data/biography.json'
// import comedy from './json_data/comedy.json'
// import crime from './json_data/crime.json'
// import documentary from './json_data/documentary.json'
// import drama from './json_data/drama.json'
// import family from './json_data/family.json'
// import history from './json_data/history.json'
// import mystery from './json_data/mystery.json'
// import science_fiction from './json_data/science_fiction.json'
// import thriller from './json_data/thriller.json'
// import war_politics from './json_data/war_politics.json'