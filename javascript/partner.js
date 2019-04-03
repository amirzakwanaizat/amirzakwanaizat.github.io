$(window).load(function(){
  var $container = $('.portfolioContainer');
  $container.isotope({
      filter: '*',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
  });

  $('.portfolioFilter a').click(function(){
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');

      var selector = $(this).attr('data-filter');
      $container.isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
       });

       $('.partnermap .showmap').removeClass('showmap');
       
       if(selector === '.asia')
       {
           $('.mark1').addClass('showmap');
       }
        else if(selector === '.europe')
       {
           $('.mark2').addClass('showmap');
       }
       else if(selector === '.middleeast')
       {
           $('.mark3').addClass('showmap');
       }
       else if(selector === '.africa')
       {
           $('.mark4').addClass('showmap');
       }
       else if(selector === '.oceania')
       {
           $('.mark5').addClass('showmap');
       }
       else if(selector === '.america')
       {
           $('.mark6').addClass('showmap');
       }
       return false;
  }); 

    $('.partnermap a').click(function() {
        $('.partnermap .showmap').removeClass('showmap');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
            });

        $('.portfolioFilter .current').removeClass('current');
        if(selector === '.asia')
        {
            $('.mark1').addClass('showmap');
            $('#button1').addClass('current');
        }
        else if(selector === '.europe')
        {
            $('.mark2').addClass('showmap');
            $('#button2').addClass('current');
        }
        else if(selector === '.middleeast')
        {
            $('.mark3').addClass('showmap');
            $('#button3').addClass('current');
        }
        else if(selector === '.africa')
        {
            $('.mark4').addClass('showmap');
            $('#button4').addClass('current');
        }
        else if(selector === '.oceania')
        {
            $('.mark5').addClass('showmap');
            $('#button5').addClass('current');
        }
        else if(selector === '.america')
        {
            $('.mark6').addClass('showmap');
            $('#button6').addClass('current');
        }
        return false;
    });
});