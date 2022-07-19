import './Home.css';
import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { BsBook } from 'react-icons/bs';
import { useDispatch } from 'react-redux'
import axios from 'axios';


function Home() {

  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [period, setPeriod] = useState();
  const [category, setCategory] = useState();


  const onChange = (e, type) => {

    if (type === "hours") {
      setHours(e.target.value);
    } else
      if (type === "minutes") {
        setMinutes(e.target.value);
      } else
        if (type === "period") {
          setPeriod(e.target.value);
        } else
          if (type === "category") {
            setCategory(e.target.value);
          }
  }

  const onSubmit = () => {
    console.log(minutes,hours,period,category)
    if(minutes && hours && period && category){

      axios.post('http://localhost:4000/', {
        minutes, hours, period, category
      }).then((result) => {
        console.log(result)
      }).catch((err)=>{
        console.log(err);
      })
    }
  }

  return (
    <div className="App">

      <p className='language'>ru</p>

      <header>

        <Nav.Link href="/" className='logo'>
          <p>logo</p>
        </Nav.Link>

        <Nav.Link href="library" className='library'>
          <BsBook className='icon' />
          <p>Library</p>
        </Nav.Link>

      </header>

      <div className='main_body'>

        <div className='left_text'>
          <div className='text in_line'>
            <h1 className='manage'>Manage</h1>
            <h1 className='your'>Your</h1>
            <h1 className='time'>Time</h1>
          </div>

          <div className='desc'>
            <p>calculate how long it will<br />take to watch anime</p>
          </div>
        </div>

        <div className='form in_line'>

          <div className='question'>
            <p>Hours for watching per day</p>
            <div className='choose'>
              <select required onChange={(e) => onChange(e, "hours")}>
                <optgroup label='Hours' name="hours">
                  <option selected="selected" disabled='disabled'></option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>3 hours</option>
                  <option>4 hours</option>
                  <option>5 hours</option>
                  <option>6 hours</option>
                  <option>7 hours</option>
                  <option>8 hours</option>
                  <option>9 hours</option>
                  <option>10 hours</option>
                  <option>11 hours</option>
                  <option>12 hours</option>
                  <option>13 hours</option>
                  <option>14 hours</option>
                  <option>15 hours</option>
                  <option>16 hours</option>
                  <option>17 hours</option>
                  <option>18 hours</option>
                  <option>19 hours</option>
                  <option>20 hours</option>
                  <option>21 hours</option>
                  <option>22 hours</option>
                  <option>23 hours</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className='question'>
            <p>Minutes for watching per day</p>
            <div className='choose'>
              <select required onChange={(e) => onChange(e, "minutes")}>
                <optgroup label='Minutes' name="minutes">
                  <option selected="selected" disabled='disabled'></option>
                  <option>0 minute</option>
                  <option>5 minutes</option>
                  <option>10 minutes</option>
                  <option>15 minutes</option>
                  <option>20 minutes</option>
                  <option>25 minutes</option>
                  <option>30 minutes</option>
                  <option>35 minutes</option>
                  <option>40 minutes</option>
                  <option>45 minutes</option>
                  <option>50 minutes</option>
                  <option>55 minutes</option>
                  <option>60 minutes</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className='question'>
            <p>Period</p>
            <div className='choose'>
              <select required onChange={(e) => onChange(e, "period")}>
                <optgroup label='Period' name="period">
                  <option selected="selected" disabled='disabled'></option>
                  <option>1 month</option>
                  <option>2 months</option>
                  <option>3 months</option>
                  <option>4 months</option>
                  <option>5 months</option>
                  <option>6 months</option>
                  <option>7 months</option>
                  <option>8 months</option>
                  <option>9 months</option>
                  <option>10 months</option>
                  <option>11 months</option>
                  <option>1 year</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className='question'>
            <p>Category</p>
            <div className='choose'>
              <select required onChange={(e) => onChange(e, "category")}>
                <optgroup label='Category' name="category">
                  <option selected="selected" disabled='disabled'></option>
                  <option>Action</option>
                  <option>Adventure</option>
                  <option>Comedy</option>
                  <option>Drama</option>
                  <option>Slice of Life</option>
                  <option>Fantasy</option>
                  <option>Magic</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div>
            <button className='btn_submit' onClick={onSubmit}>Submit</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;