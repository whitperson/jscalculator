$(document).ready(function(){
  var testNumLength = function(number)
        {
            if (number.length > 15)
            {
            totaldiv.val(number.substr(number.length-15,15));
            if (number.length > 22)
            {
                number = "";
                totaldiv.val("Err");
            }
        }
    };

$(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 49) {
            $("#one").click();
       } else if (keycode === 50) {
            $("#two").click();
        } else if (keycode === 51) {
            $("#three").click();
        } else if (keycode === 52) {
            $("#four").click();
        } else if (keycode === 53) {
            $("#five").click();
        } else if (keycode === 54) {
            $("#six").click();
        } else if (keycode === 55) {
            $("#seven").click();
        } else if (keycode === 56) {
            $("#eight").click();
        } else if (keycode === 57) {
            $("#nine").click();
        } else if (keycode === 48) {
            $("#zero").click();
        } else if (keycode === 97) {
            $("#clearall").click();
        } else if (keycode === 99) {
            $("#clear").click();
        } else if (keycode === 13) {
            $("#equals").click();
        } else if (keycode === 43) {
            $("#add").click();
        } else if (keycode === 45) {
            $("#subtract").click();
        } else if (keycode === 42 || keycode === 120) {
            $("#multiply").click();
        } else if (keycode === 47) {
            $("#divide").click();
        }
    });

    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $('#display');
    totaldiv.text("0");

    $(".button").click(function()
    {
        number += $(this).val();
        totaldiv.val(number);
        testNumLength(number);
    });

    $(".operation").click(function(){
        operator = $(this).val();
        newnumber = number;
        number = "";
        totaldiv.val("0");
    });

    $("#clear,#clearall").click(function(){
        number = "";
        totaldiv.val("0");

        if ($(this).attr("id") === "clearall")
        {
          newnumber = "";
        }
    });

    answer = "";
    $("#equals").click(function(){
        if (operator === "+"){
          number = (parseFloat(newnumber, 10) + parseFloat(number,10));
        } else if (operator === "-"){
          number = (parseFloat(newnumber, 10) - parseFloat(number,10));
        } else if (operator === "/"){
          number = (parseFloat(newnumber, 10) / parseFloat(number,10));
        } else if (operator === "*"){
          number = (parseFloat(newnumber, 10) * parseFloat(number,10));
        }

    totaldiv.val(number);
    testNumLength(number);
    number = "";
    newnumber = "";
    });
});