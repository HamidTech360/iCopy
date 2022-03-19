import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about'
import Services from './pages/services/service';
import Copywriting from './pages/copywriting/copywriting';
import EmailMarketing from './pages/Emarketing/emarketing';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/copywriting" component={Copywriting}/>
        <Route path="/emailmarketing" component={EmailMarketing}/>
        <Route path="/service" component={Services}/>
        <Route path="/" component={Home}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
