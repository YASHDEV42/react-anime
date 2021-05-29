import './App.css';
import { Component } from 'react';
/*import AnimeList from './components/AnimeList';*/
import Home from './view/Home'
import AddAnime from './view/AddAnime'
import Header from './components/blog/Header'
import {Route, Switch, Redirect} from 'react-router-dom'
import AnimeList from './components/anime/AnimeList';
import SingleAnime from './components/anime/SingleAnime';
import Error from './view/Error'



class App extends Component {
  state = {
    auth:true,
  }
render () {
    return (
      <>
      <Header />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/animeList'  component={AnimeList} />
      {this.state.auth ? <Route path="/anime/add-anime" component={AddAnime}></Route>:<Redirect from="/anime/add-anime" to="/"></Redirect>}
      <Route path="/anime/:id"  component={SingleAnime}></Route>
      <Redirect from="/home" to="/" />
      <Route component={Error}/>
      </Switch>
      </>
        /*<AnimeList /><Home />*/
    );
  }
}

export default App;
