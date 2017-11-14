// Reset
<<<<<<< HEAD
$( document ).ready(function() {
    $("button").on('mouseout', function(){
        if($(this).hasClass("confirm") || $(this).hasClass("done")){
            setTimeout(function(){
                $("button").removeClass("confirm").removeClass("done");
                $("span").text("Delete");
            }, 3000);
        }
    })
=======

$("button").on('mouseout', function(){
    if($(this).hasClass("confirm") || $(this).hasClass("done")){
        setTimeout(function(){
            $("button").removeClass("confirm").removeClass("done");
            $("span").text("Delete");
        }, 3000);
    }
>>>>>>> a3adc4516ca0d8702f353bd3e530fc0b5c00e0dd
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })