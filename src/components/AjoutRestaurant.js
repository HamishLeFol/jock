import { useState } from 'react';
import axios from "axios";

function AjoutRestaurantModule(){
    const [form, setFrom] = useState(
        {}
    );
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://localhost:8000/AddRestoJson", JSON.stringify(form))  
        .then((response) => {console.log(response);});
        console.log("ddd "+ JSON.stringify(form));
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFrom((prev) => {
            return { ...prev, [name]: value };
        });
    };

    return(

        <section data-bs-version="5.1" className="form5 cid-tsPrbV9dQA" id="form5-q">
            
            
        <div className="container">
            <div className="mbr-section-head">
                <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Ajoutez un restaurant</strong></h3>
                
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                    <form onSubmit={handleSubmit} method="POST" className="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="S6w0+ErdcLMtY8bF2IMqCRaNT4/8G/rCTvm6rRhRHMJ9HlftANiVN2njGPBGAzEh2Std7R5S9Ezfn6wdiS28ns/rzN8k4cfywX94syi5WapB3Xr7E/HxrGl34Js08H8Z"/>
                        <div className="row">
                            <div hidden="hidden" data-form-alert="" className="alert alert-success col-12">Thanks for filling out
                                the form!</div>
                            <div hidden="hidden" data-form-alert-danger="" className="alert alert-danger col-12">Oops...! some problem!</div>
                        </div>
                        <div className="dragArea row">
                            <div className="col-md col-sm-12 form-group mb-3" data-for="name">
                                <input type="text" name="name" placeholder="Nom" data-form-field="name" className="form-control" onChange={handleChange} />
                            </div>
                            <div className="col-md col-sm-12 form-group mb-3" data-for="textarea">
                                <input type="text" name="city" placeholder="Ville" data-form-field="textarea" className="form-control"  onChange={handleChange}/>
                            </div>
                            <div className="col-md col-sm-12 form-group mb-3" data-for="textarea">
                                <input type="text" name="number" placeholder="Numero" data-form-field="textarea" className="form-control" onChange={handleChange}/>
                            </div>
                            <div className="col-12 form-group mb-3" data-for="textarea">
                                <input type="text" name="postalCode" placeholder="Code postal" data-form-field="textarea" className="form-control"  onChange={handleChange}/>
                            </div>
                            <div className="col-12 form-group mb-3" data-for="textarea">
                                <input type="text" name="street" placeholder="Rue" data-form-field="textarea" className="form-control"  onChange={handleChange}/>
                            </div>
                            <div className="col-12 form-group mb-3" data-for="textarea">
                                <input type="text" name="complement" placeholder="Complement" data-form-field="textarea" className="form-control"  onChange={handleChange}/>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn"><button type="submit" className="btn btn-primary display-4">Ajouter le restaurant</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}

export default function AjoutRestaurantPage() {
    return (
    <div>
        <AjoutRestaurantModule />
    </div>
    )
}