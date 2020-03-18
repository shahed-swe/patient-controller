$(function() {

    $("#first_medicine_name").attr("disabled", true);
    $("#first_medicine_time").attr("disabled", true);
    $("#second_medicine_name").css("display", "none");
    $("#second_medicine_time").css("display", "none");
    $("#third_medicine_name").css("display", "none");
    $("#third_medicine_time").css("display", "none");

    $("#patient_id").on('input', function() {
        var input = $("#patient_id").val();
        if (input) {
            $("#first_medicine_name").attr("disabled", false);
            $("#first_medicine_time").attr("disabled", false);
        } else {
            $("#first_medicine_name").attr("disabled", true);
            $("#first_medicine_time").attr("disabled", true);
        }
    });

    $("#first_medicine_time").on('input', function() {
        var input = $("#first_medicine_time").val();
        if (input) {
            $("#second_medicine_name").css("display", "block");
            $("#second_medicine_time").css("display", "block");
            $("#second_medicine_time").attr("disabled", true);
        } else {
            $("#second_medicine_name").css("display", "none");
            $("#second_medicine_time").css("display", "none");
            $("#third_medicine_name").css("display", "none");
            $("#third_medicine_time").css("display", "none");
        }
    });
    $("#second_medicine_name").on('input', function() {
        var input = $("#second_medicine_name").val();
        if (input) {
            $("#second_medicine_time").attr("disabled", false);
        } else {
            $("#second_medicine_time").attr("disabled", true);
        }
    });

    $("#second_medicine_time").on('input', function() {
        var input = $("#second_medicine_time").val();
        if (input) {
            $("#third_medicine_name").css("display", "block");
            $("#third_medicine_time").css("display", "block");
            $("#third_medicine_time").attr("disabled", true);

        } else {
            $("#third_medicine_name").css("display", "none");
            $("#third_medicine_time").css("display", "none");
        }
    });

    $("#third_medicine_name").on('input', function() {
        var input = $("#third_medicine_name").val();
        if (input) {
            $("#third_medicine_time").attr("disabled", false);
        } else {
            $("#third_medicine_time").attr("disabled", true);
        }
    });

    $("#submit").click(function() {
        event.preventDefault();
        var data1 = $("#first_medicine_name").val();
        var data2 = $("#first_medicine_time").val();
        if (data1 && data2) {
            var data = {
                input0: $('#patient_id').val(),
                input1: $("#first_medicine_name").val(),
                input2: $("#first_medicine_time").val(),
                input3: $("#second_medicine_name").val(),
                input4: $("#second_medicine_time").val(),
                input5: $("#third_medicine_name").val(),
                input6: $("#third_medicine_time").val(),
            }
        } else {
            alert("Nothing to send!!")
            var data = {}
        }
        if (data) {
            console.log(data);
            localStorage.setItem('getvalue', data);
        } else {
            console.log("Nothing to be prevent here!!!");
        }
    });
});