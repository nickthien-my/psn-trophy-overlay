let bTL, bTU, bTT, sTL, sTU, sTT, gTL, gTU, gTT, pTL, pTU, pTT, percentage;
trophyPercentage(generateTrophyTypes(trophies));
trophyInfoHandler(trophies);

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

  trophyTypes.forEach((trophyLists) =>
  {
    trophyLists.forEach((trophies) =>
    {
      trophyCount(trophies);
    });
  });
  percentageCalculation(bTU, bTT, sTU, sTT, gTU, gTT, pTU, pTT);
}

function trophyCount(trophies)
{
  if (trophies.type == "Bronze")  {
    if (trophies.attribute == "Locked" || trophies.attribute == "Hidden" )  {
      bTL++;
    } else if (trophies.attribute == "Unlocked")  {
      bTU++;
    }
  } else if (trophies.type == "Silver") {
    if (trophies.attribute == "Locked" || trophies.attribute == "Hidden") {
      sTL++;
    } else if (trophies.attribute == "Unlocked")  {
      sTU++;
    }
  } else if (trophies.type == "Gold") {
    if (trophies.attribute == "Locked" || trophies.attribue == "Hidden") {
      gTL++;
    } else if (trophies.attribute == "Unlocked") {
      gTU++;
    }
  } else if (trophies.type == "Platinum") {
    if (trophies.attribute == "Locked" || trophies.attribue == "Hidden") {
      pTL++;
    } else if (trophies.attribute == "Unlocked")  {
      pTU++;
    }
  }

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


function trophyInfoHandler(trophies) {
  trophies.forEach((trophyLists) => {
    printTrophyInfo(trophyLists);
    printTrackerInfo(trophyLists);
  });
}

function printTrophyInfo(trophyList) {
  const div = document.getElementById('trophyInfo');
  const troCase = document.createElement('div');
  const listName = document.createElement('p');
  troCase.classList.add('troCaseLeft');
  listName.classList.add('troListName');
  listName.textContent = trophyList.trophyListName;
  div.append(troCase);
  troCase.append(listName);

  trophyList.trophies.forEach((item) => {
    var trophyImg = document.createElement('img');
    trophyImg.classList.add('caseTrophies');
    if (item.attribute == "Locked" || item.attribute == "Hidden")
      trophyImg.classList.add('Locked');
    trophyImg.src = "../trophyImg/" + item.img + ".png";
    trophyImg.alt = item.name;
    troCase.appendChild(trophyImg);
  });
}

function  printTrackerInfo(trophyList) {
  let lockedTrophyList = trophyList.trophies.filter(function (lockFilter) {
    return lockFilter.attribute == "Locked" || lockFilter.attribute == "Hidden";
  });
  if(lockedTrophyList.length > 0) {
    let raritySorted = lockedTrophyList.sort((first, second) => second.rarity - first.rarity);
    const trackerList = raritySorted.slice(0, 5);

    const div = document.getElementById('columnRight');
    const carousel = document.createElement('div');
    const infoContainer = document.createElement('div');
    const header = document.createElement('p');
    const ul = document.createElement('ul');
    carousel.classList.add('troCaseRight');
    infoContainer.classList.add('infoContainerRight');
    header.classList.add('troListName');
    header.textContent = "Trophy Tracker";
    div.append(carousel);
    carousel.append(infoContainer);
    infoContainer.append(header);
    header.append(ul);

    trackerList.forEach((item) => {
      const li = document.createElement('li');
      const trophyName = document.createElement('p');
      li.style.backgroundImage = "url('../trophyImg/" + item.img + ".png')";
      trophyName.classList.add('listName');
      if (item.attribute == "Hidden") {
        trophyName.textContent = "??????";
      } else {
        trophyName.classList.add(item.grade);
        trophyName.textContent = item.name;
      }
      li.append(trophyName);
      ul.appendChild(li);
    });

  } else {
    const div = document.getElementById('columnRight');
    const carousel = document.createElement('div');
    carousel.classList.add('troCaseRight');
    div.append(carousel);
  }

}


var myIndexLeft = 0;
var myIndexRight = 0;
carouselLeft();
carouselRight();

function carouselLeft() {
  var index;
  var x = document.getElementsByClassName("troCaseLeft");
  for (index = 0; index < x.length; index++) {
    x[index].style.display = "none";
  }
  myIndexLeft++;
  if (myIndexLeft > x.length) {myIndexLeft = 1}
  x[myIndexLeft-1].style.display = "block";
  setTimeout(carouselLeft, 300000); // Change image every 2 seconds
}

function carouselRight() {
  var index;
  var x = document.getElementsByClassName("troCaseRight");
  for (index = 0; index < x.length; index++) {
    x[index].style.display = "none";
  }
  myIndexRight++;
  if (myIndexRight > x.length) {myIndexRight = 1}
  x[myIndexRight-1].style.display = "block";
  setTimeout(carouselRight, 300000); // Change image every 2 seconds
}
