import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Signup.css'
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';


const Signup = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        fname: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const handleFaceBook = () => {
        var fProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fProvider).then(function (result) {
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email: email }
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            const newUserInfo = { ...user }
            newUserInfo.error = error.message;
            setUser(newUserInfo);
        });
    }
    const handleGoogle = () => {
        var gProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(gProvider).then(function (result) {
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email: email }
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
        }).catch(function (error) {
            const newUserInfo = { ...user }
            newUserInfo.error = error.message;
            setUser(newUserInfo);
        });
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.fname)
                })
                .catch(function (error) {
                    console.log(error.message)
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });

            if (!newUser && user.email && user.password) {
                firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                    .then(res => {
                        const newUserInfo = { ...user }
                        newUserInfo.error = '';
                        newUserInfo.success = true;
                        setUser(newUserInfo);
                        console.log("sign in",res.user);
                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        const newUserInfo = { ...user }
                        newUserInfo.error = error.message;
                        newUserInfo.success = false;
                        setUser(newUserInfo);
                        // ...
                    });
            }
        }
        e.preventDefault();
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === "password") {
            const isPassValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPassValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const updateUserName = fname => {
        var user = firebase.auth().currentUser;
        
        user.updateProfile({
            displayName: fname,
        }).then(function () {
            console.log("Name Updated");
        }).catch(function (error) {
            // An error happened.
        });
    }

    return (
        <div>
            <div className="container">
            <p>{user.fname}</p>   
                <div className="login-form flex-column d-flex justify-content-center align-items-center">
                    <form onSubmit={handleSubmit}>
                        {newUser && <h2 className="text-left">Create an Account</h2>}
                        {!newUser && <h2 className="text-left">Login</h2>}
                        {newUser && <input name="fname" onBlur={handleBlur} className="field" type="text" placeholder="First Name" required />}
                        {newUser && <input className="field" type="text" placeholder="Last Name" />}

                        <input onBlur={handleBlur} name="email" className="field" type="text" placeholder="Username or Email" required />
                        <input onBlur={handleBlur} className="field" type="password" name="password" placeholder="Password" required />

                        {newUser && <input type="submit" value="Create an Account" className="d-block w-100 create-account" />}
                        {!newUser && <input type="submit" value="Login" className="d-block w-100 login" />}

                        <div className="new-account">
                            <input onChange={() => setNewUser(!newUser)} type="checkbox" />
                            <label className="login-label" htmlFor="newUser">Don't have an account? </label>
                        </div>
                    </form>
                    <div className="other-login-systems d-flex flex-column">
                        <div className="or">
                            <span>or</span>
                        </div>
                        <button className="google" onClick={handleGoogle}> <FontAwesomeIcon icon={faGoogle} /> Continue With Google</button>
                        <button className="facebook" onClick={handleFaceBook}> <FontAwesomeIcon icon={faFacebook} /> Continue With Facebook</button>
                    </div>
                    <p className="text-danger font-weight-bold">{user.error}</p>
                </div>
            </div>
        </div>
    );
};

export default Signup;