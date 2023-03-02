//import React from "react"
import axios from 'axios';
import {useState, useEffect} from 'react';



function ConnexionModule() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result  = await axios(
                'http://localhost/api',
            );
            setData(result.data);
        };
        fetchData();

    }, []);


    return (
        <section data-bs-version="5.1" className="form4 cid-tsEejxwI9g" id="form4-h">
        <div className="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
                <form action="https://mobirise.eu/" method="POST" className="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="N1HBD6a1BAMxAaBSOgGLGDJ5gbVkBJVzCnYLeGwbd1aWrsOxypybtAsG65/XmsKoeLqisgAQVoER+ijw7yHr19eEo0CRTtZosDhU9vYplXhmYnKS7Wbzrn+Z2L2l2YXm" />
                    <div className="row">
                        <div hidden="hidden" data-form-alert="" className="alert alert-success col-12">Thanks for filling
                            out the form!</div>
                        <div hidden="hidden" data-form-alert-danger="" className="alert alert-danger col-12">Oops...! some
                            problem!</div>
                    </div>
                    <div className="dragArea row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="mbr-section-title mb-4 display-2">
                                <strong>Connexion</strong></h1>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="mbr-text mbr-fonts-style mb-4 display-7">
                                Inscrivez vous.<br /></p>
                        </div>
                        <div className="col-lg-12 col-md col-12 form-group mb-3" data-for="name">
                            <input type="text" name="name" placeholder="pseudo" data-form-field="name" className="form-control" id="name-form4-h" />
                        </div>
                        <div className="col-lg-12 col-md col-12 form-group mb-3" data-for="email">
                            <input type="password" name="email" placeholder="mot de passe" data-form-field="email" className="form-control" id="email-form4-h" />
                        </div>
                        <div className="col-12 col-md-auto mbr-section-btn"><button type="submit" className="btn btn-primary display-4">Submit</button></div>
                    </div>
                </form>
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