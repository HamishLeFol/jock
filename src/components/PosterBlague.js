import axios from 'axios';

function handleSubmit(event) {
    event.preventDefault();
    
    const name = event.target.elements.name.value;
    const city = event.target.elements.city.value;
    const postalCode = event.target.elements.postal_code.value;
    const number = event.target.elements.number.value;
    const street = event.target.elements.street.value;
    const complement = event.target.elements.complement.value;

    axios.post('https://localhost:8000/addRestoJson',
    {name,
    city,
    postalCode,
    number,
    street,
    complement,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}
function PosterRestoModule() {

const postData = async (url = '', data = {}) => {

  return response.data;
};


    return (
        <section data-bs-version="5.1" class="form1 cid-tsJloPgkBa mbr-fullscreen" id="form1-k">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                        <form action="" method="POST" class="mbr-form form-with-styler" data-form-title="Form Name">
                            <div class="row">
                                <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling
                                    out the form!</div>
                                <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">Oops...! some
                                    problem!</div>
                            </div>
                            <div class="dragArea row">
                                <div class="col-12">
                                    <h1 class="mbr-section-title mb-4 mbr-fonts-style align-center display-2">
                                        <strong>Partagez votre restaurant.</strong><br /><strong><br /></strong></h1>
                                </div>
                                <div class="col-12">

                                </div>
                                <div class="col-lg-12 col-md col-12 form-group mb-3" data-for="name">
                                    <input type="text" name="name" placeholder="Nom" data-form-field="Name" class="form-control" id="name-form1-k" />
                                </div>
                                <div class="col-lg-12 col-md col-12 form-group mb-3" data-for="city">
                                    <input type="text" name="city" placeholder="Ville" data-form-field="city" class="form-control" id="city-form1-k" />
                                </div>
                                <div class="col-lg-12 col-md col-12 form-group mb-3" data-for="postal_code">
                                    <input type="text" name="postal_code" placeholder="Code Postal" data-form-field="postal_code" class="form-control" id="postal_code-form1-k" />
                                </div>
                                <div class="col-lg-12 col-md col-12 form-group mb-3" data-for="number">
                                    <input type="text" name="number" placeholder="Numéro de rue" data-form-field="number" class="form-control" id="number-form1-k" />
                                </div>
                                <div className="col-lg-12 col-md col-12 form-group mb-3" data-for="street">
                                    <input type="text" name="name" placeholder="Rue" data-form-field="street" className="form-control" id="street-form1-k" />
                                </div>
                                <div className="col-lg-12 col-md col-12 form-group mb-3" data-for="complement">
                                    <input type="text" name="complement" placeholder="Complément" data-form-field="complement" className="form-control" id="complement-form1-k" />
                                </div>
                                <div class="mbr-section-btn col-12 col-md-auto"><button type="submit" class="btn btn-primary display-4">Poster</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function posterRestoPage() {
    return (
        <div>
            <PosterRestoModule />

        </div>
    )
}