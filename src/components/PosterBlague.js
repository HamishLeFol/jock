
function PosterBlagueModule() {

    return (
        <section data-bs-version="5.1" class="form1 cid-tsJloPgkBa mbr-fullscreen" id="form1-k">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                        <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler" data-form-title="Form Name">
                            <div class="row">
                                <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling
                                    out the form!</div>
                                <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">Oops...! some
                                    problem!</div>
                            </div>
                            <div class="dragArea row">
                                <div class="col-12">
                                    <h1 class="mbr-section-title mb-4 mbr-fonts-style align-center display-2">
                                        <strong>Partagez votre blague.</strong><br/><strong><br/></strong></h1>
                                </div>
                                <div class="col-12">

                                </div>
                                <div class="col-md col-12 form-group mb-3" data-for="name">
                                    <input type="text" name="name" placeholder="Name" data-form-field="Name" class="form-control" id="name-form1-k"/>
                                </div>
                                <div class="col-md col-12 form-group mb-3" data-for="email">
                                    <input type="email" name="email" placeholder="Email" data-form-field="Email" class="form-control" id="email-form1-k"/>
                                </div>
                                <div class="mbr-section-btn col-12 col-md-auto"><button type="submit" class="btn btn-primary display-4">Subscribe</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function posterBlaguePage() {
    return (
    <div>
        <PosterBlagueModule />
        
    </div>
    )
}