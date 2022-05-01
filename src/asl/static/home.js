$(document).ready(function() {

    $("#nav-link-home").addClass("nav-active");

    $("#start").on("click", function() {
        window.location.href = '/learn/1'
    })

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;

    let dictDateTime = {'visitTime': dateTime};

    sendAjax('/save-important', 'POST', dictDateTime);
})

function sendAjax(url, type, data) {
    $.ajax({
        async: true,
        crossOrigin: true,
        url: url,
        type: type,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        success: function (data, status, xhr) {

        },
        error: function (jqxhr, status, error) {
            console.log(status)
            console.log(error)
        }
    })
}