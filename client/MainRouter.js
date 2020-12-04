import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'
import Forms from './form/Forms'
import Certificate from './form/Certifcate'
import Pdf from './form/Pdf'
const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/form/new" component={Forms}/>
        <Route path="/form/" component={Certificate}/>
      </Switch>
    </div>)
}

export default MainRouter
