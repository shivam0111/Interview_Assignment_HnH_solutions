import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux';
import Home from "./components/Home"
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import store from "./store/index";
import details from './components/Details';
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/details/:id' exact component={details}/>
      </Provider>
    </Router>
  );
}

export default App;
