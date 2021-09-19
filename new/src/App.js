import logo from './logo.svg';
import './App.css';
import MenuListComposition from './Menulist';
import MyEvent from './MyEvent';
import MyProfile from './MyProfile';
import ExploreEvent from './ExploreEvent';
import EventHistory from './EventHistory';
import AddButton from './PlusButton';
import PrivateEvent from './PrivateEvent';
import PublicEvent from './PublicEvent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Happy Go Lucky</h1>
       
      <MenuListComposition/>
      <AddButton/>
      <Switch> 
        <Route path="/MyProfile" component={MyProfile} />
        <Route path="/MyEvent" component={MyEvent} />
        <Route path="/ExploreEvent" component={ExploreEvent} />
        <Route path="/EventHistory" component={EventHistory} />
        <Route path="/PrivateEvent" component={PrivateEvent} />
        <Route path="/PublicEvent" component={PublicEvent} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
