import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookContainer from './BookContainer';
import Categories from './Categories';
import Header from './Header';

function App() {
  return (
    <div className="bg-light app-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={BookContainer} />
          <Route exact path="/categories" component={Categories} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
