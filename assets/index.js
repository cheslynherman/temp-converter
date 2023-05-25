function calculate(){
    let calculation;
    let fahrenheit= parseInt(document.getElementById("convert").value);
    let results= document.getElementById("results");

    calculation= ((fahrenheit-32)/1.8).toFixed(2)
    results.textContent=calculation
    // document.getElementById("results").innerHTML = output;
}
function convert() {
    let calculate;
    let celsius= parseInt(document.getElementById("converter").value);
    let complete= document.getElementById("results-f");

    calculate= ((celsius*9/5)+32).toFixed(2);
    complete.textContent= calculate;
}



function reloadPage(){
    window.location.reload();
}