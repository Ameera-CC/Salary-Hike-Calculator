   // Function to create an object with values from input fields
   var expcted_CtcPercent_res, expcted_CtcAmount_res;
   var currentCtcAmnt;
   var expectedCtcAmnt; 
   var expectedHikePerc;
   var expcted_hikeAmount;
   var expctdctcPercent_decmal;
   var expcted_hikeInAmount;



function calculateCTC() {
    currentCtcAmnt = document.getElementById("current_ctc_amnt").value;
    expectedCtcAmnt = document.getElementById("expected-ctc-amnt").value;
    expectedHikePerc = document.getElementById("expected-hike-perc").value;

    const validNumberRegex = /^[-+]?\d*\.?\d+$/;


    if ((validNumberRegex.test(currentCtcAmnt))) {
        $("#expected-ctc-amnt").prop("readonly", false); 
        $("#expected-hike-perc").prop("readonly", false);

        if ((validNumberRegex.test(expectedCtcAmnt)) && expectedCtcAmnt !== "") {
            $("#expected-hike-perc").prop("readonly", true);
            expcted_hikeAmount = parseFloat(expectedCtcAmnt) - parseFloat(currentCtcAmnt);
            expcted_CtcPercent_res = (expcted_hikeAmount / parseFloat(currentCtcAmnt)) * 100;
            $('input[name="expected-hike-perc-field"]').val(expcted_CtcPercent_res.toFixed(2));
        } else if ((validNumberRegex.test(expectedHikePerc)) && expectedHikePerc !== "") {
            $("#expected-ctc-amnt").prop("readonly", true);
            expctdctcPercent_decmal = parseFloat(expectedHikePerc) / 100;
            expcted_hikeInAmount = parseFloat(currentCtcAmnt) * expctdctcPercent_decmal;
            expcted_CtcAmount_res = parseFloat(currentCtcAmnt) + expcted_hikeInAmount;
            $('input[name="expected-ctc-amnt-field"]').val(expcted_CtcAmount_res.toFixed(2));
        } else {
            alert('Please enter a valid number in the expected field');
        }
    } else {
        alert('Current CTC is a mandatory field. Please type a valid number');
    }
}



$("#btn_amount").on("click", function() {
    $("#btn_percent").css("display", "none")
    calculateCTC();
});

$("#btn_percent").on("click", function() {
    $("#btn_amount").css("display", "none")
    calculateCTC();
});



function resetInput(){
    $('.input-item input').val('');
    $("#expected-ctc-amnt").prop("readonly", false);
    $("#expected-hike-perc").prop("readonly", false);
    $("#btn_percent").css("display", "block")
    $("#btn_amount").css("display", "block")




}

$('.reset-btn').on('click', function() {
    resetInput();

});

