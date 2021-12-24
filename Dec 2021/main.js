let bTL, bTU, bTT, sTL, sTU, sTT, gTL, gTU, gTT, pTL, pTU, pTT, percentage;

generateListNames(trophies);
generateTrophyTypes(trophies);
trophyPercentage(trophyTypes);


function generateListNames()
{
  for (var i = 0; i <= this.length; i++)
  {
    this["list"+ (i)] = [this[i]];
  }
}

function generateTrophyTypes()
{
  trophyTypes = trophies.map((typeList) => typeList.trophies.map(({type, attribute}) => ({type, attribute})));
}

function trophyPercentage(trophyTypes)
{
  bTU = 0;
  bTL = 0;
  sTU = 0;
  sTL = 0;
  gTU = 0;
  gTL = 0;
  pTU = 0;
  pTL = 0;

  for(let i = 0; i < trophyTypes.length; i++)
  {
    for(let j = 0; j < trophyTypes[i].length; j++)
    {
      trophyCount(trophyTypes[i][j]);
    }
  }
  percentageCalculation(bTU, bTT, sTU, sTT, gTU, gTT, pTU, pTT);
}

function trophyCount(trophies)
{
  if (trophies.type == "Bronze" && trophies.attribute == "Locked")
    bTL++;
  else if (trophies.type == "Bronze" && trophies.attribute == "Unlocked")
    bTU++;
  else if (trophies.type == "Silver" && trophies.attribute == "Locked")
    sTL++;
  else if (trophies.type == "Silver" && trophies.attribute == "Unlocked")
    sTU++;
  else if (trophies.type == "Gold" && trophies.attribute == "Locked")
    gTL++;
  else if (trophies.type == "Gold" && trophies.attribute == "Unlocked")
    gTU++;
  else if (trophies.type == "Platinum" && trophies.attribute == "Locked")
    pTL++;
  else if (trophies.type == "Platinum" && trophies.attribute == "Unlocked")
    pTU++;

  bTT = bTL + bTU;
  sTT = sTL + sTU;
  gTT = gTL + gTU;
  pTT = pTL + pTU;

    return bTU;
    return bTT;
    return sTU;
    return sTT;
    return gTU;
    return gTT;
    return pTU;
    return pTT;
}

function percentageCalculation(bTU, bTT, sTU, sTT, gTU, gTT, pTU, pTT)
{
  let numerator = (bTU * 15) + (sTU * 30) + (gTU * 90);
  let denominator = (bTT * 15) + (sTT * 30) + (gTT * 90);
  percentage = Math.round((numerator / denominator) * 99 + pTU);

  let bar = "<div class='progress' style='height: 5px;'>";
  bar += "<div class='progress-bar background-light' role='progressbar' style='width: " + percentage +"%' aria-valuenow='" + percentage +"' aria-valuemin='0' aria-valuemax='100'></div>";

  document.getElementById("percent").innerHTML = percentage;
  document.getElementById("bar").innerHTML = bar;
}




/*  var eT, tT, tP, bTL, bUL, sTL, sUL, gTL, gUL, tUL, tTL = "";

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

  document.getElementById("progressBar").innerHTML = troProg;*/


/*
let trophyList1 = trophies.filter(function (getList1) {
  return getList1.troList == "1";
});

var troInfo1 = "";
troInfo1 += "<div class='troCase'>";
troInfo1 +=  "<p class='troListName'>" + trophyListNames[0].name + "</p>";
let i1 = 0;
while (i1 < trophyList1.length) {
  if(trophyList1[i1].troAttr == "Unlocked") {
    troInfo1 += "<img class='trophyUnlocked' src='./trophyImg/" + trophyList1[i1].troIMG + "'>";
    i1++;
  } else {
    troInfo1 += "<img class='trophyLocked' src='./trophyImg/" + trophyList1[i1].troIMG + "'>";
    i1++;
  }
}

let lockedTrophyList1 = trophyList1.filter(function (lockFilter1) {
  return lockFilter1.troAttr == "Locked";
});

var rarityLocked1 = "";
rarityLocked1 = lockedTrophyList1.sort((first, second) => second.troRarity - first.troRarity);
const lockedSlice1 = rarityLocked1.slice(0, 5);

troInfo1 +=  "<p class='troListName' style='padding-top: 20px;'>Trophy Tracker</p>";
troInfo1 += "<ul>";
let j1 = 0;
while (j1 < lockedSlice1.length) {
  troInfo1 += "<li style='background-image: url(\"./trophyImg/" + lockedSlice1[j1].troIMG + "\");' class = '" + lockedSlice1[j1].troType + "'>" + lockedSlice1[j1].troName + "</li>";
  j1++;
}
troInfo1 += "</ul>";

troInfo1 += "</div>";

document.getElementById("trophyCase1").innerHTML = troInfo1;


let trophyList2 = trophies.filter(function (getList2) {
  return getList2.troList == "2";
});

if (trophyList2.length === 0) {
troInfo2 += "";
}
else {
var troInfo2 = "";
troInfo2 += "<div class='troCase'>";
troInfo2 +=  "<p class='troListName'>" + trophyListNames[1].name + "</p>";
let i2 = 0;
while (i2 < trophyList2.length) {
  if(trophyList2[i2].troAttr == "Unlocked") {
    troInfo2 += "<img class='trophyUnlocked' src='./trophyImg/" + trophyList2[i2].troIMG + "'>";
    i2++;
  } else {
    troInfo2 += "<img class='trophyLocked' src='./trophyImg/" + trophyList2[i2].troIMG + "'>";
    i2++;
  }
}

let lockedTrophyList2 = trophyList2.filter(function (lockFilter2) {
  return lockFilter2.troAttr == "Locked";
});

var rarityLocked2 = " ";
rarityLocked2 = lockedTrophyList2.sort((first, second) => second.troRarity - first.troRarity);
const lockedSlice2 = rarityLocked2.slice(0, 5);

troInfo2 +=  "<p class='troListName' style='padding-top: 20px;'>Trophy Tracker</p>";
troInfo2 += "<ul>";
let j2 = 0;
while (j2 < lockedSlice2.length) {
  troInfo2 += "<li style='background-image: url(\"./trophyImg/" + lockedSlice2[j2].troIMG + "\");' class = '" + lockedSlice2[j2].troType + "'>" + lockedSlice2[j2].troName + "</li>";
  j2++;
}
troInfo2 += "</ul>";
troInfo2 += "</div>";

document.getElementById("trophyCase2").innerHTML = troInfo2;
}

let trophyList3 = trophies.filter(function (getList3) {
  return getList3.troList == "3";
});


if (trophyList3.length === 0) {
troInfo3 += "";
}
else {
var troInfo3 = "";
troInfo3 += "<div class='troCase'>";
troInfo3 +=  "<p class='troListName'>" + trophyListNames[2].name + "</p>";
let i3 = 0;
while (i3 < trophyList3.length) {
  if(trophyList3[i3].troAttr == "Unlocked") {
    troInfo3 += "<img class='trophyUnlocked' src='./trophyImg/" + trophyList3[i3].troIMG + "'>";
    i3++;
  } else {
    troInfo3 += "<img class='trophyLocked' src='./trophyImg/" + trophyList3[i3].troIMG + "'>";
    i3++;
  }
}

let lockedTrophyList3 = trophyList3.filter(function (lockFilter3) {
  return lockFilter3.troAttr == "Locked";
});

var rarityLocked3 = " ";

rarityLocked3 = lockedTrophyList3.sort((first, second) => second.troRarity - first.troRarity);
const lockedSlice3 = rarityLocked3.slice(0, 5);

troInfo3 +=  "<p class='troListName' style='padding-top: 20px;'>Trophy Tracker</p>";
troInfo3 += "<ul>";
let j3 = 0;
while (j3 < lockedSlice3.length) {
  troInfo3 += "<li style='background-image: url(\"./trophyImg/" + lockedSlice3[j3].troIMG + "\");' class = '" + lockedSlice3[j3].troType + "'>" + lockedSlice3[j3].troName + "</li>";
  j3++;
}
troInfo3 += "</ul>";

troInfo3 += "</div>";

document.getElementById("trophyCase3").innerHTML = troInfo3;
}

let trophyList4 = trophies.filter(function (getList4) {
  return getList4.troList == "4";
});

if (trophyList4.length === 0) {
  document.getElementById("trophyCase4").innerHTML = "";

}
else {
var troInfo4 = "";
troInfo4 += "<div class='troCase'>";
let i4 = 0;
troInfo4 +=  "<p class='troListName'>" + trophyListNames[3].name + "</p>";

while (i4 < trophyList4.length) {
  if(trophyList4[i4].troAttr == "Unlocked") {
    troInfo4 += "<img class='trophyUnlocked' src='./trophyImg/" + trophyList4[i4].troIMG + "'>";
    i4++;
  } else {
    troInfo4 += "<img class='trophyLocked' src='./trophyImg/" + trophyList4[i4].troIMG + "'>";
    i4++;
  }
}

let lockedTrophyList4 = trophyList4.filter(function (lockFilter4) {
  return lockFilter4.troAttr == "Locked";
});

var rarityLocked4 = "";
rarityLocked4 = lockedTrophyList4.sort((first, second) => second.troRarity - first.troRarity);
const lockedSlice4 = rarityLocked4.slice(0, 5);

troInfo4 +=  "<p class='troListName' style='padding-top: 20px;'>Trophy Tracker</p>";
troInfo4 += "<ul>";
let j4 = 0;
while (j4 < lockedSlice4.length) {
  troInfo4 += "<li style='background-image: url(\"./trophyImg/" + lockedSlice4[j4].troIMG + "\");' class = '" + lockedSlice4[j4].troType + "'>" + lockedSlice4[j4].troName + "</li>";
  j4++;
}
troInfo4 += "</ul>";

troInfo4 += "</div>";
document.getElementById("trophyCase4").innerHTML = troInfo4;

}




/*let trophyList5 = trophies.filter(function (getList5) {
  return getList5.troList == "5";
});

var troInfo5 = "";
troInfo5 += "<div class='troCase'>";
troInfo5 +=  "<p class='troListName'>" + trophyList5[0].troListName + "</p>";
let i5 = 0;
while (i5 < trophyList5.length) {
  if(trophyList5[i5].troAttr == "Unlocked") {
    troInfo5 += "<img class='trophyUnlocked' src='./trophyImg/" + trophyList5[i5].troIMG + "'>";
    i5++;
  } else {
    troInfo5 += "<img class='trophyLocked' src='./trophyImg/" + trophyList5[i5].troIMG + "'>";
    i5++;
  }
}

let lockedTrophyList5 = trophyList5.filter(function (lockFilter5) {
  return lockFilter5.troAttr == "Locked";
});

var rarityLocked5 = "";
rarityLocked5 = lockedTrophyList5.sort((first, second) => second.troRarity - first.troRarity);
const lockedSlice5 = rarityLocked5.slice(0, 5);

troInfo5 +=  "<p class='troListName' style='padding-top: 20px;'>Trophy Tracker</p>";
troInfo5 += "<ul>";
let j5 = 0;
while (j5 < lockedSlice5.length) {
  troInfo5 += "<li style='background-image: url(\"./trophyImg/" + lockedSlice5[j5].troIMG + "\");' class = '" + lockedSlice5[j5].troType + "'>" + lockedSlice5[j5].troName + "</li>";
  j5++;
}
troInfo5 += "</ul>";

troInfo5 += "</div>";

document.getElementById("trophyCase5").innerHTML = troInfo5;


let trophyList6 = trophies.filter(function (getList6) {
  return getList6.troList == "6";
});

var troInfo6 = "";
troInfo6 += "<div class='troCase'>";
troInfo6 +=  "<p class='troListName'>" + trophyList6[0].troListName + "</p>";
let i6 = 0;
while (i6 < trophyList6.length) {
  if(trophyList6[i6].troAttr == "Unlocked") {
    troInfo6 += "<img class='trophyUnlocked' src='./trophyImg/" + trophyList6[i6].troIMG + "'>";
    i6++;
  } else {
    troInfo6 += "<img class='trophyLocked' src='./trophyImg/" + trophyList6[i6].troIMG + "'>";
    i6++;
  }
}

let lockedTrophyList6 = trophyList6.filter(function (lockFilter6) {
  return lockFilter6.troAttr == "Locked";
});

var rarityLocked6 = "";
rarityLocked6 = lockedTrophyList6.sort((first, second) => second.troRarity - first.troRarity);
const lockedSlice6 = rarityLocked6.slice(0, 5);

troInfo6 +=  "<p class='troListName' style='padding-top: 20px;'>Trophy Tracker</p>";
troInfo6 += "<ul>";
let j6 = 0;
while (j6 < lockedSlice6.length) {
  troInfo6 += "<li style='background-image: url(\"./trophyImg/" + lockedSlice6[j6].troIMG + "\");' class = '" + lockedSlice6[j6].troType + "'>" + lockedSlice6[j6].troName + "</li>";
  j6++;
}
troInfo6 += "</ul>";

troInfo6 += "</div>";

document.getElementById("trophyCase6").innerHTML = troInfo6;

/*var trophiesLocked = "";

let lockedFiltered = trophies.filter(function (lockFilter) {
  return lockFilter.troAttr == "Locked";
});

/*var rarityLocked = " ";

rarityLocked = lockedFiltered.sort((first, second) => second.troRarity - first.troRarity);

const lockedSlice = rarityLocked.slice(0, 5);


var troLockInfo = "";
troLockInfo += "<div class='troTracker'>";
troLockInfo +=  "<p class='troListName'>Trophy Tracker</p>";

troLockInfo += "<ul>";
let z = 0;
while (z < lockedSlice.length) {
  troLockInfo += "<li style='background-image: url(\"./trophyImg/" + lockedSlice[z].troIMG + "\");' class = '" + lockedSlice[z].troType + "'>" + lockedSlice[z].troName + "</li>";
  z++;

  troInfo += "<div class='trophyElement trophyInfoBackground " + sortedUnlockedDisplay[i].troType + "'>";
    troInfo += "<img class='trophyLogo' src='" + sortedUnlockedDisplay[i].troIMG + "'>";
    troInfo += "<p class='trophyName'>" + sortedUnlockedDisplay[i].troName + "</p>";
    troInfo += "</div>";
}
troLockInfo += "</ul>";
troLockInfo += "</div>";

document.getElementById("trophyLockedList").innerHTML = troLockInfo;*/


/*
var myIndex = 0;
carousel();

function carousel() {
  var index;
  var x = document.getElementsByClassName("troCase");
  for (index = 0; index < x.length; index++) {
    x[index].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
*/
