import axios from "axios"

// Geocoder API
const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + searchKey;

// Helper functions (in this case the only one is runQuery)

function setQueryUrl(searchQuery) {
    var startYear = searchQuery.startYear + '0101';
    var endYear = searchQuery.endYear + '0101';
    url += "&sort=newest" + "&q=" + searchQuery.search + '&begin_date=' + startYear + '&end_date=' + endYear + '&page=0';
    console.log(url);
}


const helpers = {

    searchArticles(searchQuery) {
        console.log('Searching for articles');
        console.log(searchQuery);
        setQueryUrl(searchQuery);
        return axios.get(url).then(function(apiData) {
            console.log(apiData);
            var articles = apiData.data.response.docs;
            console.log(`response is: `);
            console.log(articles);
            return articles.slice(0, 5);
        });

    }
}

export default helpers;

