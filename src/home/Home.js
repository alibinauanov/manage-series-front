import './Home.css';
import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { BsBook } from 'react-icons/bs';
import { useDispatch } from 'react-redux'
import axios from 'axios';


function Home() {

  const [hours, setHours] = useState();
  const [period, setPeriod] = useState();
  const [category, setCategory] = useState();


  const onChange = (e, type) => {

    if (type === "hours") {
      setHours(e.target.value);
    } else
        if (type === "period") {
          setPeriod(e.target.value);
        } else
          if (type === "category") {
            setCategory(e.target.value);
          }
  }
  var data = JSON.stringify({"hours": hours, "period": period, "category":category})

  const onSubmit = () => {
    console.log(data)
    if(hours && period && category){
      axios.post('http://localhost:8080/post_name', data).then((result) => {
        console.log(result)
      }).catch((err)=>{
        console.log(err);
      })
    }
  } 

  return (
    <div className="App">

      <header>

        <Nav.Link href="/" className='logo'>
          <p>wazoom</p>
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
            <p>calculate how long it will take to<br /> watch TV shows</p>
          </div>
        </div>

        <div className='form in_line'>

          <div className='question'>
            <p>Hours for watching per day</p>
            <div className='choose'>
              <select required onChange={(e) => onChange(e, "hours")}>
                <optgroup label='Hours' name="hours">
                  <option selected="selected" disabled='disabled'></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
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
                  <option>Action&Adventure</option>
                  <option>Adventure</option>
                  <option>Animation</option>
                  <option>Biography</option>
                  <option>Comedy</option>
                  <option>Crime</option>
                  <option>Documentary</option>
                  <option>Drama</option>
                  <option>Family</option>
                  <option>History</option>
                  <option>Mystery</option>
                  <option>Sci-Fi Fantasy</option>
                  <option>Science Fiction</option>
                  <option>Thriller</option>
                  <option>War&Politics</option>
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
