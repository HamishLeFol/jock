//import React from "react"
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


function ConnexionModule() {

    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    //const history = useNavigate();

    const connexion = (event) => {
        const loginData = {
            pseudo: pseudo,
            password: password
        }
        axios.post('https://localhost:8000/Login', loginData)
            .then(response => {
                const authToken = response.data.token;
                console.log("connexion effectué");
                if(authToken){
                    localStorage.setItem('token', authToken);//sauvegarde du token
                    //history.push('/dashboard');//changement de page
                }
                console.log("auth token = "+localStorage.getItem('token'));
            }).catch(error => {
                setErrorMessage("erreur d'identification : "+error);
                setPseudo('');
                setPassword('');
            });    

    };    


    return (
        <section className="form4 cid-tsEejxwI9g" id="form4-h">
        <div className="col-lg-3 offset-lg-1 mbr-form">
                <form onSubmit={connexion} className="mbr-form form-with-styler">
                    
                    <div className="dragArea row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="mbr-section-title mb-4 display-2">
                                <strong>Connexion</strong></h1>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="mbr-text mbr-fonts-style mb-4 display-7">
                                Inscrivez vous.<br /></p>
                        </div>
                        <div className="col-lg-12 col-md col-12 form-group mb-3">
                            <input type="text" name="pseudo" value={pseudo} onChange={(event) => setPseudo(event.target.value)} required placeholder="pseudo" className="form-control" id="pseudo-form4-h" />
                        </div>
                        <div className="col-lg-12 col-md col-12 form-group mb-3">
                            <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="mot de passe" className="form-control" id="password-form4-h" />
                        </div>

                        {errorMessage && <div>{errorMessage}</div>}

                        <div className="col-12 col-md-auto mbr-section-btn">*
                            <button type="submit" className="btn btn-primary display-4">Submit</button>
                        </div>
                        
                        
                        
                    </div>
                </form> 
            </div>
            <div>
                token récup = {localStorage.getItem('token')}
            </div>
        </section>
    )
}

export default function ConnexionPage() {
    return (
    <div>
        <ConnexionModule />
    </div>
    )
}