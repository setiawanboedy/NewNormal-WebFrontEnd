class SubscribeSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="about-area subscribe-us-area">
            <div class="container-fluid bg-artikel subscribe">
                <div class="row">
                    <div class="col-md-5 left-img">
                        <div class="about-image subscribe-image">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/256492/cXsiNryL.png" alt="About us" class="img-fluid">
                        </div>
                    </div>
                    <div class=" col-md-4 right-img">
                        <h2 class=" pt-3">
                            Subscribe Sekarang untuk Dapatkan Tips !
                        </h2>
                        <div class="input-textbox">
                            <input type="text" id="txtemail" class="form-control" placeholder="Email">
                        </div>
                        
                    </div>
                    <button type="button" class="btn btn-danger text-uppercase">Subscribe</button>
                </div>
            </div>
        </section>`;
    }
}
customElements.define("subscribe-section", SubscribeSection);