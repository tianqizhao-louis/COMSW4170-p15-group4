$(document).ready(function() {
    $("#next").on("click", function() {
        var currentLocation = window.location.pathname;
        var videoId = parseInt(currentLocation.split('/')[2])
        videoId +=1
        if(videoId < 5) {
            window.location.href = 'http://127.0.0.1:5000/greetings/' + videoId
        }
        else {
            window.location.href = 'http://127.0.0.1:5000/manners/5'
        }
    })
    $("#prev").on("click", function() {
        var currentLocation = window.location.pathname;
        var videoId = currentLocation.split('/')[2]
        videoId -=1
        window.location.href = 'http://127.0.0.1:5000/greetings/' + videoId
    })
})