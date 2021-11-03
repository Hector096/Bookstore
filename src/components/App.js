import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/categories" component={Categories} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
