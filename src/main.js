let bTL, bTU, bTT, sTL, sTU, sTT, gTL, gTU, gTT, pTL, pTU, pTT, percentage;
trophyPercentage(generateTrophygrades(trophies));
trophyInfoHandler(trophies);

function generateTrophygrades()
{
  trophygrades = trophies.map((gradeList) => gradeList.trophies.map(({grade, status}) => ({grade, status})));
  return trophygrades;
}

function trophyPercentage(trophygrades)
{
  bTU = 0;
  bTL = 0;
  sTU = 0;
  sTL = 0;
  gTU = 0;
  gTL = 0;
  pTU = 0;
  pTL = 0;

  trophygrades.forEach((trophyLists) =>
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
  if (trophies.grade == "Bronze")  {
    if (trophies.status == "Not earned" || trophies.status == "Hidden" )  {
      bTL++;
    } else if (trophies.status == "Earned")  {
      bTU++;
    }
  } else if (trophies.grade == "Silver") {
    if (trophies.status == "Not earned" || trophies.status == "Hidden") {
      sTL++;
    } else if (trophies.status == "Earned")  {
      sTU++;
    }
  } else if (trophies.grade == "Gold") {
    if (trophies.status == "Not earned" || trophies.attribue == "Hidden") {
      gTL++;
    } else if (trophies.status == "Earned") {
      gTU++;
    }
  } else if (trophies.grade == "Platinum") {
    if (trophies.status == "Not earned" || trophies.attribue == "Hidden") {
      pTL++;
    } else if (trophies.status == "Earned")  {
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


    let bar = "<p class='progressHeader'>Progress</p>";
    bar += "<div class='progress' style='height: 5px'>";
  bar += "<div class='progress-bar background-light' role='progressbar' style='width: " + percentage +"%' aria-valuenow='" + percentage +"' aria-valuemin='0' aria-valuemax='100'></div>";

  //document.getElementById("percent").innerHTML = percentage;
  document.getElementById("bar").innerHTML = bar;
}


function trophyInfoHandler(trophies) {
  trophies.forEach((trophyLists) => {
    printTrophyInfo(trophyLists);
  });
}

function printTrophyInfo(trophyList) {
  const div = document.getElementById('trophyInfo');
  const troCase = document.createElement('div');
  const troLogo = document.createElement('img');
  const listName = document.createElement('p');
  troCase.classList.add('troCaseLeft');
  troLogo.classList.add('troLogo');
  listName.classList.add('troListName');
  troLogo.src = "../../trophyListLogo/" + trophyList.trophyListLogo + ".png";
  listName.textContent = trophyList.trophyListName;
  div.append(troCase);
  troCase.appendChild(troLogo);
  troCase.appendChild(listName);

  trophyList.trophies.forEach((item) => {
    var trophyImg = document.createElement('img');
    trophyImg.classList.add('caseTrophies');
    if (item.status == "Not earned" || item.status == "Hidden")
      trophyImg.classList.add('notEarned');
    trophyImg.src = "../../trophyImg/" + item.img + ".png";
    trophyImg.alt = item.name;
    troCase.appendChild(trophyImg);
  });
}


var myIndexLeft = 0;

carouselLeft();


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
