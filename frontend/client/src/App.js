import "./App.css";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { Route, Switch } from "react-router-dom";
import Error from "./components/error";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Data } from "./components/data";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


function App() {
  return (
    <>
      <Navbar />

      <Switch>
        
        <Route exact path="/">
          <Home/>
          <Data/>
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
