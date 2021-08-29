import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

import HomePage from "./pages/Home";
import MemberDetails from "./pages/MemberDetails";

function App() {
    // return <HomePage />;
    return (
        <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/:memberId" component={MemberDetails}/>
              </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
