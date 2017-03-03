function rQuestion() {
    event.preventDefault();
    console.log('Asking a question');
    console.log($("#question"));
    var question = $("#question").val();
    $.ajax({
        type: "GET",
        url: "/api/watson?question=" + question,
        success: function (response) {
            console.log(response);
            displayAnswer(response);
        }
    });
}

//answer is a json object
function displayAnswer(response) {
    var question = document.getElementById("question").value;
    $('.answer').text(response["output"]["text"][0]);
}
