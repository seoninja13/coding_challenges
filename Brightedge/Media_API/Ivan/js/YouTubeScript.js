$(document).ready(function(){
    search();
  //FancyBox
  $('.fancybox').fancybox();

  // Focus
  $('#input-search').focus(function(){
    $(this).animate({
      width: '65%'
    },300);
  });

  // Blur
  $('#input-search').blur(function(){
    if ($(this).val() == '') {
      $(this).animate({
        width: '40%'
      },300);
    }
  });

  $('#search-form').submit(function(ev){
    ev.preventDefault();
  });
});

function search() {

  //Empty the search results and buttons before searching again.
  $('#results').html('');
  $('#buttons').html('');

  //Get the query in search bar
  query = "popular;"//$('#input-search').val();

  $.get("https://www.googleapis.com/youtube/v3/search",{
    part: 'snippet,id',
    q: query,
    type: 'video',
    maxResults: 10,
    key: 'AIzaSyBoPCEOHSzVBrkgDw7LvVhfkiAsTGtgVqc'}, function(data){
      console.log(data);

      var nextPageToken = data.nextPageToken;
      var prevPageToken = data.prevPageToken;


      $.each(data.items, function(i, item){
          var output = getOutput(item);
          $('#isotopeContainer').append(output);
          //$('#results').append(output);
      });

      //var buttons = getButtons(prevPageToken, nextPageToken);
      //$('#buttons').append(buttons);
    });
}

function getOutput(item){
  var videoId = item.id.videoId;
  var title = item.snippet.title;
  var description = item.snippet.description;
  var thumbnail = item.snippet.thumbnails.high.url;
  var channelTitle = item.snippet.channelTitle;
  var publishedAt = item.snippet.publishedAt;


  var _youTubeVideo = "";
  _youTubeVideo = _youTubeVideo + "<div class='col-md-3 col-sm-3 col-xs-12 isotopeSelector youtube'>";
  _youTubeVideo = _youTubeVideo + "<article class='item-box'>";
  _youTubeVideo = _youTubeVideo + "<figure>";
  _youTubeVideo = _youTubeVideo + '<a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/' + videoId + '"><img src="' + thumbnail + '"></a>';
  _youTubeVideo = _youTubeVideo + " <div class='overlay-background'>";
  _youTubeVideo = _youTubeVideo + "<div class='inner'></div>";
  _youTubeVideo = _youTubeVideo + '</div>';
  _youTubeVideo = _youTubeVideo + "<div class='overlay'>";
  _youTubeVideo = _youTubeVideo + "<div class='inner-overlay'>";
  _youTubeVideo = _youTubeVideo + "<div class='inner-overlay-content with-icons'>";
  _youTubeVideo = _youTubeVideo + '<a class="fancybox-pop" href="http://www.youtube.com/embed/' + videoId + '"><i class="fa fa-search"></i></a>';
  _youTubeVideo = _youTubeVideo + "</div>";
  _youTubeVideo = _youTubeVideo + "</div>";
  _youTubeVideo = _youTubeVideo + "</div>";
  _youTubeVideo = _youTubeVideo + "</figure>";
  _youTubeVideo = _youTubeVideo + "</article>";
  _youTubeVideo = _youTubeVideo + "</div>";

  return _youTubeVideo;

  //var getoutput = '<div class="row results-row">' +
  //'<div class="col-md-4">' +
  //'<a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'"><img src="'+thumbnail+'"></a>' +
  //'</div>' +
  //'<div class="col-md-8">' +
  //'<h3><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'">'+title+'</a></h3>' +
  //'<p class="channel-meta">By<i> '+channelTitle+'</i> on '+publishedAt+'</p>'+
  //'<p>'+description+'</p>' +
  //'</div>' + 
  //'</div>' +
  //'<hr>'

  //return getoutput;       
}

function getButtons(prevPageToken, nextPageToken){
  if (!prevPageToken){
    var pageButtons = '<button id="next-button" class="btn btn-default" data-token="'+nextPageToken+'" data-query="'+query+'" onclick="nextPage();">Next Page</button>'
  }
  else {
    var pageButtons = '<button id="prev-button" class="btn btn-default" data-token="'+prevPageToken+'" data-query="'+query+'" onclick="prevPage();">Prev Page</button>' +
    '<button id="next-button" class="btn btn-default" data-token="'+nextPageToken+'" data-query="'+query+'" onclick="nextPage();">Next Page</button>'
  }

  return pageButtons;
}

function nextPage(){
  var token = $('#next-button').data('token'); 
  var query = $('#next-button').data('query');

  $('#results').html('');
  $('#buttons').html('');

  $.get("https://www.googleapis.com/youtube/v3/search",{
    part: 'snippet,id',
    q: query,
    pageToken: token,
    type: 'video',
    maxResults: 10,  
    key: 'AIzaSyCJ-StAmOvpw37mVaPdv4pFEJuq9p1ZUyc'}, function(data){
      console.log(data);

      var nextPageToken = data.nextPageToken;
      var prevPageToken = data.prevPageToken;


      $.each(data.items, function(i, item){
        var output = getOutput(item);
        $('#results').append(output);
      });

      var buttons = getButtons(prevPageToken, nextPageToken);
      $('#buttons').append(buttons);
    });
  
}

function prevPage(){
  var token = $('#prev-button').data('token'); 
  var query = $('#prev-button').data('query');

  $('#results').html('');
  $('#buttons').html('');

  $.get("https://www.googleapis.com/youtube/v3/search",{
    part: 'snippet,id',
    q: query,
    pageToken: token,
    type: 'video',
    maxResults: 10, 
    key: 'AIzaSyCJ-StAmOvpw37mVaPdv4pFEJuq9p1ZUyc'}, function(data){
      console.log(data);

      var nextPageToken = data.nextPageToken;
      var prevPageToken = data.prevPageToken;


      $.each(data.items, function(i, item){
        var output = getOutput(item);
        $('#results').append(output);
      });

      var buttons = getButtons(prevPageToken, nextPageToken);
      $('#buttons').append(buttons);
    });  
}