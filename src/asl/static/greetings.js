$(document).ready(function() {
    let currentLocation = window.location.pathname;
    let videoId = parseInt(currentLocation.split('/')[2])
    $("#next").on("click", function(event) {
        videoId +=1
        if(videoId < 5) {
            window.location.href = '/greetings/' + videoId
        }
        else {
            window.location.href = '/manners/5'
        }
    });
    $("#prev").on("click", function() {
        videoId -=1
        window.location.href = '/greetings/' + videoId
    })

    $("#video1").on("click", function() {
        window.location.href = '/greetings/' + 1
    })
    $("#video2").on("click", function() {
        window.location.href = '/greetings/' + 2
    })
    $("#video3").on("click", function() {
        window.location.href = '/greetings/' + 3
    })
    $("#video4").on("click", function() {
        window.location.href = '/greetings/' + 4
    })

})