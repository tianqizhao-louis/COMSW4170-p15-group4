$(document).ready(function(){

    $("#formID").submit(function(){
        // start quiz -> go to Q1
        $('#formID').attr('action', '/question/'+1);
    })

})