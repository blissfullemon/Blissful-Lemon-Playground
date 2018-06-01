var password = "100DAYS";
var deadline = new Date("July 22, 2018");
var guestList = [];

var loggedIn = false;

var errors = 0;
var errorList = "";

function verifyPassword() {

    updateTimer(deadline);

    var passwordEntered = document.getElementById("txt-password").value;

    if (passwordEntered.length != 0 && passwordEntered != undefined) {

        if (passwordEntered.toUpperCase() === password) {
            
            showInvitation();

            loggedIn = true;

        } else {

            document.getElementById("login-error").innerHTML = "Sorry, you entered an incorrect password. Please try again.";

        }

    } else {

        document.getElementById("login-error").innerHTML = "You must enter a password to continue.";

    }
}

function showInvitation() {

    console.log("showInvitation() function has begun executing");

    if (loggedIn == true) {
        $("#password-body").css("display", "none");
        $("#map-body").css("display", "none");
        $("#rsvp-body").css("display", "none");
        $("#invitation-body").css("display", "block");

        $("#rsvp-confirmation").css("display", "none");

    }

}

function showRSVP() {

    console.log("showRSVP() function has begun executing");

    if (loggedIn == true) {

        $("#invitation-body").css("display", "none");
        $("#map-body").css("display", "none");
        $("#rsvp-confirmation").css("display", "none");
        $("#rsvp-body").css("display", "block");

        disableRSVP(deadline);

    }

}

function showConfirmation() {

    console.log("showConfirmation() function has begun executing");

    $("#rsvp-body").css("display", "none");
    $("#rsvp-confirmation").css("display", "block");

}

function showMap() {

    console.log("showMap() function has begun executing");

    if (loggedIn == true) {

        $("#invitation-body").css("display", "none");
        $("#rsvp-body").css("display", "none");
        $("#rsvp-confirmation").css("display", "none");
        $("#map-body").css("display", "block");

    }

}

function getTimeLeft(deadline) {

    var timeLeft = Date.parse(deadline) - Date.parse(new Date());

    var s = Math.floor((timeLeft/1000) % 60);
    var m = Math.floor((timeLeft/1000/60) % 60);
    var h = Math.floor((timeLeft/(1000*60*60)) % 24);
    var d = Math.floor(timeLeft/(1000*60*60*24));

    return {
        'totalTime':timeLeft, 'days':d, 'hours':h, 'minutes':m, 'seconds':s
    };

}

function updateTimer(deadline) {

    var interval = setInterval( function() {

        var timeLeft = getTimeLeft(deadline);

        $("#days").html(timeLeft.days);
        $("#hours").html(timeLeft.hours);
        $("#minutes").html(timeLeft.minutes);

        if (timeLeft.totalTime <= 0) {
            clearInterval(interval);
            $("#days").html("00");
            $("#hours").html("00");
            $("#minutes").html("00");
        }
    }, 1000);

}

function disableRSVP(deadline) {

    var timeLeft = getTimeLeft(deadline);
    console.log(timeLeft);

    if (timeLeft.totalTime <= 0) {
        $("#name1").prop('disabled','disabled');
        $("#btn-rsvp").prop('disabled','disabled');
        $("#name2").prop('disabled','disabled');
        $("#name3").prop('disabled','disabled');
        $("#name4").prop('disabled','disabled');

        $("#countdown-text-left").css('visibility','hidden');
        $("#countdown-text-right").css('visibility','hidden');

        $("#rsvp-info").html("The deadline to RSVP has passed.<br>If you still wish to attend the event, contact the wedding coordinator.");
        $("#rsvp-info").css("color","#F7789C");
    }

}

function checkInput() {

    var name;
    var attendance;
    var meal;
    errors = 0;
    errorList = "";

    for (var i = 1; i < 5; i++) {

        name = $("#name" + i).val();
        attendance = $("#attendance" + i).val();
        meal = $("#meal" + i).val();

        if (name.length > 0) {
            guestList.push(name);
            
            if (attendance != null) {
                guestList.push(attendance);

                if (meal == null && (attendance == "both" || attendance == "reception")) {
                    errorList = errorList + ("You must select a meal for guest " + i + " if they plan to attend the reception. ");
                    errors++;
                } else if (meal != null) {
                    guestList.push(meal);
                }
            } else {
                errorList = errorList + ("You must specify an attendance option for guest " + i + ". ");
                errors++;
            }

        }

    }

    if (errors > 0) {
        console.log(errorList);
        console.log(errors);
        $("#errors").html("There are " + errors + " errors that must be fixed.");
        $("#formError").css("visibility", "visible");
    } else {
        $("#formError").css("visibility", "hidden");
    }

}

function displayErrors() {

    alert(errorList);

}

function submitRSVP() {
    
    checkInput();

    if (errors === 0){
        showConfirmation();
    }

}

$("#rsvp-edge").click( function() {
    console.log("The edge has been clicked");
    showRSVP();
});

$("#map-edge").click( function() {
    console.log("The map edge has been clicked");
    showMap();
});

$("#invitation-edge").click( function() {
    console.log("The invitation edge has been clicked");
    showInvitation();
});

$("#name1").keydown( function(){

    var name = $("#name1").val();

    if (name.length > 1) {

        $("#attendance1").prop("disabled", false);

    } else {
        $("#attendance1").val("");
        $("#attendance1").prop("disabled", "disabled");
    }

});

$("#name1").change( function(){

    var name = $("#name1").val();

    if (name.length > 1) {

        $("#attendance1").prop("disabled", false);

    } else {
        $("#attendance1").val("");
        $("#attendance1").prop("disabled", "disabled");
        $("#meal1").val("");
        $("#meal1").prop("disabled", "disabled");
    }

});

$("#name2").keydown( function(){

    var name = $("#name2").val();

    if (name.length > 1) {

        $("#attendance2").prop("disabled", false);

    } else {
        $("#attendance2").val("");
        $("#attendance2").prop("disabled", "disabled");
    }

});

$("#name2").change( function(){

    var name = $("#name2").val();

    if (name.length > 1) {

        $("#attendance2").prop("disabled", false);

    } else {
        $("#attendance2").val("");
        $("#attendance2").prop("disabled", "disabled");
        $("#meal2").val("");
        $("#meal2").prop("disabled", "disabled");
    }

});

$("#name3").keydown( function(){

    var name = $("#name3").val();

    if (name.length > 1) {

        $("#attendance3").prop("disabled", false);

    } else {
        $("#attendance3").val("");
        $("#attendance3").prop("disabled", "disabled");
    }

});

$("#name3").change( function(){

    var name = $("#name3").val();

    if (name.length > 1) {

        $("#attendance3").prop("disabled", false);

    } else {
        $("#attendance3").val("");
        $("#attendance3").prop("disabled", "disabled");
        $("#meal3").val("");
        $("#meal3").prop("disabled", "disabled");
    }

});

$("#name4").keydown( function(){

    var name = $("#name4").val();

    if (name.length > 1) {

        $("#attendance4").prop("disabled", false);

    } else {
        $("#attendance4").val("");
        $("#attendance4").prop("disabled", "disabled");
    }

});

$("#name4").change( function(){

    var name = $("#name4").val();

    if (name.length > 1) {

        $("#attendance4").prop("disabled", false);

    } else {
        $("#attendance4").val("");
        $("#attendance4").prop("disabled", "disabled");
        $("#meal4").val("");
        $("#meal4").prop("disabled", "disabled");
    }

});

$("#attendance1").change( function(){
    console.log("Attendance has been changed!");

    var attendanceOption = $("#attendance1").val();
    console.log(attendanceOption);

    if (attendanceOption == "both" || attendanceOption == "reception") {

        $("#meal1").prop("disabled", false);

    } else {
        $("#meal1").prop("disabled","disabled");
        $("#meal1").val("");
    }

});

$("#attendance2").change( function(){
    console.log("Attendance has been changed!");

    var attendanceOption = $("#attendance2").val();
    console.log(attendanceOption);

    if (attendanceOption == "both" || attendanceOption == "reception") {

        $("#meal2").prop("disabled", false);

    } else {
        $("#meal2").prop("disabled","disabled");
        $("#meal2").val("");
    }

});

$("#attendance3").change( function(){
    console.log("Attendance has been changed!");

    var attendanceOption = $("#attendance3").val();
    console.log(attendanceOption);

    if (attendanceOption == "both" || attendanceOption == "reception") {

        $("#meal3").prop("disabled", false);

    } else {
        $("#meal3").prop("disabled","disabled");
        $("#meal3").val("");
    }

});

$("#attendance4").change( function(){
    console.log("Attendance has been changed!");

    var attendanceOption = $("#attendance4").val();
    console.log(attendanceOption);

    if (attendanceOption == "both" || attendanceOption == "reception") {

        $("#meal4").prop("disabled", false);

    } else {
        $("#meal4").prop("disabled","disabled");
        $("#meal4").val("");
    }

});