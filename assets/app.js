
setTimeout(function () {
  $('.board').fadeIn(500);
}, 200);

var files = [];

function change(){
  $.ajax({
    url: "layers/",
    success: function(data){

       $(data).find("a").each(function(){
          files.push($(this).attr("href"));
       });
       console.log(files);
       var d = new Date();
       var n = d.getTime();
       $('.board_target').css('background','url("layers/'+files[1]+'"')
    }
  });
}

change();
