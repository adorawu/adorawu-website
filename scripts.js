$(function (){
  $('#About, #Experience, #Projects, #Contact').hide();

  $('#Home_Button').click(function(){
      $('#Home').fadeIn(800);
      $('#About, #Experience, #Projects, #Contact').hide();
  })

  $('#About_Button').click(function(){
    $('#About').fadeIn(800);
    $('#Home, #Experience, #Projects, #Contact').hide();
  })

    $('#Experience_Button').click(function(){
      $('#Experience').fadeIn(800);
      $('#About, #Home, #Projects, #Contact').hide();
  })

  $('#Projects_Button').click(function(){
    $('#Projects').fadeIn(800);
    $('#Home, #Experience, #About, #Contact').hide();
  })

  $('#Contact_Button').click(function(){
    $('#Contact').fadeIn(800);
    $('#Home, #Experience, #About, #Projects').hide();
  })
})