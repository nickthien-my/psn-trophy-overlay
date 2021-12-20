var eT, tT  = "";

tT = trophies.length;
document.getElementById("totTro").innerHTML = tT;

var p1, page1, troPage1 = "";
p1 = tT;

if (p1 < 10)  {
  page1 = trophies.slice(0, p1);
} else {
  page1 = trophies.slice(0, 10);
}

let i = 0;
while (i < page1.length) {
    if (page1[i].troAttr == "Hidden") {
      troPage1 += "<div class='trophyCard'>";
      troPage1 += "<img class='trophyLogoHidden'>";
      troPage1 += "<div>";
      troPage1 += "<p class='trophyName'>Hidden Trophy</p>";
      troPage1 += "</div>";
    } else {
      troPage1 += "<div class='trophyCard " + page1[i].troType + "'>";
      troPage1 += "<img class='trophyLogo" + page1[i].troType + "'>";
      if(page1[i].troAttr == "Unlocked") {
        troPage1 += "<img class='trophyIMG' src='" + page1[i].troIMG + "'>";
      }
      troPage1 += "<div>";
      troPage1 += "<p class='trophyName'>" + page1[i].troName + "</p>";
      troPage1 += "<p class='trophyDescription'>" + page1[i].troDesc + "</p></div>";
    }
    troPage1 += "</div>";
    i++;
    document.getElementById("trophiesPage1").innerHTML = troPage1;
}

var p2, page2, troPage2 = "";
p2 = tT - 10;

if (p2 < 10) {
  p2 += 10;
  page2 = trophies.slice(10, p2);
} else {
  page2 = trophies.slice(10, 20);
}

let j = 0;
while (j < page2.length) {
  if (page2[j].troAttr == "Hidden") {
    troPage2 += "<div class='trophyCard'>";
    troPage2 += "<img class='trophyLogoHidden'>";
    troPage2 += "<div>";
    troPage2 += "<p class='trophyName'>Hidden Trophy</p>";
    troPage2 += "</div>";
  } else {
    troPage2 += "<div class='trophyCard " + page2[j].troType + "'>";
    troPage2 += "<img class='trophyLogo" + page2[j].troType + "'>";
    if(page2[j].troAttr == "Unlocked") {
      troPage2 += "<img class='trophyIMG' src='" + page2[j].troIMG + "'>";
    }
    troPage2 += "<div>";
    troPage2 += "<p class='trophyName'>" + page2[j].troName + "</p>";
    troPage2 += "<p class='trophyDescription'>" + page2[j].troDesc + "</p></div>";
  }
  troPage2 += "</div>";
  j++;
  document.getElementById("trophiesPage2").innerHTML = troPage2;
}

var p3, page3, troPage3 = "";
p3 = tT - 20;

if (p3 < 10) {
  p3 += 20;
  page3 = trophies.slice(20, p3);
} else {
  page3 = trophies.slice(20, 30);
}

let k = 0;
while (k < page3.length) {

  if (page3[k].troAttr == "Hidden") {
    troPage3 += "<div class='trophyCard'>";
    troPage3 += "<img class='trophyLogoHidden'>";
    troPage3 += "<div>";
    troPage3 += "<p class='trophyName'>Hidden Trophy</p>";
    troPage3 += "</div>";
  } else {
    troPage3 += "<div class='trophyCard " + page3[k].troType + "'>";
    troPage3 += "<img class='trophyLogo" + page3[k].troType + "'>";
    if(page3[k].troAttr == "Unlocked") {
      troPage3 += "<img class='trophyIMG' src='" + page3[k].troIMG + "'>";
    }
    troPage3 += "<div>";
    troPage3 += "<p class='trophyName'>" + page3[k].troName + "</p>";
    troPage3 += "<p class='trophyDescription'>" + page3[k].troDesc + "</p></div>";
  }
  troPage3 += "</div>";
  k++;
  document.getElementById("trophiesPage3").innerHTML = troPage3;
}

var p4, page4, troPage4 = "";
p4 = tT - 30;

if (p4 < 10) {
  p4 += 30;
  page4 = trophies.slice(30, p4);
} else {
  page4 = trophies.slice(30, 40);
}

let l = 0;
while (l < page4.length) {
  if (page4[l].troAttr == "Hidden") {
    troPage4 += "<div class='trophyCard'>";
    troPage4 += "<img class='trophyLogoHidden'>";
    troPage4 += "<div>";
    troPage4 += "<p class='trophyName'>Hidden Trophy</p>";
    troPage4 += "</div>";
  } else {
    troPage4 += "<div class='trophyCard " + page4[l].troType + "'>";
    troPage4 += "<img class='trophyLogo" + page4[l].troType + "'>";
    if(page4[l].troAttr == "Unlocked") {
      troPage4 += "<img class='trophyIMG' src='" + page4[l].troIMG + "'>";
    }
    troPage4 += "<div>";
    troPage4 += "<p class='trophyName'>" + page4[l].troName + "</p>";
    troPage4 += "<p class='trophyDescription'>" + page4[l].troDesc + "</p></div>";
  }
  troPage4 += "</div>";
  l++;
  document.getElementById("trophiesPage4").innerHTML = troPage4;
}

var p5, page5, troPage5 = "";
p5 = tT - 40;

if (p5 < 10) {
  p5 += 40;
  page5 = trophies.slice(40, p5);
} else {
  page5 = trophies.slice(40, 50);
}

let m = 0;
while (m < page5.length) {

  if (page5[m].troAttr == "Hidden") {
    troPage5 += "<div class='trophyCard'>";
    troPage5 += "<img class='trophyLogoHidden'>";
    troPage5 += "<div>";
    troPage5 += "<p class='trophyName'>Hidden Trophy</p>";
    troPage5 += "</div>";
  } else {
    troPage5 += "<div class='trophyCard " + page5[m].troType + "'>";
    troPage5 += "<img class='trophyLogo" + page5[m].troType + "'>";
    if(page5[m].troAttr == "Unlocked") {
      troPage5 += "<img class='trophyIMG' src='" + page5[m].troIMG + "'>";
    }
    troPage5 += "<div>";
    troPage5 += "<p class='trophyName'>" + page5[m].troName + "</p>";
    troPage5 += "<p class='trophyDescription'>" + page5[m].troDesc + "</p></div>";
  }
  troPage5 += "</div>";
  m++;
  document.getElementById("trophiesPage5").innerHTML = troPage5;
}

var p6, page6, troPage6 = "";
  p6 = tT - 50;

if (p6 < 10) {
  p6 += 50;
  page6 = trophies.slice(50, p6);
} else {
  page6 = trophies.slice(50, 60);
}

let n = 0;
while (n < page6.length) {
  if (page6[n].troAttr == "Hidden") {
    troPage6 += "<div class='trophyCard'>";
    troPage6 += "<img class='trophyLogoHidden'>";
    troPage6 += "<div>";
    troPage6 += "<p class='trophyName'>Hidden Trophy</p>";
    troPage6 += "</div>";
  } else {
    troPage6 += "<div class='trophyCard " + page6[n].troType + "'>";
    troPage6 += "<img class='trophyLogo" + page6[n].troType + "'>";
    if(page6[n].troAttr == "Unlocked") {
      troPage6 += "<img class='trophyIMG' src='" + page6[n].troIMG + "'>";
    }
    troPage6 += "<div>";
    troPage6 += "<p class='trophyName'>" + page6[n].troName + "</p>";
    troPage6 += "<p class='trophyDescription'>" + page6[n].troDesc + "</p></div>";
  }
  troPage6 += "</div>";
  n++;
  document.getElementById("trophiesPage6").innerHTML = troPage6;
}

var trophiesUnlocked = "";
trophiesUnlocked = trophies.filter(function (filter2) {
  return filter2.troAttr == "Unlocked";
});

eT = trophiesUnlocked.length;
document.getElementById("earTro").innerHTML = eT;

var myIndex = 0;
carousel();

function carousel() {
  var z;
  var y = document.getElementsByClassName("trophyColumn");
  for (z = 0; z < y.length; z++) {
    y[z].style.display = "none";
  }
  myIndex++;
  if (myIndex > y.length) {myIndex = 1}
  y[myIndex-1].style.display = "block";
  setTimeout(carousel, 30000); // Change image every 2 seconds
}
