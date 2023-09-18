// function to calculate volume of sphere
function calcVolume() {
    // get input value
    let radius = document.getElementById("radius").value;
    console.log(radius);
    let result;
    if(isNaN(radius)){
        result = "Invalid input.";
    }
    else{
        result = 4 / 3 * Math.PI * Math.pow(radius, 3);
    }
    document.getElementById("res").innerHTML = `Volume of sphere with radius ${radius} is ${result.toFixed(2)} cm^3`;
}

document.getElementById("btn").onclick = function() {calcVolume()};