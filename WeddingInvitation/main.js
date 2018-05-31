var password = "100DAYS";
var deadline = new Date("March 22, 2018");

function verifyPassword() {

    showInvitation();
    updateTimer(deadline);

    // var passwordEntered = document.getElementById("txt-password").value;

    // if (passwordEntered.length != 0 && passwordEntered != undefined) {

    //     if (passwordEntered.toUpperCase() === password) {
            
    //         showInvitation();

    //     } else {

    //         document.getElementById("login-error").innerHTML = "Sorry, you entered an incorrect password. Please try again.";

    //     }

    // } else {

    //     document.getElementById("login-error").innerHTML = "You must enter a password to continue.";

    // }
}

function showInvitation() {

    console.log("showInvitation() function has begun executing");

    $("#password-body").css("display", "none");
    $("#map-body").css("display", "none");
    $("#rsvp-body").css("display", "none");
    $("#invitation-body").css("display", "block");

    $("#rsvp-edge").css("visibility", "visible");
    $("#map-edge").css("visibility", "visible");
    $("#invitation-edge").css("visibility", "visible");

}

function showRSVP() {

    console.log("showRSVP() function has begun executing");

    $("#invitation-body").css("display", "none");
    $("#map-body").css("display", "none");
    $("#rsvp-confirmation").css("display", "none");
    $("#rsvp-body").css("display", "block");

    disableRSVP(deadline);

}

function showConfirmation() {

    console.log("showConfirmation() function has begun executing");

    $("#rsvp-body").css("display", "none");
    $("#rsvp-confirmation").css("display", "block");

}

function showMap() {

    console.log("showMap() function has begun executing");

    $("#invitation-body").css("display", "none");
    $("#rsvp-body").css("display", "none");
    $("#rsvp-confirmation").css("display", "none");
    $("#map-body").css("display", "block");

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
        $("#attendance1").prop('disabled','disabled');
        $("#btn-rsvp").prop('disabled','disabled');

        $("#countdown-text-left").css('visibility','hidden');
        $("#countdown-text-right").css('visibility','hidden');

        $("#rsvp-info").html("The deadline to RSVP has passed.<br>If you still wish to attend the event, contact the wedding coordinator.");
        $("#rsvp-info").css("color","red");
    }

}



function RSVP() {

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

