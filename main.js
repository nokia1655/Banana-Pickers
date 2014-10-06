var TotalBan = 0;
var bps = 0;

var ClickPlus = 1

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
	TotalBan += ClickPlus;
	refreshlabels();
}

function BanClicker(){
	if (TotalBan >= ClickerPrice) {
		TotalBan -= ClickerPrice;
		ClickersOwned = ClickersOwned += 1;
		refreshlabels();
		} else {
		alert("You Don't have enough Money")
	}
}

function UpClick(){
	if (TotalBan >= Clickerup & ClickerupStat < 3) {
		TotalBan -= Clickerup;
		ClickerupStat += 1;
		refreshlabels();
		} else {
		
	}
}

function BanPick(){
	if (TotalBan >= PickerPrice) {
		TotalBan -= PickerPrice;
		PickerOwned = PickerOwned += 1;
		refreshlabels();
		} else {
		
	}
}

function UpPick(){
	if (TotalBan >= Pickerup & PickerupStat < 5) {
		TotalBan -= Pickerup;
		PickerupStat += 1;
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

function Upfarm(){
	if (TotalBan >= Farmup & FarmupStat < 3) {
		TotalBan -= Farmup;
		FarmupStat += 1;
		refreshlabels();
		} else {
		
	}
}

function BanFact(){
	if (TotalBan >= FactPrice) {
		TotalBan -= FactPrice;
		FactOwned = FactOwned += 1;
		refreshlabels();
		} else {
		
	}
}

function UpFact(){
	if (TotalBan >= Factup & FactupStat < 3) {
		TotalBan -= Factup;
		FarmupStat += 1;
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
document.getElementById("ClickerLabel").innerHTML = ClickersOwned;
document.getElementById("FarmLabel").innerHTML = FarmOwned;
document.getElementById("FactLabel").innerHTML = FactOwned;
document.getElementById("PickerLabel").innerHTML = PickerOwned;
document.getElementById("UpClickLabel").innerHTML = ClickerupStat + "/3 Upgrade Clicker - $" + Clickerup;
document.getElementById("UpClickLabel").innerHTML = PickerupStat + "/5 Upgrade Picker - $" + Pickerup;
document.getElementById("UpClickLabel").innerHTML = FarmupStat + "/3 Upgrade Farm - $" + Farmup;
document.getElementById("UpClickLabel").innerHTML = FactupStat + "/5 Upgrade Factory - $" + Factup;
document.getElementById("BananaTot").innerHTML = "Bananas: " + TotalBan;
document.getElementById("BPSLabel").innerHTML = bps
}

