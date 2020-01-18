import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';




function App() {
  return (
    <div>
      <Header/>
        <Switch>
         <Route exact path='/'>
            <HomePage />
         </Route>
         <Route exact path='/shop'>
            <ShopPage />
         </Route>
         <Route exact path='/signin'>
            <SignInAndSignUpPage />
         </Route>
       </Switch>
    </div>
  );
}

export default App;
