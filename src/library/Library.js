import './Library.css';
import React from 'react';
import { BsBook } from 'react-icons/bs';
import Home from "../home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Nav } from 'react-bootstrap';

function Library() {
  return (
    <div className="Library">

      <p className='language'>ru</p>

      <header>

          <Nav.Link href="/" className='logo'>
            <p>logo</p>
          </Nav.Link>

          <Nav.Link href="/library" className='library'>
            <BsBook className='icon' />
            <p>Library</p>
          </Nav.Link>

      </header>

    </div>
  );
}

export default Library;
