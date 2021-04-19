import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './layout/Main'
import Header from './layout/Header'
import Customers from './layout/Customers'

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path='/customers' component={() => <Customers />} />
          <Route exact path='/' component={Main} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routes
