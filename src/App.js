import './app.scss';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Home from './components/pages/Home';
import Zayn from './components/pages/Zayn';
import Persons from './components/pages/Persons';
import { personsImages } from "./assets/index";

function App() {

  const data = {
    bella: personsImages[0],
    alana: personsImages[1],
    anwar: personsImages[2],
    marielle: personsImages[3],
    mohammed: personsImages[4]
  }

  return (
    <>
      <Router >
        <Switch >
          {/* home component */}

          <Route path="/" exact>
            <Home />
          </Route>

          {/* sibling-section */}

          <Route path="/bella" exact>
            <Persons name={data.bella.about.name} desc={data.bella.about.desc} image={data.bella.image} />
          </Route>
          <Route path="/alana" exact>
            <Persons name={data.alana.about.name} desc={data.alana.about.desc} image={data.alana.image} />
          </Route>
          <Route path="/anwar" exact>
            <Persons name={data.anwar.about.name} desc={data.anwar.about.desc} image={data.anwar.image} />
          </Route>
          <Route path="/marielle" exact>
            <Persons name={data.marielle.about.name} desc={data.marielle.about.desc} image={data.marielle.image} />
          </Route>
          <Route path="/mohammed" exact>
            <Persons name={data.mohammed.about.name} desc={data.mohammed.about.desc} image={data.mohammed.image} />
          </Route>

          {/* partner component */}

          <Route path="/zayn" exact>
            <Zayn />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
