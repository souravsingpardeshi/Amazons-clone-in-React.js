import React, {useState} from "react";
import "./Login.css";
import {auth} from "./firebase.js";
import { Link, useHistory } from "react-router-dom";
function Login() {
const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const login = event => {
	event.preventDefault();//I hate refresh
auth
.signInWithEmailAndPassword(email,password)
.then((auth) => {
history.push("/");
	})
.catch(e => alert(e.message));
};
const register = event => {
	event.preventDefault();//I hate refresh
	auth.createUserWithEmailAndPassword(email,password)
	.then(auth => {
history.push("/");
	})
	.catch(e => alert(e.message));
};

	return (
		<div className="login">
		<Link to="/">
		<img className="login__logo"
		src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png" alt="" />
		</Link>
		<div className="login__container">
		<h1>Sign in</h1>
		<form>
		<h5>E-mail</h5>
		<input value={email} onChange={event =>setEmail(event.target.value)} type="email" />
		<h5>Password</h5>
		<input value={password} onChange={event =>setPassword(event.target.value)} type="password" />
		<button onClick={login} type="submit" className="login__sign">
		Sign in
		</button>
		</form>
		<p>
		By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
		<button onClick={register} className="login__new">
		Create your Amazon Account
		</button>
		</div>
		</div>
		);
}

export default Login;