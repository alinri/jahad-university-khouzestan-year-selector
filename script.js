


var check = document.getElementsByClassName("gt")
if(check.length == 0) {
    var select = document.getElementById("ctl00_CPH2_drpTerm");
    select.value = select[select.length-1].value;
}

