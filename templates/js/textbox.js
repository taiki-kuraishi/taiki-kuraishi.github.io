$(document).ready(function(){
    $('.nice-textbox').blur(function() {
        if($(this).val().length === 0){
        $('.nice-label').removeClass("focus");
        }
        else { return; }
    })
    .focus(function() {
        $('.nice-label').addClass("focus")
    });
});