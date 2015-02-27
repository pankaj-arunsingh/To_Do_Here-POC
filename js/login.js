$(document).ready(function(){
$(document).mousemove(function(e){
     TweenLite.to($('body'), 
        .5, 
        { css: 
            {
                backgroundPosition: ""+ parseInt(event.pageX/8) + "px "+parseInt(event.pageY/'12')+"px, "+parseInt(event.pageX/'15')+"px "+parseInt(event.pageY/'15')+"px, "+parseInt(event.pageX/'30')+"px "+parseInt(event.pageY/'30')+"px"
            }
        });
  });
 if((localStorage.chkbx) && (localStorage.chkbx !=' ')) {
$("#rememberMe").attr('checked', 'checked');
$("#uname").val(localStorage.usrname);
$("#password").val(localStorage.pass);
}
else{
$("#rememberMe").removeAttr("checked");
$("#uname").val("");
$("#password").val("");
}
var userRecord= JSON.parse(localStorage.userData || "null") || [];


$("#newUserButton").click(function(){
window.location="Register.html";
});

});
