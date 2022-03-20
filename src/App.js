import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about'
import Services from './pages/services/service';
import Copywriting from './pages/copywriting/copywriting';
import EmailMarketing from './pages/Emarketing/emarketing';
import ContentWriting from './pages/contentwriting/content';
import SEO from './pages/seo/seo';
import Blog from './pages/blog/blog';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/blogs" component={Blog}/>
        <Route path="/copywriting" component={Copywriting}/>
        <Route path="/seo" component={SEO}/>
        <Route path="/contentwriting" component={ContentWriting}/>
        <Route path="/emailmarketing" component={EmailMarketing}/>
        <Route path="/service" component={Services}/>
        <Route path="/" component={Home}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
