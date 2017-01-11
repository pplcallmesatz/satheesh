$(function() {
  $.getJSON('https://api.dribbble.com/v1/users/satheesh_design/shots?access_token=aed5bfd4b691546feeccbd0f596814d259ffdfc917e2c48d545de625b9d2b877&callback=?', function(usrCnt) {
      
    if (usrCnt.data.length > 0) {							
      $.each(usrCnt.data.reverse(), function(i, val) {
        $('#dribbble').prepend(
          '<li class="box"><img src="'+val.images.normal+'" /><h2>'+val.title+'</h2><span>'+val.views_count+'</span><h2>'+val.likes_count+'</h2> <h2>'+val.comments_count+'</h2><p><a href="'+val.html_url+'">original post &rarr;</a></p></li>'
        );
		  $(".post").prepend(
		  '<div class="col-md-4 col-sm-6"></div>'
		  )
      });
    }
    else {
      $('#dribbble').append('<li>No shots.</li>');
    }
  });
    $.getJSON('https://api.dribbble.com/v1/user?access_token=aed5bfd4b691546feeccbd0f596814d259ffdfc917e2c48d545de625b9d2b877', function(usrProfile) {
      console.log(usrProfile.name);
		var profileName = usrProfile.name;
		var usrName = usrProfile.username;
$( ".profile-name" ).html( profileName );
$( ".user-name" ).html("@" + usrName );
//    if (resp.data.length > 0) {							
//      $.each(resp.data.reverse(), function(i, val) {
//        $('#dribbble').prepend(
//          '<li class="box"><img src="'+val.images.normal+'" /><h2>'+val.title+'</h2><span>'+val.views_count+'</span><h2>'+val.likes_count+'</h2> <h2>'+val.comments_count+'</h2><p><a href="'+val.html_url+'">original post &rarr;</a></p></li>'
//        );
//      });
//    }
//    else {
//      $('#dribbble').append('<li>No shots.</li>');
//    }
  });		   							    
});