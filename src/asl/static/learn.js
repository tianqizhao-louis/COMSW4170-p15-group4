$(document).ready(function() {
    if (learn_type === "greetings") {
        $("#nav-link-greetings").addClass("nav-active");
    } else if (learn_type === "manners") {
        $("#nav-link-manners").addClass("nav-active");
    } else if (learn_type === "learning") {
        $("#nav-link-learning-asl").addClass("nav-active");
    } else if (learn_type === "farewell") {
        $("#nav-link-farewell").addClass("nav-active");
    }
});
