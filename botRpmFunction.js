let rpmOutput = document.querySelector("#rpmResult");
let rpsOutput = document.querySelector("#rpsResult");
let circumOutput = document.querySelector("#circumResult");
let inSecOutput = document.querySelector("#inSecResult");
let inMinOutput = document.querySelector("#inMinResult");
let ftSecOutput = document.querySelector("#ftSecResult");
let ftMinOutput = document.querySelector("#ftMinResult");

function calculateSpeed(){
	let motorRpm = document.querySelector("#motorRPMval").value;
	let gearRatio = document.querySelector("#gearRatioval").value;
	let diameter = document.querySelector("#diameterval").value;
	let rpm =  Math.round(motorRpm / gearRatio);
	let rps = Math.round(rpm / 60);
	let circumference = diameter * 3.14;
	let ips = circumference * rps;
	let ipm = circumference * rpm;
	
	rpmOutput.innerHTML = rpm + " rpm";
	rpsOutput.innerHTML = rps + " rpm";
	circumOutput.innerHTML = circumference;
	inSecOutput.innerHTML = ips + " in";
	inMinOutput.innerHTML = ipm + " in";
	ftSecOutput.innerHTML = (ips / 12) + " ft";
	ftMinOutput.innerHTML = (ipm / 12) + " ft";
}