document.getElementById("division").addEventListener('click', function() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    var result = divison(value1, value2);
    document.getElementById("result").innerHTML = "el total es: " + result;
});

function divison(firstValue, secodnValue) {
    total = firstValue/secodnValue;
    return total;
}