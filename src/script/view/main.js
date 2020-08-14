
import "../components/news-list.js";

import config from "../../config/config.js";

const main = () => {

    const newsListElement = document.querySelector("news-list");
    const categoryElements = document.querySelectorAll(".filter-item");

   
    let category = document
        .querySelector(".filter-item.active")
        .getAttribute("data-value");
    

    const getNews = async () => {
        try {
            let paramString = "";

            if (category) {
                paramString += `${category}`;
            }

            const result = await fetch(
                `https://api.smartable.ai/coronavirus/news/${paramString}`,
                {
                    method: "GET",
                    headers: {
                        "Subscription-Key": config.news_api_key,
                    },
                }
            );

            const resultJson = await result.json();

            if (resultJson.news) {
                if (resultJson.news) {
                    renderResult(resultJson.news);
                 
                } else {
                    fallbackResult(
                        `Tidak ada berita dengan kata kunci di kategori ${category}.`
                    );
                }
            } else {
                fallbackResult(resultJson.message);
            }
        } catch (error) {
            fallbackResult(error.message);
        }
    };

    const renderResult = (results) => {
        newsListElement.articles = results;
    };

    const fallbackResult = (message) => {
        newsListElement.renderError(message);
    };

    const onFilterItemClicked = (e) => {
        document
            .querySelector(".filter-item.active")
            .classList.remove("active");

        e.target.classList.add("active");

        category = e.target.getAttribute("data-value");

        getNews();
    };


    categoryElements.forEach((item) => {
        item.addEventListener("click", onFilterItemClicked);
    });

    getNews();
};

export default main;
