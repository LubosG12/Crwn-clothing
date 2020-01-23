import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import userReducer from '../../redux/user/user.reducer';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop"> 
            SHOP 
            </Link>
            <Link className="option" to="/contact"> 
            CONTACT 
            </Link>
            {
                currentUser ?
                ( <React.Fragment>
                <div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>
                <div className="option option-username"> Hello, {currentUser.displayName.split(' ')[0]}</div>
                </React.Fragment>)
                
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)

const mapStateToProps = ({ user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);