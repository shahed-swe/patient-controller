$(function() {
    $("#first_medicine_name").attr("disabled", true);
    $("#first_medicine_time").attr("disabled", true);
    $("#second_medicine_name").attr("disabled", true);
    $("#second_medicine_time").attr("disabled", true);
    $("#third_medicine_name").attr("disabled", true);
    $("#third_medicine_time").attr("disabled", true);
    $("#submit").css("display", "none");

    $("#patient_id").on('input', function() {
        var input = $('#patient_id').val();
        if (input) {
            $("#first_medicine_name").attr("disabled", false);
        } else {
            $("#first_medicine_name").attr("disabled", true);
            $("#first_medicine_time").attr("disabled", true);
            $("#second_medicine_name").attr("disabled", true);
            $("#second_medicine_time").attr("disabled", true);
            $("#third_medicine_name").attr("disabled", true);
            $("#third_medicine_time").attr("disabled", true);
        }
    });

    $("#first_medicine_name").on('input', function() {
        var input = $('#first_medicine_name').val();
        if (input) {
            $("#first_medicine_time").attr("disabled", false);
        } else {
            $("#first_medicine_time").attr("disabled", true);
            $("#second_medicine_name").attr("disabled", true);
            $("#second_medicine_time").attr("disabled", true);
            $("#third_medicine_name").attr("disabled", true);
            $("#third_medicine_time").attr("disabled", true);
        }
    });
    $("#first_medicine_time").on('input', function() {
        var input = $('#first_medicine_time').val();
        if (input) {
            $("#second_medicine_name").attr("disabled", false);
        } else {
            $("#second_medicine_name").attr("disabled", true);
            $("#second_medicine_time").attr("disabled", true);
            $("#third_medicine_name").attr("disabled", true);
            $("#third_medicine_time").attr("disabled", true);
        }
    });
    $("#second_medicine_name").on('input', function() {
        var input = $('#second_medicine_name').val();
        if (input) {
            $("#second_medicine_time").attr("disabled", false);
        } else {
            $("#second_medicine_time").attr("disabled", true);
            $("#third_medicine_name").attr("disabled", true);
            $("#third_medicine_time").attr("disabled", true);
        }
    });
    $("#second_medicine_time").on('input', function() {
        var input = $('#second_medicine_time').val();
        if (input) {
            $("#third_medicine_name").attr("disabled", false);
        } else {
            $("#third_medicine_name").attr("disabled", true);
            $("#third_medicine_time").attr("disabled", true);
        }
    });
    $("#third_medicine_name").on('input', function() {
        var input = $('#third_medicine_name').val();
        if (input) {
            $("#third_medicine_time").attr("disabled", false);
        } else {
            $("#third_medicine_time").attr("disabled", true);
        }
    });
    $("#third_medicine_time").on('input', function() {
        var input = $('#third_medicine_time').val();
        if (input) {
            $("#submit").css("display", "block");
        } else {
            $("#submit").css("display", "none");
        }
    });
});