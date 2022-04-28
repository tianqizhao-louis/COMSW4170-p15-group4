// $(document).ready(function(){
//     $("#prev_quiz").hide();

//     $("#next_quiz").prop("disabled", true)

//     // go to the next question
//     $("#Next").submit(function(){
//         // go to next
//         id = parseInt(id) + 1;
//         if (id < 8) {
//             $('#Next').attr('action', '/question/'+id);
//         } else {
//             $('#Next').attr('action', '/end');
//         }

//     })

//     // go to the prev question
//     // $("#Prev").submit(function(){
//     //     // don't go if it's the first one
//     //     if (id !== "1") {
//     //         id = parseInt(id) - 1;
//     //         $('#Prev').attr('action', '/question/'+id);
//     //     }
//     // })

//     let cur_data = 0
//     let new_data = 0
//     // for two question types, generate UI
//     if (parseInt(id) === 3 || parseInt(id) === 4) {
//         // all choices are videos
//         $.each(quiz_data, function( index ) {
//             if (parseInt(id) === parseInt(quiz_data[index]["questionId"])) {
//                 cur_data = quiz_data[index]
//                 new_data = $('<p>Q<span>'+id+'</span>: '+ cur_data["question"] +'</p>' +
//                             '<p>Please click on the letter button on the left side of each video when making choices.</p>' +
//                             '<div class = \'row\'>' +
//                             '<div class = \'col-md-1\'><button id=\'A\' class=\'quiz_choice\'> A: </button></div>' +
//                             '<iframe class = \'col-md-5 video_size\' src='+ cur_data["A"] +'> </iframe>' +
//                             '<div class = \'col-md-1\'><button id=\'B\' class=\'quiz_choice\'> B: </button></div>' +
//                             '<iframe class = \'col-md-5 video_size\' src='+ cur_data["B"] +'> </iframe>' +
//                             '</div>' + '<br>' +

//                             '<div class = \'row\'>' +
//                             '<div class = \'col-md-1\'><button id=\'C\' class=\'quiz_choice\'> C: </button></div>' +
//                             '<iframe class = \'col-md-5 video_size\' src='+ cur_data["C"] +'> </iframe>' +
//                             '<div class = \'col-md-1\'><button id=\'D\' class=\'quiz_choice\'> D: </button></div>' +
//                             '<iframe class = \'col-md-5 video_size\' src='+ cur_data["D"] +'> </iframe>' +
//                             '</div>'
//                     )
//             }
//         });
//     } else {
//         // multiple choices of meaning
//         $.each(quiz_data, function( index ) {
//             if (parseInt(id) === parseInt(quiz_data[index]["questionId"])) {
//                 cur_data = quiz_data[index]
//                 new_data = $('<p>Q<span>'+id+'</span>: What does this gesture mean in English?</p>')
//                     .append(
//                         $('<div class = "quiz_center">' +
//                             '<iframe class = \'video_size\' src='+ cur_data["videoLink"] +'> </iframe></div>' +
//                             '<div id = "choices" class = "quiz_center">' +
//                             '<div><button id=\'A\' class=\'quiz_choice\'> A: ' + cur_data["A"] + '</button></div>' +
//                             '<div><button id=\'B\' class=\'quiz_choice\'> B: ' + cur_data["B"] + '</button></div>' +
//                             '<div><button id=\'C\' class=\'quiz_choice\'> C: ' + cur_data["C"] + '</button></div>' +
//                             '<div><button id=\'D\' class=\'quiz_choice\'> D: '+ cur_data["D"] + '</button></div>' +
//                             '</div>')
//                     )
//             }
//         });
//     }
//     $("#quiz_div").append(new_data)


//     // button A B C D
//     $("#A").click(function(){
//         let store_quiz_data = {
//           "questionNumber": id,
//           "choice": "A"
//         };

//         $.ajax({
//             url: "/store",
//             type: "POST",
//             dataType: "json",
//             contentType: "application/json; charset=utf-8",
//             data: JSON.stringify(store_quiz_data),
//             success: function (data, status, xhr) {

//             },
//             error: function (jqxhr, status, error) {
//                 console.log(error)
//             }
//         });


//         if (cur_data["answer"] === 'A') {
//             $("#A").css("background-color", "#b6d7a8")
//             $("p", "#dialog").text(cur_data["correct"]);
//             $("#dialog").dialog({
//                 title: "Correct!",
//             });

//             $.ajax('/increment', {
//                type: 'POST',
//                 success: function (data, status, xhr) {

//                 },
//                 error: function (j, t, e) {

//                 }
//             });
//         } else {
//             $("#A").css("background-color", "#ea9999")
//             $("p", "#dialog").text(cur_data["wrong"]);
//             $("#dialog").dialog({
//                 title: "Almost there!",
//             });
//         }
//         $(".quiz_choice:input").prop('disabled', true);
//         $("#next_quiz").prop("disabled", false);
//     });

//     $("#B").click(function(){

//         let store_quiz_data = {
//           "questionNumber": id,
//           "choice": "B"
//         };

//         $.ajax({
//             url: "/store",
//             type: "POST",
//             dataType: "json",
//             contentType: "application/json; charset=utf-8",
//             data: JSON.stringify(store_quiz_data),
//             success: function (data, status, xhr) {

//             },
//             error: function (jqxhr, status, error) {
//                 console.log(error)
//             }
//         });

//         if (cur_data["answer"] === 'B') {
//             $("#B").css("background-color", "#b6d7a8")
//             $("p", "#dialog").text(cur_data["correct"]);
//             $("#dialog").dialog({
//                 title: "Correct!",
//             });

//             $.ajax('/increment', {
//                type: 'POST',
//                 success: function (data, status, xhr) {

//                 },
//                 error: function (j, t, e) {

//                 }
//             });
//         } else {
//             $("#B").css("background-color", "#ea9999")
//             $("p", "#dialog").text(cur_data["wrong"]);
//             $("#dialog").dialog({
//                 title: "Almost there!",
//             });
//         }
//         $(".quiz_choice:input").prop('disabled', true);
//         $("#next_quiz").prop("disabled", false);
//     });

//     $("#C").click(function(){
//         let store_quiz_data = {
//           "questionNumber": id,
//           "choice": "C"
//         };

//         $.ajax({
//             url: "/store",
//             type: "POST",
//             dataType: "json",
//             contentType: "application/json; charset=utf-8",
//             data: JSON.stringify(store_quiz_data),
//             success: function (data, status, xhr) {

//             },
//             error: function (jqxhr, status, error) {
//                 console.log(error)
//             }
//         });


//         if (cur_data["answer"] === 'C') {
//             $("#C").css("background-color", "#b6d7a8")
//             $("p", "#dialog").text(cur_data["correct"]);
//             $("#dialog").dialog({
//                 title: "Correct!",
//             });

//             $.ajax('/increment', {
//                type: 'POST',
//                 success: function (data, status, xhr) {

//                 },
//                 error: function (j, t, e) {

//                 }
//             });
//         } else {
//             $("#C").css("background-color", "#ea9999")
//             $("p", "#dialog").text(cur_data["wrong"]);
//             $("#dialog").dialog({
//                 title: "Almost there!",
//             });
//         }
//         $(".quiz_choice:input").prop('disabled', true);
//         $("#next_quiz").prop("disabled", false);
//     });

//     $("#D").click(function(){

//         let store_quiz_data = {
//           "questionNumber": id,
//           "choice": "D"
//         };

//         $.ajax({
//             url: "/store",
//             type: "POST",
//             dataType: "json",
//             contentType: "application/json; charset=utf-8",
//             data: JSON.stringify(store_quiz_data),
//             success: function (data, status, xhr) {

//             },
//             error: function (jqxhr, status, error) {
//                 console.log(error)
//             }
//         });


//         if (cur_data["answer"] === 'D') {
//             $("#D").css("background-color", "#b6d7a8")
//             $("p", "#dialog").text(cur_data["correct"]);
//             $("#dialog").dialog({
//                 title: "Correct!",
//             });

//             $.ajax('/increment', {
//                type: 'POST',
//                 success: function (data, status, xhr) {

//                 },
//                 error: function (j, t, e) {

//                 }
//             });
//         } else {
//             $("#D").css("background-color", "#ea9999")
//             $("p", "#dialog").text(cur_data["wrong"]);
//             $("#dialog").dialog({
//                 title: "Almost there!",
//             });
//         }
//         $(".quiz_choice:input").prop('disabled', true);
//         $("#next_quiz").prop("disabled", false);
//     });

// })