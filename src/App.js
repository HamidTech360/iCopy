import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about'
import Services from './pages/services/service';


// import Post from './pages/post/post'
// import CreatePost from './pages/createPost/createpost'
// import Admin from './pages/admin/admin'
// import Login from './pages/login/login'
// import Category from './pages/categories/category'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/service" component={Services}/>
        <Route path="/" component={Home}/>

        {/* <Route path="/post/:id" component={Post}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/login" component={Login}/>
        <Route path="/category" component={Category}/> */}
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
