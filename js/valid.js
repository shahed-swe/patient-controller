$(document).ready(function() {

    $("#user_name").on('input', function() {
        var input = $("#user_name").val();
        if (input) {
            if (input == "Shahed") {
                $("#user_name").attr("class", "form-control is-valid");
            } else {
                $("#user_name").attr("class", "form-control is-invalid");
            }
        } else {
            $("#user_name").attr("class", "form-control");
        }
    });

    $("#password").on('input', function() {
        var input = $("#password").val();
        if (input) {
            if (input == "32100505") {
                $("#password").attr("class", "form-control is-valid");
            } else {
                $("#password").attr("class", "form-control is-invalid");
            }
        } else {
            $("#password").attr("class", "form-control");
        }
    });

    $("#submit").css('display', 'none');
    $('#password').on('input', function() {
        var password = $("#password").val();
        if (password) {
            $("#submit").css('display', 'block');
        } else {
            $("#submit").css('display', 'none');
        }
    });

    $("#submit").click(function() {
        var input1 = $("#user_name").val();
        var input2 = $("#password").val();
        if (input1 && input2) {
            if (input1 == "Shahed" && input2 == "32100505") {
                alert("Welcome To New Zen Tech");
                $("#validform").attr("action", "home.html");
            } else {
                alert("Wrong user name or password");
            }
        } else {
            alert("Please Try Again!");
        }
    });

});