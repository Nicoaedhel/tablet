
setTimeout(function () {
  $('.board').fadeIn(500);
}, 200);

var files = [];

function change(){
  $.getJSON("layers/config.json", function(data) {
    var today = new Date();;
    var h = today.getHours();
    var m = today.getMinutes();
    i = 0;
    for (var prop in data.layers) {
      time = data.layers[i][1].split("/");
      time_1 = time[0];
      time_2 = time[1];
      if (time_1 <= ""+h+":"+""+m+"")
          if (time_2 >= ""+h+":"+""+m+"")
            $('.board_target').css('background','url("layers/'+data.layers[i][0]+'.png"')
      i++;
    }
    setTimeout(function () {
      change()
    }, 1000);
  });
}

change();
