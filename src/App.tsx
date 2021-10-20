import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Article from "./pages/Article";
import ArticleListing from "./pages/ArticleListing";
import CreateArticle from "./pages/CreateArticle";
import EditArticle from "./pages/EditArticle";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/article">
            <ArticleListing />
          </Route>
          <Route path="/article/:id">
            <Article />
          </Route>
          <Route path="/create-article">
            <CreateArticle />
          </Route>
          <Route path="/edit-article/:id">
            <EditArticle />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
