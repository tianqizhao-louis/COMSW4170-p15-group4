$(document).ready(function(){
    $("#next_quiz").prop("disabled", true);


    $("#A").click(function(){
        let store_quiz_data = {
            "questionNumber": quiz_item["questionId"],
            "choice": "A"
        };

        $.ajax({
            url: "/store",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(store_quiz_data),
            success: function (data, status, xhr) {

            },
            error: function (jqxhr, status, error) {
                console.log(error)
            }
        });


        if (quiz_item["answer"] === 'A') {
            $("#A").css("background-color", "#b6d7a8");
            $("p", "#dialog").text(quiz_item["correct"]);
            $("#dialog").dialog({
                title: "Correct!",
            });

            $.ajax('/increment', {
               type: 'POST',
                success: function (data, status, xhr) {

                },
                error: function (j, t, e) {

                }
            });
        } else {
            $("#A").css("background-color", "#ea9999")
            $("p", "#dialog").text(quiz_item["wrong"]);
            $("#dialog").dialog({
                title: "Almost there!",
            });
        }
        $(".quiz_choice:input").prop('disabled', true);
        $("#next_quiz").prop("disabled", false);
    });

    $("#B").click(function(){
        let store_quiz_data = {
            "questionNumber": quiz_item["questionId"],
            "choice": "B"
        };

        $.ajax({
            url: "/store",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(store_quiz_data),
            success: function (data, status, xhr) {

            },
            error: function (jqxhr, status, error) {
                console.log(error)
            }
        });


        if (quiz_item["answer"] === 'B') {
            $("#B").css("background-color", "#b6d7a8");
            $("p", "#dialog").text(quiz_item["correct"]);
            $("#dialog").dialog({
                title: "Correct!",
            });

            $.ajax('/increment', {
               type: 'POST',
                success: function (data, status, xhr) {

                },
                error: function (j, t, e) {

                }
            });
        } else {
            $("#B").css("background-color", "#ea9999")
            $("p", "#dialog").text(quiz_item["wrong"]);
            $("#dialog").dialog({
                title: "Almost there!",
            });
        }
        $(".quiz_choice:input").prop('disabled', true);
        $("#next_quiz").prop("disabled", false);
    });

    $("#C").click(function(){
        let store_quiz_data = {
            "questionNumber": quiz_item["questionId"],
            "choice": "C"
        };

        $.ajax({
            url: "/store",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(store_quiz_data),
            success: function (data, status, xhr) {

            },
            error: function (jqxhr, status, error) {
                console.log(error)
            }
        });


        if (quiz_item["answer"] === 'C') {
            $("#C").css("background-color", "#b6d7a8");
            $("p", "#dialog").text(quiz_item["correct"]);
            $("#dialog").dialog({
                title: "Correct!",
            });

            $.ajax('/increment', {
               type: 'POST',
                success: function (data, status, xhr) {

                },
                error: function (j, t, e) {

                }
            });
        } else {
            $("#C").css("background-color", "#ea9999")
            $("p", "#dialog").text(quiz_item["wrong"]);
            $("#dialog").dialog({
                title: "Almost there!",
            });
        }
        $(".quiz_choice:input").prop('disabled', true);
        $("#next_quiz").prop("disabled", false);
    });

    $("#D").click(function(){
        let store_quiz_data = {
            "questionNumber": quiz_item["questionId"],
            "choice": "D"
        };

        $.ajax({
            url: "/store",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(store_quiz_data),
            success: function (data, status, xhr) {

            },
            error: function (jqxhr, status, error) {
                console.log(error)
            }
        });


        if (quiz_item["answer"] === 'D') {
            $("#D").css("background-color", "#b6d7a8");
            $("p", "#dialog").text(quiz_item["correct"]);
            $("#dialog").dialog({
                title: "Correct!",
            });

            $.ajax('/increment', {
               type: 'POST',
                success: function (data, status, xhr) {

                },
                error: function (j, t, e) {

                }
            });
        } else {
            $("#D").css("background-color", "#ea9999")
            $("p", "#dialog").text(quiz_item["wrong"]);
            $("#dialog").dialog({
                title: "Almost there!",
            });
        }
        $(".quiz_choice:input").prop('disabled', true);
        $("#next_quiz").prop("disabled", false);
    });

});