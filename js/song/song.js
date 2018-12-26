$(function() {
  $.get("/lyric.json").then(function(response) {
    // let lyric = JSON.parse(response).lyric
    let { lyric } = response;
    let lyricArray = lyric.split("\n");
    console.log(lyricArray);
    // 匹配【】内内容
    let regex = /^\[(.+)\](.*)$/;
    lyricArray = lyricArray.map(item => {
      let lyricMatches = item.match(regex);
      if (lyricMatches !== null) {
        return { time: lyricMatches[1], content: lyricMatches[2] };
      }
    });
    lyricArray.splice(lyricArray.length-1)
    let $lyric = $(".lyric")
    lyricArray.map((item)=>{
        let $p  = $('<p/>')
        $p.attr('data-time',item.time).text(item.content)
        $p.appendTo($lyric)
    })
  });
});
