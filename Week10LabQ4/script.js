function showArray(){
const Array1=[20,45,85,15,74];
document.getElementById("main").innerHTML=Array1.toString();
}

function showMax(){
	const Array1=[20,45,85,15,74];
	max=Array1.reduce(function(a, b) {
    return Math.max(a, b);
}, 0);
	alert("The maximum number of the array is : " +max);
}


