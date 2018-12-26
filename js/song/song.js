
$(function() {
  $.get("/lyric.json").then(function(response) {
    // let lyric = JSON.parse(response).lyric
    let { lyric } = response;
    let lyricArray = lyric.split("\n");
    console.log(lyricArray)
    // 匹配【】内内容
    let regex = /^\[(.+)\](.+)/;
    let lyricObj = lyricArray.map(item => {
      let lyricMatches = item.match(regex);
      if(lyricMatches){
        return { time: lyricMatches[1], content: lyricMatches[2]};
      }
    });
    console.log(lyricObj);
    
  });
});
