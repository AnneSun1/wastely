import React from 'react';
import { Route, Routes } from 'react-router';

import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../components/Transition';

import '../App.css';
import Wastely from '../views/Wastely';
import Map from '../views/Map';
import NoPage from '../views/NoPage';
import Welcome from '../views/Welcome';



const Router = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route path="/" element={
          <TransitionComponent>
            <Welcome />
          </TransitionComponent> } />
        <Route path="/wastely" element={
          <TransitionComponent>
            <Wastely/>
          </TransitionComponent> } />
        <Route path="/map" element={
          <TransitionComponent>
            <Map/>
          </TransitionComponent> } />
        <Route path="*" element={
          <TransitionComponent>
            <NoPage />
          </TransitionComponent> } />
      </Routes>
    </TransitionProvider>
  )
}

export default Router;
