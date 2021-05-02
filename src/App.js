import "./App.sass";
import Header from "./Components/Header";
import AddLink from "./views/AddLink";
import Home from "./views/Home"
import Navbar from "./Components/Navbar"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div className="container">
                <Header />
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/add-link">
                            <AddLink />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}