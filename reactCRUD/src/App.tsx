import WeaponForm from './components/WeaponForm';
import WeaponWrapper from './components/WeaponWrapper';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/NotFound';



const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
      <Navbar/>
        <Switch>
          <Route exact path='/'>
            <WeaponWrapper/>
          </Route>
          <Route path='/createWeapon'>
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
