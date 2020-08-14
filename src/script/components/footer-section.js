class FooterSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =  `
        <h2>PERTANYAAN ATAU KOMENTAR ?</h2>
        <div class="container">
            <form method="post" action="#">
                <div class="row justify-content-md-center">
                    
                    <div class="data">
                        <ul class="input"><li>
                            <input type="text" name="name" placeholder="Name" />
                            <input type="email" name="email" placeholder="Email" />
                        </li></ul>
                        <textarea name="message" placeholder="Message" cols="60" rows="16"></textarea>
                        <ul class="actions special">
                            <li><button type="submit" class="btn btn-success float-center text-uppercase">Kirim Pesan</button></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
        <div class="copyright">
            <ul class="items" ><li><a>New Normal &copy; 2020 All Rights Reserved</a> </li></ul>
        </div> `;
    }
}
customElements.define("footer-section", FooterSection);