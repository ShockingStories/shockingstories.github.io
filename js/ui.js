function powerOff() {
    $("body").hide();
    $("html").css("background-color", "black");
    setTimeout(
            function() {
                $("html").css("background-color", "none");
                $("body").show();
            }, 3000);
}