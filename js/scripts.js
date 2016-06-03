$(document).ready(function() {

  $("form#survey").submit(function(event){
    var room = parseInt($("#room").val());
    var food = parseInt($("#food").val());
    var weather = parseInt($("#weather").val());
    var doors = parseInt($("#doors").val());
    var location = parseInt($("#locaiton").val());
    var transport = parseInt($("#transport").val());
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    if (room === 1 && food === 1 && weather === 1 && doors === 1) {
      $('#home').show();
      $('#glamping').hide();
      $('#mountian').hide();
      $('#egypt').hide();
      $('#vegas').hide();
      $('#borabora').hide();
    } else if (room === 2 && food === 2 && weather === 2 && doors === 2 ) {
      $('#glamping').show();
      $('#home').hide();
      $('#mountian').hide();
      $('#egypt').hide();
      $('#vegas').hide();
      $('#borabora').hide();
    } else if (room === 1 && food === 2 && weather === 2 && doors === 2 )  {
      $('#mountian').show();
      $('#glamping').hide();
      $('#home').hide();
      $('#egypt').hide();
      $('#vegas').hide();
      $('#borabora').hide();
    }
    else if (room === 2 && food === 1 && weather === 2 && doors === 2 )  {
      $('#egypt').show();
      $('#glamping').hide();
      $('#mountian').hide();
      $('#home').hide();
      $('#vegas').hide();
      $('#borabora').hide();
    }
    else if (room === 2 && food === 2 && weather === 1 && doors === 2 )  {
      $('#vegas').show();
      $('#glamping').hide();
      $('#mountian').hide();
      $('#egypt').hide();
      $('#home').hide();
      $('#borabora').hide();
    }
    else if (room === 2 && food === 2 && weather === 2 && doors === 1 )  {
      $('#borabora').show();
      $('#glamping').hide();
      $('#mountian').hide();
      $('#egypt').hide();
      $('#vegas').hide();
      $('#home').hide();
    }

    event.preventDefault();
  });
});
