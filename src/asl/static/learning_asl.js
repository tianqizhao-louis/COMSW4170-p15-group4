$(document).ready(function() {
    $("#next2").on("click", function() {
        var currentLocation = window.location.pathname;
        var videoId = parseInt(currentLocation.split('/')[2])
        videoId +=1
        console.log(videoId)
        if(videoId < 11) {
            window.location.href = 'http://127.0.0.1:5000/learning/' + videoId
        }
        else {
            window.location.href = 'http://127.0.0.1:5000/farewell/11'
        }
    })
    $("#prev2").on("click", function() {
        var currentLocation = window.location.pathname;
        var videoId = currentLocation.split('/')[2]
        videoId -=1
        window.location.href = 'http://127.0.0.1:5000/learning/' + videoId
    })
})