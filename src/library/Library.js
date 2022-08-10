import './Library.css';
import React, { useState } from 'react';
import { BsBook } from 'react-icons/bs';
import Home from "../home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from 'react-bootstrap';

import action from './json_data/action.json'
import adventure from './json_data/adventure.json'
import biography from './json_data/biography.json'
import comedy from './json_data/comedy.json'
import crime from './json_data/crime.json'
import documentary from './json_data/documentary.json'
import drama from './json_data/drama.json'
import family from './json_data/family.json'
import history from './json_data/history.json'
import mystery from './json_data/mystery.json'
import science_fiction from './json_data/science_fiction.json'
import thriller from './json_data/thriller.json'
import war_politics from './json_data/war_politics.json'

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

        {/* Action */}
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

        {/* Adventure */}
        {
          adventure.map( adventure_tv => {
            return(
              <div className='tv_box' key={ adventure_tv.url }>
                <img src={ adventure_tv.img }/><br/>
                <div className='info'>
                  { adventure_tv.name }<br/>
                  { adventure_tv.seriesDetails }<br/>
                  <p>Duration: { adventure_tv.total_time } minutes</p>
                  <a href={ adventure_tv.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }

        {/* Biography */}
        {
          biography.map( biography_tv => {
            return(
              <div className='tv_box' key={ biography_tv.url }>
                <img src={ biography_tv.img }/><br/>
                <div className='info'>
                  { biography_tv.name }<br/>
                  { biography_tv.seriesDetails }<br/>
                  <p>Duration: { biography_tv.total_time } minutes</p>
                  <a href={ biography_tv.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }

        {/* Comedy */}
        {
          comedy.map( comedy => {
            return(
              <div className='tv_box' key={ comedy.url }>
                <img src={ comedy.img }/><br/>
                <div className='info'>
                  { comedy.name }<br/>
                  { comedy.seriesDetails }<br/>
                  <p>Duration: { comedy.total_time } minutes</p>
                  <a href={ comedy.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }

        {/* Crime */}
        {
          crime.map( crime_tv => {
            return(
              <div className='tv_box' key={ crime_tv.url }>
                <img src={ crime_tv.img }/><br/>
                <div className='info'>
                  { crime_tv.name }<br/>
                  { crime_tv.seriesDetails }<br/>
                  <p>Duration: { crime_tv.total_time } minutes</p>
                  <a href={ crime_tv.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }

        {/* Documentary */}
        {
          documentary.map( documentary_tv => {
            return(
              <div className='tv_box' key={ documentary_tv.url }>
                <img src={ documentary_tv.img }/><br/>
                <div className='info'>
                  { documentary_tv.name }<br/>
                  { documentary_tv.seriesDetails }<br/>
                  <p>Duration: { documentary_tv.total_time } minutes</p>
                  <a href={ documentary_tv.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }

        {/* Drama */}
        {
          drama.map( drama_tv => {
            return(
              <div className='tv_box' key={ drama_tv.url }>
                <img src={ drama_tv.img }/><br/>
                <div className='info'>
                  { drama_tv.name }<br/>
                  { drama_tv.seriesDetails }<br/>
                  <p>Duration: { drama_tv.total_time } minutes</p>
                  <a href={ drama_tv.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }

        {/* Family */}
        {
          family.map( family_tv => {
            return(
              <div className='tv_box' key={ family_tv.url }>
                <img src={ family_tv.img }/><br/>
                <div className='info'>
                  { family_tv.name }<br/>
                  { family_tv.seriesDetails }<br/>
                  <p>Duration: { family_tv.total_time } minutes</p>
                  <a href={ family_tv.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }

        {/* History */}
        {
          history.map( history_tv => {
            return(
              <div className='tv_box' key={ history_tv.url }>
                <img src={ history_tv.img }/><br/>
                <div className='info'>
                  { history_tv.name }<br/>
                  { history_tv.seriesDetails }<br/>
                  <p>Duration: { history_tv.total_time } minutes</p>
                  <a href={ history_tv.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }

        {/* Mystery */}
        {
          mystery.map( mystery_tv => {
            return(
              <div className='tv_box' key={ mystery_tv.url }>
                <img src={ mystery_tv.img }/><br/>
                <div className='info'>
                  { mystery_tv.name }<br/>
                  { mystery_tv.seriesDetails }<br/>
                  <p>Duration: { mystery_tv.total_time } minutes</p>
                  <a href={ mystery_tv.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }

        {/* science_fiction */}
        {
          science_fiction.map( science_fiction_tv => {
            return(
              <div className='tv_box' key={ science_fiction_tv.url }>
                <img src={ science_fiction_tv.img }/><br/>
                <div className='info'>
                  { science_fiction_tv.name }<br/>
                  { science_fiction_tv.seriesDetails }<br/>
                  <p>Duration: { science_fiction_tv.total_time } minutes</p>
                  <a href={ science_fiction_tv.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }

        {/* thriller */}
        {
          thriller.map( thriller_tv => {
            return(
              <div className='tv_box' key={ thriller_tv.url }>
                <img src={ thriller_tv.img }/><br/>
                <div className='info'>
                  { thriller_tv.name }<br/>
                  { thriller_tv.seriesDetails }<br/>
                  <p>Duration: { thriller_tv.total_time } minutes</p>
                  <a href={ thriller_tv.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }

        {/* war & politics */}
        {
          war_politics.map( war_politics_tv => {
            return(
              <div className='tv_box' key={ war_politics_tv.url }>
                <img src={ war_politics_tv.img }/><br/>
                <div className='info'>
                  { war_politics_tv.name }<br/>
                  { war_politics_tv.seriesDetails }<br/>
                  <p>Duration: { war_politics_tv.total_time } minutes</p>
                  <a href={ war_politics_tv.url }>
                    <p>Watch now</p>
                </a>
                </div><br/>
              </div>
            )
          })
        }

        <div className='filter'>
          <button className='btn' id='all'>All</button>
          <button className='btn' id='action'>Action</button>
          <button className='btn' id='adventure'>Adventure</button>
          <button className='btn' id='biography'>Biography</button>
          <button className='btn' id='comedy'>Comedy</button>
          <button className='btn' id='crime'>Crime</button>
          <button className='btn' id='documentary'>Documentary</button>
          <button className='btn' id='drama'>Drama</button>
          <button className='btn' id='family'>Family</button>
          <button className='btn' id='history'>History</button>
          <button className='btn' id='mystery'>Mystery</button>
          <button className='btn' id='science_fiction'>Science Fiction</button>
          <button className='btn' id='thriller'>Thriller</button>
          <button className='btn' id='war_politics'>War & Politics</button>
        </div>

      </div>

    </div>
  );
}

export default Library;