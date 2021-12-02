import React, { useState } from 'react'


import firebase from "firebase/compat";
import {Link} from "react-router-dom";
import {auth,db} from "./index";
import {Login} from "./Login";
import {Radnik} from "./Radnik";

export const Signup = (props) => {
    //let db = firebase.firestore();
    //let auth = firebase.auth();

    const [ime, setIme] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [jeLiAdmin, setAdmin] = useState(false);
    const [par, setPar] = useState('par');
    const [error, setError] = useState('');

    // signup
    const Signup = (e) => {
        e.preventDefault();
        console.log('uspjesno ste poslali fomru')
        console.log(ime,email,Password);

        auth.createUserWithEmailAndPassword(email, Password).then((cred) => {
            db.collection('korisnici').doc(cred.user.uid).set({
                email: email,
                ime: ime,
                Password: Password,
                jeLiAdmin:false,
                par: ''


            }).then(() => {
                setIme('');
                setEmail('');
                setPassword('');
                setAdmin(false);
                setPar('');
                setError('');

            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }

    return (
        <div className='container'>
            <br />
            <h2>REGISTRACIJA</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={Signup}>
                <label htmlFor="name">Ime</label>
                <input type="text" className='form-control' required
                       onChange={(e) => setIme(e.target.value)} value={ime} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                       onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="passowrd">Šifra</label>
                <input type="password" className='form-control' required
                       onChange={(e) => setPassword(e.target.value)} value={Password} />
                <br />
                 <button type="submit" className='btn btn-success btn-md mybtn'>REGISTRACIJA</button>
            </form>
            {error && <div className='error-msg'>{error}</div>}
            <br />
            <span>Već posjedujete korisnički račun
                 <Link to="/Login"> Ovdje</Link>

            </span>
        </div>
    )
}