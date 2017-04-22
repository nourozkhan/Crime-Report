import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from "react-router"
import { App, SignIn, SignUp, Home, Report } from './component'
// import Data from "./container/data"
// import TabsExampleSwipeable from "./container/data"
export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={SignIn}/>
            <Route path="/SignUp" component={SignUp}/>
            <Route path="/Home" component={Home} />
            <Route path="/report" component={Report}/>
        </Route>

    </Router>
) 