import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsFillLightbulbOffFill } from "react-icons/bs";




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
    const filtereArray = [{
        title: splittedData
    }]


    var sortedFilms = null;


    // Мусорный код получения чистых query
    
    var sortedItems = splittedData.split(" ")
    sortedItems.shift()
    sortedItems.forEach((element,index) => {
        sortedItems[index] = element.split("=")[1]
    });

    // получаю общее время, по идее желательно переделать каждый предмет sortedItems-а под объект, и чтобы
    // как нормальные люди вместо индекса указывали имя параметра, но я а) торопился, б) мне лень :D
    // даром отдаю эту работёнку тебе :)
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



    return <div>{filtereArray.map((a) => <div>{a.title}</div>)}</div>
}