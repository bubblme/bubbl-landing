//Define Bubbl Namespace
function addUser(e,t){var n={};$("ul.username-error-list").hide();$(".spinner").show();var r=Parse.Object.extend("PreRegUsers"),i=new Parse.Query(r);i.equalTo("username",e);i.find({success:function(i){if(i.length>0){$(".spinner").hide();$("ul.username-error-list").show();n.status="user exists"}else{var s=new r;s.save({username:e,email:t},{success:function(e){console.log("PARSE SEARCH");bubblLanding.email=t;n.status="user added";$("#reserve_username_form").hide();$(".spinner").hide();$("#header_text").hide();$("#header_text").replaceWith('<h1 id="header_text">Username Reserved</h1>');$(".success").fadeIn();$("#social_share").fadeIn();$("#submit_video").fadeIn();$.ajax({type:"GET",url:"http://us3.api.mailchimp.com/1.3/?method=listSubscribe&apikey=cc25eff96f3ec264eff864e84e76d842-us3&id=77ad7a8643&email_address="+t,success:function(e){console.log("sending MC")}});return!1},error:function(e,t){$(".spinner").hide();$("ul.username-error-list").show()}})}},error:function(e){n.status="error";console.log("error")}});Parse.Analytics.track("signups",n)}function addURL(e){var t={},n=Parse.Object.extend("LandingVidsSubmitted"),r=new n;r.save({url:e,email:bubblLanding.email},{success:function(e){$("#submit_video").hide();$(".url_success").fadeIn()},error:function(e,t){$(".spinner").hide();$("ul.username-error-list").show()}})}var bubblLanding={};bubblLanding.current_bubbl_landing_page="one";