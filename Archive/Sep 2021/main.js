var eT, tT  = "";

tT = trophies.length;
document.getElementById("totTro").innerHTML = tT;

var trophiesLocked = "";
let lockedFilter = trophies.filter(function (filter1) {
  return filter1.troAttr == "Locked" || filter1.troAttr == "Hidden";
});

trophiesLocked = lockedFilter.sort((first, second) => second.troRarity - first.troRarity);

const n = 5 //get the first 5 items

const newTrophiesLocked = trophiesLocked.slice(0, n)

var troInfo1 = "";
let i = 0;
while (i < newTrophiesLocked.length){
  if (newTrophiesLocked[i].troAttr == 'Locked'){
    troInfo1 += "<div class='trophyCard'>";
    troInfo1 += "<img class='trophyLogo" + newTrophiesLocked[i].troType + "'>";
    troInfo1 += "<div>";
    troInfo1 += "<p class='trophyName'>" + newTrophiesLocked[i].troName + "</p>";
    troInfo1 += "<p class='trophyDescription'>" + newTrophiesLocked[i].troDesc + "</p></div>";
    troInfo1 += "</div>";
    i++;
    document.getElementById("targetTrophies").innerHTML = troInfo1;
  } else if (newTrophiesLocked[i].troAttr == "Hidden") {
    troInfo1 += "<div class='trophyCard'>";
    troInfo1 += "<img class='trophyLogoHidden'>";
    troInfo1 += "<div>";
    troInfo1 += "<p class='trophyName'>Hidden Trophy</p>";
    troInfo1 += "</div>";
    troInfo1 += "</div>";
    i++;
    document.getElementById("targetTrophies").innerHTML = troInfo1;
  }
}


var trophiesUnlocked = "";
let unlockedFilter = trophies.filter(function (filter2) {
  return filter2.troAttr == "Unlocked";
});

trophiesUnlocked = unlockedFilter.sort((first, second) => second.troSequence - first.troSequence);

const o = 5 //get the first 5 items

const newTrophiesUnocked = trophiesUnlocked.slice(0, o)

var troInfo2 = "";
let j = 0;
while (j < newTrophiesUnocked.length){
    troInfo2 += "<div class='trophyCard'>";
    troInfo2 += "<img class='trophyLogo" + newTrophiesUnocked[j].troType + "'>";
    troInfo2 += "<img class='trophyIMG' src='" + newTrophiesUnocked[j].troIMG + "'>";
    troInfo2 += "<div>";
    troInfo2 += "<p class='trophyName'>" + newTrophiesUnocked[j].troName + "</p>";
    troInfo2 += "<p class='trophyDescription'>" + newTrophiesUnocked[j].troDesc + "</p></div>";
    troInfo2 += "</div>";
    j++;
    document.getElementById("earnedTrophies").innerHTML = troInfo2;
}

eT = trophiesUnlocked.length;
document.getElementById("earTro").innerHTML = eT;

var myIndex = 0;
carousel();

function carousel() {
  var k;
  var y = document.getElementsByClassName("trophyColumn");
  for (k = 0; k < y.length; k++) {
    y[k].className = "trophyColumn";
  }
  myIndex++;
  if (myIndex > y.length) {myIndex = 1}
  y[myIndex-1].className = "trophyColumn fade active";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
