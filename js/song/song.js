$(function() {
  $.get("/lyric.json").then(function(response) {
    let { lyric } = response;
    let lyricArray = lyric.split('↵')
    let regex = /^\[(.+)\](.*)$/;
    lyricArray = lyricArray.map((item) => {
       let matches = item.match(regex)
       if(matches){
           return {time:matches[1],content:matches[2]}
       }
    })
    lyricArray.splice(lyricArray.length-1)
    console.log(lyricArray)
    let $lyric = $('.lyric')
    lyricArray.map((item) => {
        let $p = $('<p/>')
        $p.attr('data-time',item.time).text(item.content)
        $p.appendTo($lyric)
    })  
    })
});
let audio = document.createElement('audio')
let status = true;
audio.src = "http://dl.stream.qqmusic.qq.com/C400003lIzTG3HmKk6.m4a?guid=9408987631&vkey=323808D047AED833F7E8026585808A932A784774B063E94D497029C7058943EF11C8ED813ECE184F4753B499EE5E66A99956B75328E03B26&uin=0&fromtag=38"

$('.song_picture_container').on('click',()=>{
    if(status){
        $('#music_play').hide();
        $('.song_picture_container').addClass('playing')
        audio.play()
        status = !status
    }else{
        audio.pause()
        status = !status;
        $('#music_play').show();
        $('.song_picture_container').removeClass('playing')
    }
    
})
