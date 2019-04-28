import React, { Component } from 'react';
import { Route ,Switch} from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'

class RootRouter extends Component{

render(){

return (
<div>
    <Switch>
      <Route path="/dashboard" props={this.props} component={Dashboard} />
      <Route path="/" props={this.props} component={Login} />
    </Switch>
</div>
)}
}export default RootRouter;
