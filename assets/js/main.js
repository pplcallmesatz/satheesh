$(function() {
  $.getJSON('https://api.dribbble.com/v1/users/satheesh_design/shots?access_token=aed5bfd4b691546feeccbd0f596814d259ffdfc917e2c48d545de625b9d2b877&callback=?', function(usrCnt) {
      
    if (usrCnt.data.length > 0) {							
      $.each(usrCnt.data.reverse(), function(i, val) {
          
          var gDate = new Date(val.created_at);
          var uploadDate = '<span>' +gDate.getDate()+ ' / ' +gDate.getMonth() + 1+  ' / ' +gDate.getFullYear() + '</span>';
          
        
        $('#dribbble').prepend(
          '<div class="box col-md-4"><a href="'+val.html_url+'" target="_blank"><img src="'+val.images.normal+'" /></a><h5 class="text-center">'+val.title+'</h5><span><i class="fa fa-eye" aria-hidden="true"></i> '+val.views_count+'</span><span> <i class="fa fa-heart" aria-hidden="true"></i> '+val.likes_count+'</span> <span> <i class="fa fa-comment" aria-hidden="true"></i> '+val.comments_count+'</span><span> <i class="fa fa-calendar" aria-hidden="true"></i>'+ uploadDate+'</span></div>'
        );
		  $(".post").prepend(
		  '<div class="col-md-4 col-sm-6"></div>'
		  )
      });
    }
    else {
      $('#dribbble').append('<div class="col-xs-12">No shots.</div>');
    }
  });
    $.getJSON('https://api.dribbble.com/v1/user?access_token=aed5bfd4b691546feeccbd0f596814d259ffdfc917e2c48d545de625b9d2b877', function(usrProfile) {
		var profileName = usrProfile.name;
		var usrLocation = usrProfile.location;
$( ".profile-name" ).html( profileName );
$( ".user-name" ).html("@" + usrLocation );
  });		   							    
});