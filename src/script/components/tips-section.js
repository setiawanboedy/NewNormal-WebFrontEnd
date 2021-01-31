class TipsSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="tips-area">
        <div class="container-fluid bg-artikel container">
            <div class="row justify-content-md-center">
                <div class="col-lg-12 text-center services-title">         
                    <h1 class="text-uppercase title-text h1-title">Bersiap <br>The New Normal <br> 
                        <span class="tips">Tetap Lakukan</span></h1>
                        <span class=" justify-content-md-center"><a class="new-tips text-uppercase">5 Tips ini</a></span>
                </div>
                
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-10">
                    <div class="about-image">
                        <img src="./image/stayhome.png" alt="About us" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 about-title">
                    <h3 class="text-lg-left pt-4">
                        Menggunakan Masker
                        
                    </h3>
                    <div class="paragraph py-4 w-75">
                        <p class="para">
                            Tetap berada #dirumah jika tidak ada hal mendesak yang mengharuskan keluar
                            rumah dan pastikan tubuh selalu dalam
                            kondisi yang sehat.                             
                        </p>
                    </div>
                </div>
            </div>
            <div class="row flex-row-reverse">
                <div class="col-lg-4 col-md-10">
                    <div class="about-image">
                        <img src="./image/distance.png" alt="About us" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 about-title ">
                    <h3 class="text-lg-left pt-4 alignright">
                        Menjaga Jarak
                    </h3>
                    <div class="paragraph py-4 w-75 alignright">
                        <p class="para text-md-right">
                            Jauhi keramaian, dan tetap berjaga jarak minimal 1.5 meter
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-10">
                    <div class="about-image">
                        <img src="./image/jalan-jalan.png" alt="About us" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 about-title">
                    <h3 class="text-lg-left pt-4">
                        Menjaga Kebersihan
                    </h3>
                    <div class="paragraph py-4 w-75">
                        <p class="para">
                            Segera berganti pakaian dan mandi setelah berpergian keluar rumah
                        </p>
                    </div>
                </div>
            </div>
            <div class="row flex-row-reverse">
                <div class="col-lg-4 col-md-10">
                    <div class="about-image">
                        <img src="./image/joging.png" alt="About us" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 about-title">
                    <h3 class="text-lg-left pt-4 alignright">
                        Makanan Sehat
                    </h3>
                    <div class="paragraph py-4 w-75 alignright">
                        <p class="para text-md-right">
                            Penuhi kebutuhan air harian, dan tetap konsumsi makanan bergizi 
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-10">
                    <div class="about-image">
                        <img src="./image/cucitangan.png" alt="About us" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 about-title">
                    <h3 class="text-lg-left pt-4">
                        Mencuci Tangan
                    </h3>
                    <div class="paragraph py-4 w-75">
                        <p class="para">
                            Cuci tangan sesering mungkin dengan sabun dan air mengalir atau menggunakan handsanitizer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    }
}
customElements.define("tips-section", TipsSection);