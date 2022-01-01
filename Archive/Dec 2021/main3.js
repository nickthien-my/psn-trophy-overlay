var eT, tT, tP, bTL, bUL, sTL, sUL, gTL, gUL, tUL, tTL = "";

tT = trophies.length;

var trophiesUnlocked = "";
let unlockedFiltered = trophies.filter(function (unlockFilter) {
  return unlockFilter.troAttr == "Unlocked";
});

let tBT = trophies.filter(function (tB) {
  return tB.troType == "Bronze";
});

let tST = trophies.filter(function (tS) {
  return tS.troType == "Silver";
});

let tGT = trophies.filter(function (tG) {
  return tG.troType == "Gold";
});

let bTE = trophies.filter(function (bT) {
  return bT.troAttr == "Unlocked" && bT.troType == "Bronze";
});

let sTE = trophies.filter(function (sT) {
  return sT.troAttr == "Unlocked" && sT.troType == "Silver";
});

let gTE = trophies.filter(function (gT) {
  return gT.troAttr == "Unlocked" && gT.troType == "Gold";
});

let pTE = trophies.filter(function (pT) {
  return pT.troAttr == "Unlocked" && pT.troType == "Platinum";
});

bTL = tBT.length;
sTL = tST.length;
gTL = tGT.length;
bUL = bTE.length;
sUL = sTE.length;
gUL = gTE.length;
pUL = pTE.length;

tUL = (bUL * 15) + (sUL * 30) + (gUL * 90);
tTL = (bTL * 15) + (sTL * 30) + (gTL * 90);
tP = Math.round((tUL/tTL) * 99);

eT = unlockedFiltered.length;

var troProg = "";
troProg += "<div class='percentageBox'>";
troProg += "<p class='percentageText'><span>" + tP + "</span>%</p>";
troProg += "</div>";
troProg += "<div class='progress' style='height: 5px;'>";
troProg += "<div class='progress-bar background-light' role='progressbar' style='width: " + tP +"%' aria-valuenow='" + tP +"' aria-valuemin='0' aria-valuemax='100'></div>";

troProg += "</div>";

document.getElementById("progressBar").innerHTML = troProg;

var troInfo = "";
let i = 0;
while (i < trophies.length) {
  if(trophies[i].troAttr == "Unlocked") {
    troInfo += "<img class='trophyUnlocked' src='" + trophies[i].troIMG + "'>";
    i++;
  } else {
    troInfo += "<img class='trophyLocked' src='" + trophies[i].troIMG + "'>";
    i++;
  }
}
  /*troInfo += "<div class='trophyElement trophyInfoBackground " + sortedUnlockedDisplay[i].troType + "'>";
    troInfo += "<img class='trophyLogo' src='" + sortedUnlockedDisplay[i].troIMG + "'>";
    troInfo += "<p class='trophyName'>" + sortedUnlockedDisplay[i].troName + "</p>";
    troInfo += "</div>";*/

document.getElementById("trophyCase").innerHTML = troInfo;

let lockedFiltered = trophies.filter(function (lockedFilter) {
  return lockedFilter.troAttr == "Locked";
});

var troInfo2 = "";
troInfo2 += "<ul>";
let j = 0;
while (j < lockedFiltered.length) {
  troInfo2 += "<li style='background-image: url(\"" + lockedFiltered[j].troIMG + "\");' class = '" + lockedFiltered[j].troType + "'>" + lockedFiltered[j].troName + "</li>";
  j++;

  /*troInfo += "<div class='trophyElement trophyInfoBackground " + sortedUnlockedDisplay[i].troType + "'>";
    troInfo += "<img class='trophyLogo' src='" + sortedUnlockedDisplay[i].troIMG + "'>";
    troInfo += "<p class='trophyName'>" + sortedUnlockedDisplay[i].troName + "</p>";
    troInfo += "</div>";*/
}
troInfo2 += "</ul>";

document.getElementById("trophyList").innerHTML = troInfo2;
