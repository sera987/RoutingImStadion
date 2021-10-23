var target = "";
var wctype;

function settypeF(){
        wctype = "frau";
    document.getElementsByClassName("wctype").style.display = 'none'
}

function settypeM(){
    wctype = "mann";
document.getElementsByClassName("wctype").style.display = 'none'
}

function settypeB(){
    wctype = "behindert";
document.getElementsByClassName("wctype").style.display = 'none'
}

function submitPosition(){
    document.getElementById("popup").style.display = 'none';
    position = document.getElementById("position_inp").value + "";
    document.getElementById("position_inp").value = "";
    //document.getElementById("map").style.display = 'block';
    // document.getElementById("route").style.display = 'block';
    // document.getElementById("navbar").style.display = 'inline-block';
    // alert("test");
    switch (target) {
        case "merch":
            drawLine('lines', position, findShortestFanshop(position));
          break;
        case "wc":
            drawLine('lines', position, findShortestToilet(position));
          break;
        case "access":
            drawLine('lines', positon, findShortestAccess_H(position));
          break;
        default:
          drawLine('lines', position, findShortestMeal(position));
          break;
      }
    // findShortestMeal(position);
}

function startWC(){
    target = "wc";
    document.getElementById("wctype").style.display = 'block';
    document.getElementById("popup").style.display = 'block';
    // console.log("geht bis hier hin");
    document.getElementById("route").style.display = 'none';
}
function startFood(){
    target = "food";
    document.getElementById("popup").style.display = 'block';
    // document.getElementById("map").style.display = 'none';
    // document.getElementById("route").style.display = 'none';
}
function startAccess(){
    target = "access";
    document.getElementById("popup").style.display = 'block';
    //document.getElementById("map").style.display = 'none';
    document.getElementById("route").style.display = 'none';
}
function startMerch(){
    target = "merch";
    document.getElementById("popup").style.display = 'block';
    //document.getElementById("map").style.display = 'none';
    document.getElementById("route").style.display = 'none';
}


