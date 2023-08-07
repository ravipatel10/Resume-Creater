import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mynav from './Components/Navbar/Mynav';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Templates from './Pages/Templates/Templates';
import ResumeState from './Context/ResumeState';
import Print from './Pages/Print/Print'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {


  return (
    <ResumeState>
      <div className="App">
        <DndProvider backend={HTML5Backend}>
          <Mynav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/templates" element={<Templates />}></Route>
            <Route exact path="/theme1" element={<Print theme='theme1' />}></Route>
            <Route exact path="/theme2" element={<Print theme='theme2' />}></Route>
          </Routes>
        </DndProvider>
      </div>
    </ResumeState>
  );
}

export default App;
