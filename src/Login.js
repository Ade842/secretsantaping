import React, {useState} from 'react';
import firebase from "firebase/compat";
import {Link} from "react-router-dom";
import {auth,db} from "./index";



export const Login = (props)=>{

    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');


    const login = (e) => {


        //e.preventDefault();
        auth.signInWithEmailAndPassword(email, Password).then(()=>{
            auth.onAuthStateChanged(function(user) {
                if (user) {
                    console.log("ulogovan")
                    /*db.collection("korisnici").get()
                        .then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                //console.log(`${doc.id} => ${doc.data()}`);


                                let niz= querySnapshot.docs.map((doc) => ({
                                        id: doc.id,
                                        korisnik: doc.data()
                                    })
                                );
                                setUsers(niz);
                            });
                        });
                    for (let i = 0; i<users.length;i++){
                        if (users[i].id == user.uid){
                            setIsAdmin(users[i].korisnik.jeLiAdmin)
                        }
                    }*/
                } else {
                    console.log("nisam Ulogovan")
                }
            });
        }).catch(err => setError(err.message));


    }


    return (

            <div className='container'>
                <br />
                <h2>PRIJAVA</h2>
                <br />
                <form autoComplete="off" className='form-group' onSubmit={login}>

                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' required
                           onChange={(e) => setEmail(e.target.value)} value={email} />
                    <br />
                    <label htmlFor="passowrd">Šifra</label>
                    <input type="password" className='form-control' required
                           onChange={(e) => setPassword(e.target.value)} value={Password} />
                    <br />
                    <Link to="/Radnik"><button onClick={login} className='btn btn-success btn-md mybtn'>PRIJAVA</button></Link>


                </form>
                {error && <span className='error-msg'>{error}</span>}
                <br />
                <span>Ukoliko želite napraviti račun idite
                     <Link to="/Signup"> Ovdje</Link>


            </span>

        </div>
    )


}

