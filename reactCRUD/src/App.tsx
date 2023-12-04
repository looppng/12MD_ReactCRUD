import WeaponForm from './components/WeaponForm';
import WeaponWrapper from './components/WeaponWrapper';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/NotFound';



const App: React.FC = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
