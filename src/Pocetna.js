import Rreact from "react"
import React from "react";
import {Link} from "react-router-dom";


export const  Pocetna= (props) => {

    return(
        <div >
            <div style={{ marginLeft: '70%', marginTop:'1%'}}>
            <Link to="/Signup"> <button style={{backgroundColor:'lightblue'}} className='btn btn-success btn-md mybtn'>REGISTRACIJA</button></Link>
            <Link to="/Login"> <button style={{backgroundColor:'lightblue'}} className='btn btn-success btn-md mybtn'>PRIJAVA</button></Link>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh'}}>
            <img src="/slike/SecretSantaPocetna.jpg"/>
            </div>

        </div>
    );
    }