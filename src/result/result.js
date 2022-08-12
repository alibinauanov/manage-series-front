import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsFillLightbulbOffFill } from "react-icons/bs";
import { Nav } from 'react-bootstrap';
import './result.css'



import action from '../library/json_data/action.json'
import adventure from '../library/json_data/adventure.json'
import biography from '../library/json_data/biography.json'
import comedy from '../library/json_data/comedy.json'
import crime from '../library/json_data/crime.json'
import documentary from '../library/json_data/documentary.json'
import drama from '../library/json_data/drama.json'
import family from '../library/json_data/family.json'
import history from '../library/json_data/history.json'
import mystery from '../library/json_data/mystery.json'
import science_fiction from '../library/json_data/science_fiction.json'
import thriller from '../library/json_data/thriller.json'
import war_politics from '../library/json_data/war_politics.json'




export const Result = () => {


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





    const searchQuery = window.location.search;
    // console.log(searchQuery, "hi");
    // split the searchQuery by commas 
    const splittedData = searchQuery.split(/[,?]+/).join(" ");
    // console.log(splittedData);
    // const filtereArray = [{
    //     title: ''
    // }]


    var sortedFilms = null;


    // Мусорный код получения чистых query
    
    var sortedItems = splittedData.split(" ")
    sortedItems.shift()
    sortedItems.forEach((element,index) => {
        sortedItems[index] = element.split("=")[1]
    });

    var totalTime = Number(sortedItems[0]) * (Number(sortedItems[1]) * 30)


    // собсна сама сортировка
    filmsData.forEach(element => {

        // проверяю жанр
        if (element.type === sortedItems[2]) {
            // обнуляю сортированные фильмы(на всякий случай)
            sortedFilms = [];
            
            element.data.forEach(element => {
                //проверяю меньше ли общее время фильма на общее время которое есть
                if (Number(element.total_time) < Number(totalTime)) {
                    sortedFilms.push(element)
                }
            });
        }
    });

    console.log(sortedFilms)

    return (
        <div className='result'>
            <div className='tv_card'>
                {
                sortedFilms.map((el) => 
                    <div className='tv_box' key={el.url}>
                        <img src={el.img} /><br />
                        <div className='info'>
                            {el.name}<br />
                            {el.seriesDetails}<br />
                            <p>Duration: {el.total_time} minutes</p>
                            <a href={el.url}>
                            <p>Watch now</p>
                            </a>
                        </div><br />
                    </div>
                )
                }

            </div>

            <Nav.Link href="/" className='restart'>
              <p>Restart</p>
            </Nav.Link>

        </div>
    )
}