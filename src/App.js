import './App.css';


import React, {Component} from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import '../src/index.css'


import {Admin} from "./Admin";
import {auth} from "./index";
import {Login} from "./Login";
import {Signup} from "./Signup";
import {Radnik} from "./Radnik";
import {Pocetna} from "./Pocetna";
import firebase from "firebase/compat";

export  class App extends Component{

    /*    state = {
           user: null,
       }


        componentDidMount() {

           // uzima info od usera za navbar
         auth.onAuthStateChanged(user => {
               if (!user) {
                   firebase.auth().signOut().then(function () {
                       this.props.history.replace("/")
                   }).catch(function (error) {
                       console.log(error);
                   });
               }
               else {
                   this.setState({
                       user: null
                   })
               }
           })

       }*/



        render(){
        return(
            <div>
                <Router>
                    <Routes>
                        <Route path="/" caseSensitive={false} element={<Pocetna />} />
                        <Route path="/login" caseSensitive={false} element={<Login />} />
                        <Route path="/signup" caseSensitive={false} element={<Signup />} />
                        <Route path="/admin" caseSensitive={false} element={<Admin />} />
                        <Route path="/radnik" caseSensitive={false} element={<Radnik />} />
                    </Routes>
                </Router>



            </div>
        )
    }
}
export default App;


