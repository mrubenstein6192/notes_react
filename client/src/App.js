import React from 'react';
import { BrowderRouter as Router, Route, Switch} from "react-router-dom";
import Notes from "./pages/Notes";
import AddUpdateNote from "./pages/AddUpdateNote";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path ="/" component={Notes} />
          <Route exact path = "/add" component={AddUpdateNote} />
          <Route exact path = "/update/:id" component={AddUpdateNote} />
          {/* default route */}
          <Route render={() => <h1>poop 404 error</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
