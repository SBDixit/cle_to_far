var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");

function cel_far()
{
    var output = (parseFloat(celsius.value)*1.8)+32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}
function far_cel()
{
    var output = ( parseFloat(fahrenheit.value)-32)*1.8;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}