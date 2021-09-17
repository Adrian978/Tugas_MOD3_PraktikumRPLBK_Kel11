import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Kasir from "./Components/Kasir";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <div className="title">
            <p>Kelompok 11</p>
          </div>
          <nav>
            <Link className="text" to="/">
              Menu Kasir
            </Link>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Kasir} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
