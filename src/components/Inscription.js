
function InscriptionModule(){

    return(

        <section data-bs-version="5.1" className="form5 cid-tsPrbV9dQA" id="form5-q">
            
            
        <div className="container">
            <div className="mbr-section-head">
                <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Inscription</strong></h3>
                
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                    <form action="https://mobirise.eu/" method="POST" className="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="S6w0+ErdcLMtY8bF2IMqCRaNT4/8G/rCTvm6rRhRHMJ9HlftANiVN2njGPBGAzEh2Std7R5S9Ezfn6wdiS28ns/rzN8k4cfywX94syi5WapB3Xr7E/HxrGl34Js08H8Z"/>
                        <div className="row">
                            <div hidden="hidden" data-form-alert="" className="alert alert-success col-12">Thanks for filling out
                                the form!</div>
                            <div hidden="hidden" data-form-alert-danger="" className="alert alert-danger col-12">Oops...! some problem!</div>
                        </div>
                        <div className="dragArea row">
                            <div className="col-md col-sm-12 form-group mb-3" data-for="name">
                                <input type="text" name="name" placeholder="Nom" data-form-field="name" className="form-control" id="name-form5-q" />
                            </div>
                            <div className="col-md col-sm-12 form-group mb-3" data-for="email">
                                <input type="text" name="email" placeholder="Prenom" data-form-field="email" className="form-control"  id="surname-form5-q"/>
                            </div>
                            <div className="col-md col-sm-12 form-group mb-3" data-for="textarea">
                                <input type="text" name="textarea" placeholder="pseudo" data-form-field="textarea" className="form-control" id="pseudo-form5-q"/>
                            </div>
                            <div className="col-12 form-group mb-3" data-for="url">
                                <input type="email" name="url" placeholder="E-mail" data-form-field="url" className="form-control"  id="email-form5-q"/>
                            </div>
                            <div className="col-12 form-group mb-3" data-for="url">
                                <input type="email" name="url" placeholder="Resaisissez E-mail" data-form-field="url" className="form-control"  id="remail-form5-q"/>
                            </div>
                            <div className="col-lg-12 col-md col-12 form-group mb-3" data-for="password">
                            <input type="password" name="password" placeholder="mot de passe" data-form-field="password" className="form-control" id="psswd-form4-h" />
                        </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn"><button type="submit" className="btn btn-primary display-4">Inscription</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}

export default function InscriptionPage() {
    return (
    <div>
        <InscriptionModule />
        
    </div>
    )
}