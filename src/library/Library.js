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


const filmsData = [{
  type: "action",
  data: action,
}, {
  type: "adventure",
  data: adventure,
}, {
  type: "biography",
  data: biography,
}, {
  type: "comedy",
  data: comedy,
}, {
  type: "crime",
  data: crime,
}, {
  type: "documentary",
  data: documentary,
}, {
  type: "drama",
  data: drama,
}, {
  type: "family",
  data: family,
}, {
  type: "history",
  data: history,
}, {
  type: "mystery",
  data: mystery,
}, {
  type: "science_fiction",
  data: science_fiction,
}, {
  type: "thriller",
  data: thriller
}, {
  type: "war_politics",
  data: war_politics
}]


function Library() {

  // const newFilms = filmsData.map((film)=>film.data.map((f)=>f))

  const [films, setFilms] = useState(filmsData);


  console.log(films);

  const handleFilterFilm =(type)=>{

    const newFilm = type==="all"?filmsData:filmsData.filter((el)=>el.type===type);
    setFilms([...newFilm]);
  }

  return (
    <div className="Library">

      <div className='header'>

        <Nav.Link href="/" className='logo'>
          <p>wazoom</p>
        </Nav.Link>

        <Nav.Link href="/library" className='library'>
          <BsBook className='icon' />
          <p>Library</p>
        </Nav.Link>

      </div>

      <div className='filter'>
          <button className='btn' onClick={()=>handleFilterFilm("all")}>All</button>
          <button className='btn' onClick={()=>handleFilterFilm("action")}>Action</button>
          <button className='btn' onClick={()=>handleFilterFilm("adventure")}>Adventure</button>
          <button className='btn' onClick={()=>handleFilterFilm("biography")}>Biography</button>
          <button className='btn' onClick={()=>handleFilterFilm("comedy")}>Comedy</button>
          <button className='btn' onClick={()=>handleFilterFilm("crime")}>Crime</button>
          <button className='btn' onClick={()=>handleFilterFilm("documentary")}>Documentary</button>
          <button className='btn' onClick={()=>handleFilterFilm("drama")}>Drama</button>
          <button className='btn' onClick={()=>handleFilterFilm("family")}>Family</button>
          <button className='btn' onClick={()=>handleFilterFilm("history")}>History</button>
          <button className='btn' onClick={()=>handleFilterFilm("mystery")}>Mystery</button>
          <button className='btn' onClick={()=>handleFilterFilm("science_fiction")}>Science Fiction</button>
          <button className='btn' onClick={()=>handleFilterFilm("thriller")}>Thriller</button>
          <button className='btn' onClick={()=>handleFilterFilm("war_politics")}>War & Politics</button>
      </div>

      <div className='tv_card'>

        {/* Action */}
        {
          films.map((el) => el.data.map((film) => (
            <div className='tv_box' key={film.url}>
              <img src={film.img} /><br />
              <div className='info'>
                {film.name}<br />
                {film.seriesDetails}<br />
                <p>Duration: {film.total_time} minutes</p>
                <a href={film.url}>
                  <p>Watch now</p>
                </a>
              </div><br />
            </div>
          )))

        }

      </div>

    </div>
  );
}

export default Library;