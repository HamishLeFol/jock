import React from "react"

function HeadConnexion(){
    return(<div>
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="generator" content="Mobirise v5.5.2, mobirise.com"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
            <link rel="shortcut icon" href="../assets/images/logo.png" type="image/x-icon"/>
            <meta name="description" content=""/>
             
            
            <title>page_connexion</title>
            <link rel="stylesheet" href="../assets/web/assets/mobirise-icons/mobirise-icons.css"/>
            <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap-grid.min.css"/>
            <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap-reboot.min.css"/>
            <link rel="stylesheet" href="../assets/dropdown/css/style.css"/>
            <link rel="stylesheet" href="../assets/socicon/css/styles.css"/>
            <link rel="stylesheet" href="../assets/theme/css/style.css"/>
            <link rel="preload" href="https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
            <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap"/></noscript>
            <link rel="preload" as="style" href="../assets/mobirise/css/mbr-additional.css"/><link rel="stylesheet" href="../assets/mobirise/css/mbr-additional.css" type="text/css"/>
        </head>
    </div>)
}

function ConnexionModule() {
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
        <HeadConnexion />
        <body>
            <ConnexionModule />
        </body>
    </div>
    )
}