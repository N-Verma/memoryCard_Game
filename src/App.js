import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import {Game} from './components/Game/game'
import {Landing} from './components/Landing/landing'
import ParticlesBg from 'particles-bg'
export const App = () =>{
  if(localStorage.getItem('loss')===null){
    localStorage.setItem('loss',0);
  }
  //localStorage.setItem('win',0);
  if(localStorage.getItem('win')===null){
    localStorage.setItem('win',0);
  }
  if(localStorage.getItem('ezt')===null){
    localStorage.setItem('ezt',0);
  }
  if(localStorage.getItem('mdt')===null){
    localStorage.setItem('mdt',0);
  }
  if(localStorage.getItem('hdt')===null){
    localStorage.setItem('hdt',0);
  }
  return(
    <div>
      <ParticlesBg num={40} type="lines" bg={true} />
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path='/game/:id' component={Game} />
    </Router>
    </div>
  )
}