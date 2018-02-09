const Requests = require('../services/requests');

const NasaAPI = function (url) {
    this.url = url;
    this.colllectionURLs = [];
}

NasaAPI.prototype.getCollectionURLS = function () {
    var request = new Requests(this.url);
    request.getRequest(this.getHrefs.bind(this))
}


NasaAPI.prototype.getHrefs = function (searchResults) {
    var items = searchResults.collection.items;
    var hrefs = []
    items.forEach(function (item) {
        hrefs.push(item.href);
    }.bind(this))
    console.log(hrefs);
}

// NasaAPI.prototype.getJSONData = function (hrefs) {
//     hrefs.forEach(function (url) {
//         var request = new Requests(url)
//         request.getRequest(this.seeCollection.bind);
//     })
// }
//
// NasaAPI.prototype.seeCollection= function(data){
//     console.log(data)
// }

// NasaAPI.prototype.setCollectionURLs = function (hrefs) {
//     this.colllectionURLs = hrefs;
// }.bind(this);

// var unconvertedString = searchResults.collection.items[0].href;
// var changedString = unconvertedString.replace(/ /g,"%20");
// console.log(unconvertedString);
// console.log(changedString);

module.exports = NasaAPI;