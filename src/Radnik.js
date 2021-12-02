import Rreact, {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import {auth} from "./index";
import firebase from "firebase/compat";
import React from "react";



export const  Radnik = ( props ) => {


       const [users, setUsers] = useState([]);
       const [trenutni, setTrenutni] = useState(0);
       const [id,setId] = useState("");




       let db = firebase.firestore();
       let auth = firebase.auth();
       useEffect(() => {
           read();
           postaviId();
           index();
       }, [])

        function read() {

            console.log("Ušao u bazu i čitam je")
        db.collection("korisnici").get()
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
        }

        function index(){
            console.log("Ušao u indeks i tražim ga")
           var userr = auth.currentUser;
           for(let i = 0;i<users.length;i++){
               if (userr.uid === users[i].id)
               {
                   setTrenutni(i);
               }
           }

        }
        function postaviId(){
           setId(auth.currentUser.uid);
        }


    function renderObject() {


        return Object.entries(users).map(([key, value]) => {
            if (value.id === id){
                return (

                    <div key={key} style={{
                        border: '2px solid lightblue',
                        textAlign:'center',
                        borderRadius: 10
                    }} >
                        <br></br>
                        <ul className="ispis">
                            {/*   <li> ID je: {value.id}</li>
                            <li> Ime: {value.korisnik.ime} </li>
                            <li> Email: {value.korisnik.email} </li>
                            <li> Secret Santa par: {value.korisnik.par}</li>*/}
                            <p> Korisnik:  <span  style={{color:"#6ac1d9", margin:'2%'}} >{value.korisnik.ime}</span> </p>
                            <p> Email: <span  style={{color:"#6ac1d9"}} >{value.korisnik.email}</span> </p>
                            <p> Secret Santa par: <span style={{color:"#6ac1d9"}}>{value.korisnik.par} </span></p>

                        </ul>
                    </div>


                )

            }


        })
    }



    return (

        <div className="flex-container"  style={{ textAlign:'center'}} >
            <br></br>
            <h2> Prijavili ste se na Vaš račun</h2>
            <br></br>
            {renderObject()}
        </div>


    );

   }
   /*


    const[broj,setBroj]=useState(0)
    const [users, setUsers] = useState([]);
    const [id, setID] = useState([]);

    let ternutni = firebase.auth().currentUser;


    let db = firebase.firestore();
    useEffect(() => {
        read();
    }, [])

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


        return Object.entries(users).map(([key, value], i) => {
            return (

                <div key={key} >

                    <ul className="ispis">
                        <li> ID je: {value.id}</li>
                        <li> Ime: {value.korisnik.ime} </li>
                        <li> Email: {value.korisnik.email} </li>
                        <li> Secret Santa par: {value.korisnik.par}</li>

                    </ul>
                </div>


            )
        })
    }
    return (

        <div className="flex-container"  >
            <h2>U bazi imamo {broj} korisnika</h2>
            return (
            <p> I'm the current user: {ternutni.email} </p>

            {renderObject()}
        </div>


    );
}*/