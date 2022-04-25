


$(document).ready(function() {
    var totalSteps = 4;
    var barWidth = $('.barWrap').width();
    var prog = barWidth/totalSteps;
    var currentValue = 1;
    var maxValue = 4;
    $('#bar').css('width', prog);
    
    $("#next").on("click", function(event) {
        let currentLocation = window.location.pathname;
        let videoId = parseInt(currentLocation.split('/')[2])
        videoId +=1
        if(videoId < 5) {
            window.location.href = '/greetings/' + videoId
            currentValue++;
            if (currentValue > maxValue)
                currentValue = maxValue;
            $('#bar').css('width', prog * currentValue);
		    $("#stepNum").text(currentValue);
        }
        else {
            window.location.href = '/manners/5'
        }
    });
    $("#prev").on("click", function() {
        let currentLocation = window.location.pathname;
        let videoId = currentLocation.split('/')[2]
        videoId -=1
        window.location.href = '/greetings/' + videoId
        currentValue--;
        if (currentValue < 1)
    	    currentValue = 1;
    
		$('#bar').css('width', prog * currentValue);
		$("#stepNum").text(currentValue);
    })

})