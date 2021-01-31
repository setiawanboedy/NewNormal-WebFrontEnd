import moment from "moment";

class NewsItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set news(news) {
        this._news = news;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }

                :host {
                    display: block;
                    background-color: white;
                    border-radius: 12px;
                    overflow: hidden;
                    transition: box-shadow 300ms, transform 300ms;
                }

                :host(:hover) {
                    cursor: pointer;
                    transform: translateY(-4px);
                    box-shadow: 0 4px 15px rgba(51, 51, 51, 0.30);
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                img {
                    width: 100%;
                    max-height: 200px;
                    object-fit: cover;
                    object-position: center;
                }

                .content {
                    padding: 15px;
                }

                .title {
                    font-weight: 700;
                    line-height: 1.5rem;
                    margin-bottom: 15px;
                }

                .info {
                    display: flex;
                    justify-content: space-between;
                }

                .info > span {
                    color: #cfcfcf;
                    font-size: 0.6rem;
                }
            </style>
            
            <a href="${this._news.webUrl}" target="_blank">
                <img src="${this._news.images ? this._news.images[0].url : "src/image/blank-image.jpg"}"/>
                <div class="content">
                    <p class="title">
                        ${this._news.title}
                    </p>
                    <div class="info">
                        <span class="author">${
                            this._news.provider.name ? this._news.provider.domain : "-"
                        }</span>
                        <span class="published">${moment
                            .utc(this._news.publishedDateTime)
                            .format("DD/MM/YYYY")}</span>
                    </div>
                </div>
            </a>
        `;
    }
}

customElements.define("news-item", NewsItem);
