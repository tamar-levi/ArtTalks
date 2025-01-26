import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import PictureDiscussion from './components/PictureDiscussion';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <h1 style={{ textAlign: 'center' }}>Art Talks</h1>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/picture/:id" element={<PictureDiscussion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


