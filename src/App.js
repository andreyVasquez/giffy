import { Link, Route } from "wouter";

import Home from "pages/Home";
import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";

import StaticContext from "context/StaticContext";
import { GifsContextProvider } from "context/GifsContext";

import Logo from "../src/logo.png";

import "./App.css";

export default function App() {
  return (
    <StaticContext.Provider value={
      {
        name: "Gifs",
      }
    }>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src={Logo} />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}
