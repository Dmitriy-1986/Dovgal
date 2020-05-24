$(document).ready(function(){
    $('.spoiler-links').click(function(){
      if ($(this).next('.spoiler-body').css("display")=="none") {
        $('.spoiler-body').hide('normal');
        $(this).next('.spoiler-body').toggle('normal');
      } else $('.spoiler-body').hide('normal');
          return false;
    });
  });