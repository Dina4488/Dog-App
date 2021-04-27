import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import DogsPage from './pages/DogsPage/DogsPage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import NavBar from './component/NavBar/NavBar';


function App() {
  return (
    <div>
      <NavBar/>
      <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/breeds"><DogsPage/></Route>
            {/* <Route exact path="/breeds/:index"><CarDetailsPage cars={cars}/></Route> */}
            <Route path="/"><NotFoundPage/></Route>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
