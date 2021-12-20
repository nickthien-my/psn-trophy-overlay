var eT, tT, tP, bTL, bUL, sTL, sUL, gTL, gUL, tUL, tTL = "";

tT = trophies.length;
document.getElementById("totTro").innerHTML = tT;

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

tUL = (bUL * 15) + (sUL * 30) + (gUL * 90) + pUL;
tTL = (bTL * 15) + (sTL * 30) + (gTL * 90) + 1;
tP = Math.round((tUL/tTL) * 100);

eT = unlockedFiltered.length;
document.getElementById("earTro").innerHTML = eT;

var troInfo = "";
troInfo += "<div id='carouselExampleIndicators' class='carousel slide carousel-fade' data-bs-ride='carousel'>";
troInfo += "<div class='carousel-inner'>";
troInfo += "<div class='carousel-item active' data-bs-interval='10000'>";
if (trophies[0].troAttr == "Unlocked") {
  troInfo += "<img class='trophyLogoUnlocked' src='" + trophies[0].troIMG + "'>";
  troInfo += "<p class='trophyNameUnlocked'>" + trophies[0].troName + "</p>";
  troInfo += "<p class='trophyDescriptionUnlocked'>" + trophies[0].troDesc + "</p>";
  troInfo += "<div class='trophyInfoBackground " + trophies[0].troType + "'></div>";
} else if (trophies[0].troAttr == "Hidden") {
  troInfo += "<img class='trophyLogoHidden'>";
  troInfo += "<p class='trophyNameHidden'>Hidden Trophy</p>";
  troInfo += "<p class='trophyDescriptionHidden'> - </p>";
  troInfo += "<div class='trophyInfoBackground'></div>";
} else {
  troInfo += "<img class='trophyLogoLocked' src='" + trophies[0].troIMG + "'>";
  troInfo += "<p class='trophyNameLocked'>" + trophies[0].troName + "</p>";
  troInfo += "<p class='trophyDescriptionLocked'>" + trophies[0].troDesc + "</p>";
  troInfo += "<div class='trophyInfoBackground " + trophies[0].troType + "'></div>";
}
troInfo += "</div>";

let i = 1;
while (i < trophies.length) {
  troInfo += "<div class='carousel-item' data-bs-interval='10000'>";
  if (trophies[i].troAttr == "Unlocked") {
    troInfo += "<img class='trophyLogoUnlocked' src='" + trophies[i].troIMG + "'>";
    troInfo += "<p class='trophyNameUnlocked'>" + trophies[i].troName + "</p>";
    troInfo += "<p class='trophyDescriptionUnlocked'>" + trophies[i].troDesc + "</p>";
    troInfo += "<div class='trophyInfoBackground " + trophies[i].troType + "'></div>";
  } else if (trophies[i].troAttr == "Hidden") {
    troInfo += "<img class='trophyLogoHidden'>";
    troInfo += "<p class='trophyNameHidden'>Hidden Trophy</p>";
    troInfo += "<p class='trophyDescriptionHidden'> - </p>";
    troInfo += "<div class='trophyInfoBackground'></div>";
  } else {
    troInfo += "<img class='trophyLogoLocked' src='" + trophies[i].troIMG + "'>";
    troInfo += "<p class='trophyNameLocked'>" + trophies[i].troName + "</p>";
    troInfo += "<p class='trophyDescriptionLocked'>" + trophies[i].troDesc + "</p>";
    troInfo += "<div class='trophyInfoBackground " + trophies[i].troType + "'></div>";
  }
  troInfo += "</div>";
  i++;
}
troInfo += "</div>";
troInfo += "</div>";

/*troInfo += "<div class='progress' style='height: 5px;'>";
troInfo += "<div class='progress-bar background-primary' role='progressbar' style='width: " + tP +"%' aria-valuenow='" + tP +"' aria-valuemin='0' aria-valuemax='100'></div>";
troInfo += "</div>";*/

document.getElementById("targetTrophies").innerHTML = troInfo;
