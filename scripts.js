function resize_game() {
  var window_height = window.innerHeight
  var ratio = window_height / 1000
  var new_width = 800 * ratio
  var new_height = 600 * ratio
  
  $('#scaled-frame').css({
    "-moz-transform": "scale(" + ratio + ")",
    "transform": ratio,
   " -moz-transform-origin": "0 0",
    "transform-origin": "0 0",
    "-o-transform": "scale(" + ratio + ")",
    "-o-transform-origin": "0 0",
    "-webkit-transform": "scale(" + ratio + ")",
    "-webkit-transform-origin": "0 0",
  })

  $('#wrap').css ({
    "width": new_width,
    "height": new_height,
  })
}

function reset_nav_btns(){
  $('.nav_link').each(function(){
    var defaultText = $(this).data('default-text')
    $(this).text(defaultText)
  })
  $('.nav_link').prop("disabled", false).css("cursor", "pointer");
}

function reset_project_btns(){
  $('.project_button').each(function(){
    var defaultText = $(this).data('default-text')
    $(this).text(defaultText)
  })
  $('.project_button').prop("disabled", false).css({"cursor": "pointer"});
}

$(function (){
  resize_game();
  $('#About, #Experience, #Projects, #Contact').hide();
  $('#Home_Button').text("✦").css("cursor", "default").prop("disabled", true);

  $('#Home_Button').click(function(){
    reset_nav_btns()
    $(this).text("✦").css("cursor", "default").prop("disabled", true);
    $('#Home').fadeIn(800);
    $('#About, #Experience, #Projects, #Contact').hide();
  })

  $('#About_Button').click(function(){
    reset_nav_btns()
    $(this).text("✦").css("cursor", "default").prop("disabled", true);
    $('#About').fadeIn(800);
    $('#Home, #Experience, #Projects, #Contact').hide();
  })

  $('#Experience_Button').click(function(){
    reset_nav_btns()
    $(this).text("✦").css("cursor", "default").prop("disabled", true);
    $('#Experience').fadeIn(800);
    $('#About, #Home, #Projects, #Contact').hide();
  })

  $('#Projects_Button').click(function(){
    if (been_clked == true) {
      $('.project_dash').css({
        "left": "0%",
        "width": "100%"})
    }
    been_clked = false
    reset_nav_btns()
    reset_project_btns()
    $(this).text("✦").css("cursor", "default").prop("disabled", true);
    $('.webpage').hide()
    $('#Projects').fadeIn(800);
    $('#Home, #Experience, #About, #Contact').hide();
  })

  $('#Contact_Button').click(function(){
    reset_nav_btns()
    $(this).text("✦").css("cursor", "default").prop("disabled", true);
    $('#Contact').fadeIn(800);
    $('#Home, #Experience, #About, #Projects').hide();
  })

// Project Buttons
  var been_clked = false;
  $('#Food_Drive_Button').click(function(){
    reset_project_btns()
    $('.webpage').hide()
    $(this).text("✦").css("cursor", "default").prop("disabled", true);
    if (!been_clked) {
      $('.project_dash').animate({
        left: "-=48%",
        width: "-=15%"
      }, 1200, function(){
        $('#Food_Drive').fadeIn(800);
        been_clked = true
      })
    }
    else {
      $('#Food_Drive').fadeIn(800);
    }
  })

  $('#Piano_Game_Button').click(function(){
    reset_project_btns()
    $('.webpage').hide()
    $(this).text("✦").css("cursor", "default").prop("disabled", true);
    if (!been_clked) {
      $('.project_dash').animate({
        left: "-=48%",
        width: "-=15%"
      }, 1200, function(){
        $('#Piano_Game').fadeIn(800);
        been_clked = true
      })
    }

    else {
      $('#Piano_Game').fadeIn(800);
    }
  })

  $('#Portfolio_Button').click(function(){
    reset_project_btns()
    $('.webpage').hide()
    $(this).text("✦").css("cursor", "default").prop("disabled", true);
    if (!been_clked) {
      $('.project_dash').animate({
        left: "-=48%",
        width: "-=15%"
      }, 1200, function(){
        $('#Portfolio').fadeIn(800);
        been_clked = true
      })
    }

    else {
      $('#Portfolio').fadeIn(800);
    }
  })

  $('#Potluck_Button').click(function(){
    reset_project_btns()
    $('.webpage').hide()
    $(this).text("✦").css("cursor", "default").prop("disabled", true);
    if (!been_clked) {
      $('.project_dash').animate({
        left: "-=48%",
        width: "-=15%"
      }, 1200, function(){
        $('#Potluck').fadeIn(800);
        been_clked = true
      })
    }

    else {
      $('#Potluck').fadeIn(800);
    }
  })

})