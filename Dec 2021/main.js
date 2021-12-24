let bTL, bTU, bTT, sTL, sTU, sTT, gTL, gTU, gTT, pTL, pTU, pTT, percentage;
trophyInfoHandler(trophies);

function trophyInfoHandler(trophies)
{
  generateTrophyTypes(trophies);
  trophyPercentage(trophyTypes);
  trophyCaseHandler(trophies);
}


function generateTrophyTypes()
{
  trophyTypes = trophies.map((typeList) => typeList.trophies.map(({type, attribute}) => ({type, attribute})));
  return trophyTypes;
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

function trophyCaseHandler()
{
  let troHandler = "";
  for(let i = 0; i < trophies.length; i++)
  {
    troHandler += printTrophyCase(trophies[i]);
  }
  document.getElementById("trophyInfo").innerHTML = troHandler;
}

function printTrophyCase(listIndex)
{
  let troCase = "";
  troCase += "<div class='troCase'>";
  troCase += getListName(listIndex);
  troCase += getTrophyCase(listIndex);
  troCase += getTrophyTracker(listIndex);
  troCase += "</div>";
  return troCase;
}


function getListName(listIndex)
{
  let listName =  "<p class='troListName'>" + listIndex.trophyListName + "</p>";
  return listName;
}


function getTrophyCase(listIndex)
{
  let trophyCase = "";
  for (let i = 0; i < listIndex.trophies.length; i++) {
    if(listIndex.trophies[i].attribute == "Unlocked") {
      trophyCase += "<img class='caseTrophies' src='../trophyImg/" + listIndex.trophies[i].img + "'>";
    } else {
      trophyCase += "<img class='caseTrophies Locked' src='../trophyImg/" + listIndex.trophies[i].img + "'>";
    }
  }
  return trophyCase;
}


function getTrophyTracker(listIndex)
{
  let lockedTrophyList = listIndex.trophies.filter(function (lockFilter) {
    return lockFilter.attribute == "Locked";
  });

  let trophyTracker = "";

  if(lockedTrophyList.length > 0) {
    let raritySorted = lockedTrophyList.sort((first, second) => second.rarity - first.rarity);
    const trackerList = raritySorted.slice(0, 5);


    trophyTracker += "<p class='troListName' style='padding-top: 20px;'>Trophy Tracker</p>";
    trophyTracker += "<ul>";
    for (i = 0; i < trackerList.length; i++) {
      trophyTracker += "<li style='background-image: url(\"../trophyImg/" + trackerList[i].img + "\");' class = '" + trackerList[i].type + "'>" + trackerList[i].name + "</li>";
    }
    trophyTracker += "</ul>";
  }
  return trophyTracker;
}

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
  setTimeout(carousel, 600000); // Change image every 2 seconds
}




/*

  let lockedTrophyList1 = trophyList1.filter(function (lockFilter1) {
    return lockFilter1.troAttr == "Locked";
  });

  var rarityLocked1 = "";
  rarityLocked1 = lockedTrophyList1.sort((first, second) => second.troRarity - first.troRarity);
  const lockedSlice1 = rarityLocked1.slice(0, 5);



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
*/
