$(function() {
  $.get("/lyric.json").then(function(response) {
    let { lyric } = response;
    let lyricArray = lyric.split('\n')
    let regex = /^\[(.+)\](.*)$/;
    lyricArray = lyricArray.map((item) => {
       let matches = item.match(regex)
       if(matches){
           return {time:matches[1],content:matches[2]}
       }
    })
    lyricArray.splice(lyricArray.length-1)
    // console.log(lyricArray)
    let $lyric = $('.lyric')
    lyricArray.map((item) => {
        let $p = $('<p/>')
        $p.attr('data-time',item.time).text(item.content)
        $p.appendTo($lyric)
    })
    })
});
