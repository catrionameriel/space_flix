const Request = require('../services/requests');

const SearchModel = function(){
}

SearchModel.prototype.hideNonsense = function () {
  let frontPageContainer = document.querySelector('#front-page');
  frontPageContainer.className = 'invisible';
  let viewPageContainer = document.querySelector('#view-page');
  viewPageContainer.className = 'visible';
};

SearchModel.prototype.buttonClicked = function(data, view){
  view.clear();
  data.onLoad = view.videoRender.bind(view);
  data.getCollectionURLS();
  this.hideNonsense();
};

SearchModel.prototype.buttonClickedImage = function(data, view){
  view.clear();
  data.onLoad = view.imageRender.bind(view);
  data.getImageURLS();
  this.hideNonsense();
};

SearchModel.prototype.buttonClickedSound = function(data, view){
  data.showData = view.renderSound.bind(view);
  data.getData();
  let frontPageContainer = document.querySelector('#front-page');
  frontPageContainer.className = 'invisible';
  let viewPageContainer = document.querySelector('#sound-page');
  viewPageContainer.className = 'visible';
};

module.exports = SearchModel;
