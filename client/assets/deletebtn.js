// Reset
$( document ).ready(function() {
$("button").on('mouseout', function(){
    if($(this).hasClass("confirm") || $(this).hasClass("done")){
        setTimeout(function(){
            $("button").removeClass("confirm").removeClass("done");
            $("span").text("Delete");
        }, 3000);
    }
});
