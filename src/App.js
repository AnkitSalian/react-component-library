import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form/Form';
import './App.css';
// import Slider from './components/ImageSlider/Slider';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/">
            <Form />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
