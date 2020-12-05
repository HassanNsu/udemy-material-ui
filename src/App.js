import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Header from "./components/ui/Header";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import theme from "./components/ui/Theme";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <ThemeProvider theme={theme}>


      <Router>
        <Header />
        <Switch>

          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/itemone" component={() => <div>Item One</div>} />
          <Route exact path="/itemtwo" component={() => <div>Item Two</div>} />
          <Route exact path="/itemthree" component={() => <div>Item Three</div>} />
          <Route exact path="/itemfour" component={() => <div>Item Four</div>} />
          <Route exact path="/itemfive" component={() => <div>Item Five</div>} />
          <Route exact path="/itemsix" component={() => <div>Item Six</div>} />
        </Switch>

      </Router>


    </ThemeProvider>
  );
}




export default App;
