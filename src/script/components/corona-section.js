class CoronaTrack extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `

        <section class="services-area margin-count bg-count">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center services-title">
                        <h1 class="text-uppercase title-text h1-title">Covid-19 Tracking</h1>
                    </div>
                </div>
                <div class="container card ring-1 services-list shadow-box">
                    <div class="row ring-2 justify-content-md-center">
                        <div class="col-sm-3">
                            <div class="services">
                                <div class=" text-center">
                                    <h5 class="card-titletext-uppercase font color-red"><span class="counter" id="data-meninggal"></span></h5>
                                    <p class="card-text text-secondary font20">
                                        Meninggal
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="services ">
                                <div class=" text-center">
                                    <h5 class="card-title counter text-uppercase font color-green"><span class="counter" id="data-sembuh"></span></h5>
                                    <p class="card-text text-secondary font20">
                                        Sembuh
                                    </p>
                                </div>
                            </div>
                           
                        </div>
                        <div class="col-sm-3">
                            <div class="services">
                                <div class="text-center">
                                    <h5 class="card-title counter text-uppercase font color-blue"><span class="counter" id="data-positif"></span></h5>
                                    <p class="card-text text-secondary font20">
                                        Dikonfirmasi
                                    </p>
                                </div>
                            </div>
                            <p class=" text-md-center">Update frome: <a class="color-blue" href="https://covid19.go.id/">Covid.go.id</a></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>`;
    }
}
customElements.define("corona-section", CoronaTrack);