// Reset
<<<<<<< HEAD
$( document ).ready(function() {
=======

>>>>>>> dev2
$("button").on('mouseout', function(){
    if($(this).hasClass("confirm") || $(this).hasClass("done")){
        setTimeout(function(){
            $("button").removeClass("confirm").removeClass("done");
            $("span").text("Delete");
        }, 3000);
    }
});
<<<<<<< HEAD
=======

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
>>>>>>> dev2
