class LandingSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="site-banner margin-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 site-title">
                        <h3 class="title-text h3-title">Bersiap Untuk</h3>
                        <h1 class="title-text h1-title text-uppercase ">NEW NORMAL</h1>
                        <div class="space-80"></div>
                        <h4 class="title-text text-uppercase">#DirumahAja</h4>
                        <p>Jika tidak ada hal mendesak yang mengharuskan 
                                keluar rumah dan pastikan tubuh dalam kondisi sehat.</p>
                        <div class="space-20"></div>
                        <div class="site-buttons">
                            <div class="d-flex flex-row flex-wrap">
                                <button type="button" href="#news" class="btn button primary-button mr-4 text-uppercase">
                                News
                                    </button>
                                <button type="button" href="#tips" class="btn button secondary-button text-uppercase">
                                Tips
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 banner-image">
                        <img src="./image/landing.svg" alt="banner-img" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>`;
    }
}
customElements.define("landing-section", LandingSection);