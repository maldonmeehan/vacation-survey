$(document).ready(function() {
  $("form#dating").submit(function(event){

    //$("#entertain")
    var entertain = parseInt($("#entertain").val());

    //$("#age")
    var age = parseInt($("#age").val());

    //$("#activity")
    var activity = parseInt($("#activity").val());



    if (entertain === 1 && age === 2 && activity === 1) {
      $('#morrison').show();
      $('#bieber').hide();
      $('#mariah').hide();
      $('#dicaprio').hide();
      $('#sandler').hide();
    } else if (animal === 2) {
      $('#snake').show();
      $('#turtle').hide();
      $('#spider').hide();
    } else {
      (animal === 3)
      $('#spider').show();
      $('#snake').hide();
      $('#turtle').hide();
    }

    event.preventDefault();
  });
});
