$(document).ready(function() {
    $("#next2").on("click", function() {
        var currentLocation = window.location.pathname;
        var videoId = parseInt(currentLocation.split('/')[2])
        videoId +=1
        console.log(videoId)
        if(videoId < 9) {
            window.location.href = 'http://127.0.0.1:5000/manners/' + videoId
        }
        else {
            window.location.href = 'http://127.0.0.1:5000/learning/9'
        }
    })
    $("#prev2").on("click", function() {
        var currentLocation = window.location.pathname;
        var videoId = currentLocation.split('/')[2]
        videoId -=1
        window.location.href = 'http://127.0.0.1:5000/manners/' + videoId
    })
})