import WeaponForm from './components/WeaponForm';
import { WeaponsProvider } from './components/WeaponsContext';
import WeaponWrapper from './components/WeaponWrapper';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/NotFound';



const App = () => {
  return (
    <Router>
      <WeaponsProvider>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Navbar/>
              <WeaponWrapper/>
            </Route>
            <Route path='/createWeapon'>
              <Navbar/>
              <WeaponForm/>
              <WeaponWrapper/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </WeaponsProvider>
    </Router>
  );
};

export default App;
