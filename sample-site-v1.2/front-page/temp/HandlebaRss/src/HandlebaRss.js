function HandlebaRss(feedUrl,template,destination){
  if(feedUrl instanceof Array){
    this.feedUrls = feedUrl;
  }else{
    this.feedUrl = feedUrl;
  }
  this.template = template;
  this.destination = destination;
  //this.retrieveUrl();
}

HandlebaRss.prototype.init = function(){
  if(this.feedUrl){
    this.retrieveUrl(this.feedUrl, $.proxy(this.captureAndRender,this));
  }
}

HandlebaRss.prototype.addFeedData = function(data){
  if(!this.feedDatas){
    this.feedDatas = [];
  }
  this.feedDatas.push(data.responseData.feed);
}

HandlebaRss.prototype.retrieveUrl = function(url,callback){
  var protocol = document.location.protocol;
  if(protocol == 'file:'){ protocol = 'http:'}
  $.ajax({
    url: protocol + '//query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22'+ encodeURIComponent(url)+'%22&format=json&diagnostics=true&_maxage=3600&callback=?',
    dataType: 'json',
    success: callback
  });
};

HandlebaRss.prototype.captureAndRender = function(data){
  this.captureFeed(data);
  this.render();
};

HandlebaRss.prototype.captureFeed = function(data){
  this.feed = data.query.results;
};

HandlebaRss.prototype.render = function(){
  var source   = $(this.template).html();
  var template = Handlebars.compile(source);
  // console.log(this);
  var html    = template(this.feed);
  $(this.destination).html(html);
};
