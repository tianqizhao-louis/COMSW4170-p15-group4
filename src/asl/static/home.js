$(document).ready(function() {
    $("#start").on("click", function() {
        window.location.href = '/greetings/1'
    })

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;

    let dictDateTime = {'visitTime': dateTime};

    $.ajax({
        url: "/save-important",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(dictDateTime),
        success: function (data, status, xhr) {

        },
        error: function (jqxhr, status, error) {
            console.log(error)
        }
    });
})