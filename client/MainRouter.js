import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import Forms from './form/Forms'
import Certificate from './form/Certifcate'
const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        {/* <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/> */}
        <Route exact path="/" component={Home}/>
        <Route exact path="/form/new" component={Forms}/>
        <Route path="/form/:formId" component={Certificate}/>
      </Switch>
    </div>)
}

export default MainRouter
