import React from "react";
import logo from './logo.svg';
import "./Header.css";
import {auth} from "./firebase.js";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
function Header() {
	const [{basket, user}] = useStateValue();
	const login =() => {
		if(user){
			auth.signOut();
		}
	};
	return (
		<nav className="header">
		<Link to="/">
		<img src={logo} className="header__logo" alt="logo" />
		</Link>
		<div className="header__search">
		<input type="text" className="header__searchInput" />
		<SearchIcon className="header__searchIcon" />
		</div> 
		<div className="header__Nav" />
		 <Link to={!user && "/login"} className="header__link">
		 <div onClick={login} className="header__option">
		 	<span className="header__optionLine1">hello {user?.email}</span>
		 	<span className="header__optionLine2">{user ? 'sign Out' : 'sign in'}</span>
		 </div>
		 </Link>
		 <Link to="/" className="header__link">
		 <div className="header__option">
		 	<span className="header__optionLine1">Return</span>
		 	<span className="header__optionLine2">& Order's</span>
		 </div>
		 </Link>
		 <Link to="/" className="header__link">
		 <div className="header__option">
		 	<span className="header__optionLine1">Your</span>
		 	<span className="header__optionLine2">Prime</span>
		 </div>
		  </Link>
		  <Link to="/checkout" className="header__link">
		  <div className="header__optionBasket">
		  <ShoppingCartIcon />
		  <span className="header__optionLine2 header__BasketCount">{basket?.length}</span>
		  </div>
		  </Link>
		</nav>
		);
}

export default Header;