import './App.css';
import React, {useEffect, useState} from 'react';
import firebase from "firebase/compat";

import {auth,db} from "./index";
import * as url from "url";
export const Admin = (props) => {



    const[broj,setBroj]=useState(0)
    const [users, setUsers] = useState([]);
    const [id, setID] = useState([]);


    useEffect(() => {
        read();
    }, [])

     function postaviParove(){
        read();
        console.log(users.length)
        if(users.length % 2 === 0){
            let rand = 1 + Math.floor(Math.random() * (users.length-3));
            for (let i = 0; i < users.length; i++) {

                 db.collection('korisnici').doc(users[i].id).update({
                    par: users[(i+rand)%(users.length)].korisnik.ime
                })

            }
        }
        if(users.length % 2 === 1){
            let rand = 1 + Math.floor(Math.random() * (users.length-3));
             db.collection('korisnici').doc(users[rand].id).update({
                par: "Nema para"
            })
            for (let i = 0; i < users.length; i++)  {
                if (i !== rand){

                     db.collection('korisnici').doc(users[i].id).update({
                        par: users[(i+rand)%(users.length)].korisnik.ime
                    })
                }
            }
        }



    }

    function read() {

        db.collection("korisnici").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    //console.log(`${doc.id} => ${doc.data()}`);


                    let niz= querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            korisnik: doc.data()
                        })
                    );
                    let br=niz.length;
                    setUsers(niz);
                    //console.log(niz)
                    setBroj(br);
                });
            });
    }
    function renderObject() {


        return Object.entries(users).map(([key, value]) => {
            return (
<div>  <br></br>
                <div key={key}  style={
                    {
                        border: '2px solid lightblue',
                        textAlign:'center',
                        borderRadius: 10
                    }
                } >

                    <ul className="ispis" >
                        {/*<li> ID je: {value.id}</li>
                         <li> Email: {value.korisnik.email} </li>*/}
                        <br></br>
                        <p> Korisnik:  <span  style={{color:"#6ac1d9", margin:'2%'}} >{value.korisnik.ime}</span> </p>
                        <p> Email: <span  style={{color:"#6ac1d9"}} >{value.korisnik.email}</span> </p>
                        <p> Secret Santa par: <span style={{color:"#6ac1d9"}}>{value.korisnik.par} </span></p>


                    </ul>

                </div>
            </div>

            )
        })
    }
    return (

        <div >

        <div className="flex-container"    style={{ textAlign:'center'}} >
            <br></br>

            <h2>Trenutno u bazi imamo {broj}  registrovanih korisnika</h2>
            <h4>Ukoliko želite da generišete nove parove pritisnite dugme       </h4>
                <p><button style={{backgroundColor:'lightblue'}} className='btn btn-success btn-md mybtn' onClick={postaviParove}>
                    Generiši nove parove </button> </p>

            {renderObject()}
        </div>
        </div>


    );
}


