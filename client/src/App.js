import React from 'react';
import ReactDOM from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;