var eT, tT  = "";

tT = trophies.length;
document.getElementById("totTro").innerHTML = tT;

var trophiesLocked = "";
let lockedFilter = trophies.filter(function (filter1) {
  return filter1.troAttr == "Locked" || filter1.troAttr == "Hidden";
});

trophiesLocked = lockedFilter.sort((first, second) => second.troRarity - first.troRarity);

const newTrophiesLocked = trophiesLocked.slice(0, 5)

var trophiesUnlocked = "";
let unlockedFilter = trophies.filter(function (filter2) {
  return filter2.troAttr == "Unlocked";
});

trophiesUnlocked = unlockedFilter.sort((first, second) => second.troSequence - first.troSequence);

const newTrophiesUnlocked = trophiesUnlocked.slice(0, 5)

eT = trophiesUnlocked.length;
document.getElementById("earTro").innerHTML = eT;

var rT, remTrop = "";
rT = tT - eT - 5;

var opac1, troInfo1 = "";
let i = 0;
while (i < newTrophiesLocked.length){
  if (newTrophiesLocked[i].troAttr == 'Locked'){
    troInfo1 += "<div class='t'>";
    troInfo1 += "<div class='trophyCardLeft " + newTrophiesLocked[i].troType + "Left'>";
    troInfo1 += "<div>";
    troInfo1 += "<p class='trophyNameLocked'>" + newTrophiesLocked[i].troName + "</p>";
    troInfo1 += "</div>";
    troInfo1 += "</div>";
    troInfo1 += "</div>";
  } else if (newTrophiesLocked[i].troAttr == "Hidden") {
    troInfo1 += "<div class='t'>";
    troInfo1 += "<div class='trophyCardLeft'>";
    troInfo1 += "<div>";
    troInfo1 += "<p class='trophyNameLocked'>Hidden Trophy</p>";
    troInfo1 += "</div>";
    troInfo1 += "</div>";
    troInfo1 += "</div>";
  }
  i++;
}
if (rT > 0) {
  troInfo1 += "<p class='columnLeftHeaderBottom'>+" + rT + " more</p>";
}
document.getElementById("targetTrophies").innerHTML = troInfo1;

var opac2, troInfo2 = "";
let j = 0;
while (j < newTrophiesUnlocked.length){
    troInfo2 += "<div class='u'>";
    troInfo2 += "<div class='trophyCardRight " + newTrophiesUnlocked[j].troType + "Right'>";
    troInfo2 += "<img class='trophyIMG' src='" + newTrophiesUnlocked[j].troIMG + "'>";
    troInfo2 += "<div>";
    troInfo2 += "<p class='trophyNameUnlocked'>" + newTrophiesUnlocked[j].troName + "</p>";
    troInfo2 += "</div>";
    troInfo2 += "</div>";
    troInfo2 += "</div>";
    j++;
    document.getElementById("earnedTrophies").innerHTML = troInfo2;
}

var myIndex1 = 0;
carousel1();

function carousel1() {
  var k;
  var y = document.getElementsByClassName("t");
  for (k = 0; k < y.length; k++) {
    y[k].className = "t";
  }
  myIndex1++;
  if (myIndex1 > y.length) {myIndex1 = 1}
  y[myIndex1-1].className = "t activeLeft";
  setTimeout(carousel1, 10000); // Change image every 2 seconds
}

var myIndex2 = 0;
carousel2();

function carousel2() {
  var l;
  var z = document.getElementsByClassName("u");
  for (l = 0; l < z.length; l++) {
    z[l].className = "u";
  }
  myIndex2++;
  if (myIndex2 > z.length) {myIndex2 = 1}
  z[myIndex2-1].className = "u activeRight";
  setTimeout(carousel2, 10000); // Change image every 2 seconds
}
