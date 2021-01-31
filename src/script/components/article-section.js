class ArticleSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="about-area">
        <div class="container-fluid bg-artikel container">
            <div class="row">
                <div class="col-lg-6 col-md-10">
                    <div class="about-image">
                        <img src="./image/imageArtikel.svg" alt="About us" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 about-title">
                    <h2 class="text-lg-left pt-3">
                        Apa itu <br> New Normal ?
                    </h2>
                    <div class="paragraph py-4 w-75">
                        <p class="para">
                            Menurut Achmad Yuri, tatanan, kebiasaan dan perilaku yang baru 
                            berbasis pada adaptasi untuk membudayakan 
                            perilaku hidup bersih dan sehat inilah yang 
                            kemudian disebut sebagai new normal. 
                        </p>
                        <p class="para">
                        Cara yang dilakukan dengan rutin cuci tangan 
                        pakai sabun, pakai masker saat keluar rumah, 
                        jaga jarak aman dan menghindari kerumunan.
                        </p>
                    </div>
                    <button type="button" class="btn button primary-button text-uppercase">More info</button>
                </div>
            </div>
        </div>
        </section>`;
    }
}
customElements.define("article-section", ArticleSection);