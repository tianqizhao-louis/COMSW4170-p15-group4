$(document).ready(function() {
    $("#next2").on("click", function() {
        let currentLocation = window.location.pathname;
        let videoId = parseInt(currentLocation.split('/')[2])
        videoId +=1
        console.log(videoId)
        if(videoId < 9) {
            window.location.href = '/manners/' + videoId
        }
        else {
            window.location.href = '/learning/9'
        }
    })
    $("#prev2").on("click", function() {
        let currentLocation = window.location.pathname;
        let videoId = currentLocation.split('/')[2]
        videoId -=1
        window.location.href = '/manners/' + videoId
    })

    $("#video1").on("click", function() {
        window.location.href = '/manners/' + 5
    })
    $("#video2").on("click", function() {
        window.location.href = '/manners/' + 6
    })
    $("#video3").on("click", function() {
        window.location.href = '/manners/' + 7
    })
    $("#video4").on("click", function() {
        window.location.href = '/manners/' + 8
    })
})