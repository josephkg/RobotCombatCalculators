let discRes = document.querySelector("#discResult");
let lifeRes = document.querySelector("#lifeResult");

function calculateLife(){
	let ampInput = document.querySelector("#ampsNeeded").value
	let capInput = document.querySelector("#batteryCap").value;
	let discInput = document.querySelector("#discVal").value;
	discRes.innerHTML = capInput * discInput;
	lifeRes.innerHTML = (capInput / ampInput) * 60 + " minutes";
}