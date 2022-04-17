$(document).ready(function() {
    $("#next").on("click", function() {
        let currentLocation = window.location.pathname;
        let videoId = parseInt(currentLocation.split('/')[2])
        videoId +=1
        if(videoId < 5) {
            window.location.href = '/greetings/' + videoId
        }
        else {
            window.location.href = '/manners/5'
        }
    })
    $("#prev").on("click", function() {
        let currentLocation = window.location.pathname;
        let videoId = currentLocation.split('/')[2]
        videoId -=1
        window.location.href = '/greetings/' + videoId
    })
})