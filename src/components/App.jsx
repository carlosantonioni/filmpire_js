import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router';
import { Actors, MovieInformation, Movies, Profile, NavBar } from './';


// Create /
// create /detailsId

const App = () =>  (
  <div>
    <CssBaseline />
    <NavBar/>
    <main>
    <Routes>
      <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/" element={<Movies />} />
        <Route path="/profile/:id" element={<Profile />} />
    </Routes>
    </main>
  </div>
);

export default App;
