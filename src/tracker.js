trophyInfoHandler(trophies);

function trophyInfoHandler(trophies) {
  trophies.forEach((trophyLists) => {
    printTrackerInfo(trophyLists);
  });
}

function  printTrackerInfo(trophyList) {
  let lockedTrophyList = trophyList.trophies.filter(function (lockFilter) {
    return lockFilter.status == "Not earned" || lockFilter.status == "Hidden";
  });
  if(lockedTrophyList.length > 0) {
    let raritySorted = lockedTrophyList.sort((first, second) => second.rarity - first.rarity);
    const trackerList = raritySorted.slice(0, 5);

    const div = document.getElementById('columnRight');
    const carousel = document.createElement('div');
    const infoContainer = document.createElement('div');
    const header = document.createElement('p');
    const trackerContainer = document.createElement('div');
    carousel.classList.add('troCaseRight');
    infoContainer.classList.add('infoContainerRight');
    header.classList.add('troListName');
    trackerContainer.classList.add('trackerContainer');
    header.textContent = "Trophy Tracker";
    div.append(carousel);
    carousel.append(infoContainer);
    infoContainer.append(header);
    infoContainer.append(trackerContainer);


    trackerList.forEach((item) => {
      const trophyContainer = document.createElement('div');
      const trophyLogoContainer = document.createElement('div');
      const trophyLogo = document.createElement('img');
      const trophyNameContainer = document.createElement('div');
      const trophyName = document.createElement('p');
      trophyContainer.classList.add('trophyContainer');
      trophyLogoContainer.classList.add('trophyLogoContainer')
      trophyLogo.classList.add('trackerImg');
      trophyLogo.src = "../../trophyImg/" + item.img + ".png";
      trophyNameContainer.classList.add('trophyNameContainer');
      trophyName.classList.add('listName');
      if (item.status == "Hidden") {
        trophyName.textContent = "???????";
      } else {
        trophyName.classList.add(item.grade);
        trophyName.textContent = item.name;
      }

      trackerContainer.append(trophyContainer);
      trophyContainer.append(trophyLogoContainer);
      trophyLogoContainer.append(trophyLogo);
      trophyContainer.append(trophyNameContainer);
      trophyNameContainer.append(trophyName);
    });

  } else {
    const div = document.getElementById('columnRight');
    const carousel = document.createElement('div');
    carousel.classList.add('troCaseRight');
    div.append(carousel);
  }

}



var myIndexRight = 0;
carouselRight();

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
