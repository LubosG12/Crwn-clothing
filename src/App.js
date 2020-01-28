import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ContactPage from './pages/contact/contact.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments  } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';



class App extends React.Component {
  unsubscribeFromAuth = null;


  componentDidMount() {

    const {setCurrentUser, collectionsArray} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
          setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
           });
         });
       } else {
       setCurrentUser(userAuth);
       // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })))
    }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
  return (
    <div className="page-container">
      <div className="main-content">
      <Header/>
        <Switch>
         <Route exact path='/'>
            <HomePage />
         </Route>
         <Route path='/shop' component={ShopPage}>
         </Route>
         <Route exact path='/contact'>
            <ContactPage />
         </Route>
         <Route exact path='/checkout'>
            <CheckoutPage />
         </Route>
         <Route exact path='/signin' 
         render={ () => this.props.CurrentUser ? 
         (<Redirect to='/' />) 
         : 
         (<SignInAndSignUpPage />)
         }>
         </Route>
       </Switch>
       </div>
       <Footer/>
    </div>
  );
  } 
}

const mapStateToProps = createStructuredSelector({
  CurrentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
