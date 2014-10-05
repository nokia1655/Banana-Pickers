var TotalBan = 0;
var bps = 0;

var ClickersOwned = 0;
var ClickerPrice = 50;
var ClickerMultiplier = 1;
var Clickerup = 250;
var ClickerupStat = 0;

var PickerOwned = 0;
var PickerPrice = 150;
var PickerMultiplier = 2;
var Pickerup = 500;
var PickerupStat = 0;

var FarmOwned = 0;
var FarmPrice = 500;
var FarmMultiplier = 3;
var Farmup = 1000;
var FarmupStat = 0;

var FactOwned = 0;
var FactPrice = 1000;
var FactMultiplier = 4;
var Factup = 5000;
var FactupStat = 0;

function BanCLICK(){
	TotalBan += 1;
	refreshlabels();
}

function BanClicker(){
	if (TotalBan >= ClickerPrice) {
		TotalBan -= ClickerPrice;
		FarmOwned = ClickersOwned += 1;
		refreshlabels();
		} else {
		alert("You Don't have enough Money")
	}
}

function BanPick(){
	if (TotalBan >= PickerPrice) {
		TotalBan -= PickerPrice;
		FarmOwned = PickerOwned += 1;
		refreshlabels();
		} else {
		
	}
}

function UpClick(){
	if (TotalBan >= Clickerup) {
		TotalBan -= Clickerup;
		ClickerupStat += 1;
		refreshlabels();
		} else {
		
	}
}	

function Banfarm(){
	if (TotalBan >= FarmPrice) {
		TotalBan -= FarmPrice;
		FarmOwned = FarmOwned += 1;
		refreshlabels();
		} else {
		
	}
}

function BanFact(){
	if (TotalBan >= FactPrice) {
		TotalBan -= FactPrice;
		FarmOwned = FactOwned += 1;
		refreshlabels();
		} else {
		
	}
}


function starttimer(){
	setInterval(function() {
	checkbps();
		TotalBan += bps;
		refreshlabels();
	}, 1000);
	
}

function checkbps() {
bps = (ClickersOwned * ClickerMultiplier) + (FarmOwned * FarmMultiplier) + (PickerOwned * PickerMultiplier) + (FactOwned * FactMultiplier);
}

function refreshlabels() {
document.getElementById("BananaTot").innerHTML = "Bananas: " + TotalBan;
document.getElementById("FarmLabel").innerHTML = FarmOwned;
document.getElementById("FactLabel").innerHTML = FactOwned;
document.getElementById("PickerLabel").innerHTML = PickerOwned;
document.getElementById("ClickerLabel").innerHTML = ClickersOwned;
document.getElementById("BananaTot").innerHTML = "Bananas: " + TotalBan;
document.getElementById("BPSLabel").innerHTML = bps
}

function checkbps() {
bps = (ClickersOwned * ClickerMultiplier) + (FarmOwned * FarmMultiplier) + (PickerOwned * PickerMultiplier) + (FactOwned * FactMultiplier);
}