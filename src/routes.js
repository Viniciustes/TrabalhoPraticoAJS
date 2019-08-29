import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PageSobre from './pages/PageSobre';
import PageHome from './pages/PageHome';
import PageAddContact from './pages/PageAddContact';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact={true} component={PageHome} />
            <Route path="/home" component={PageHome} />
            <Route path="/sobre" component={PageSobre} />
            <Route path="/addcontact" component={PageAddContact} />
        </Switch>
    )
}

export default Routes