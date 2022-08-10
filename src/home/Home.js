import './Home.css';
import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { BsBook } from 'react-icons/bs';
import axios from 'axios';

function Home() {

  const [period, setPeriod] = useState(0);
  const [category, setCategory] = useState(0);
  const [hours, setHours] = useState(0);
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
              <select required value={hours} onChange={(e) => setHours(e.target.value)}>
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
              <select required value={period} onChange={(e) => setPeriod(e.target.value)}>
                <optgroup label='Period' name="period">
                  <option selected="selected" disabled='disabled'></option>
                  <option value={1}>1 month</option>
                  <option value={2}>2 months</option>
                  <option value={3}>3 months</option>
                  <option value={4}>4 months</option>
                  <option value={5}>5 months</option>
                  <option value={6}>6 months</option>
                  <option value={7}>7 months</option>
                  <option value={8}>8 months</option>
                  <option value={9}>9 months</option>
                  <option value={10}>10 months</option>
                  <option value={11}>11 months</option>
                  <option value={12}>1 year</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className='question'>
            <p>Category</p>
            <div className='choose'>
              <select required value={category} onChange={(e) => setCategory(e.target.value)}>
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
            <Nav.Link href={`result?hours=${hours},period=${period},category=${category}`} className='result_btn'>
              <p>Submit</p>
            </Nav.Link>
            {/* <button className='btn_submit' onClick={onSubmit}>Submit</button> */}
          </div>

        </div>

      </div>

    </div>
  );
}
export default Home;
