
setTimeout(function () {
  $('.board').fadeIn(500);
}, 200);

var files = [];

function change(){
  $.ajax({
    url: "layers/",
    success: function(data){
      //find files in folder
       $(data).find("a").each(function(){
          files.push($(this).attr("href"));
       });
       console.log(files);

       var d = new Date();
       var n = d.getTime();

       // check time interval

       // Display result
       $('.board_target').css('background','url("layers/'+files[0]+'"')

       //reload
       setTimeout(function () {
         files = [];
         change()
       }, 1000);
    }
  });
}

change();
