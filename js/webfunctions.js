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
    closeNode(1);
    document.getElementById("popup").style.display = 'none';
    position = document.getElementById("position_inp").value + "";
    document.getElementById("position_inp").value = "";
    switch (target) {
        case "merch":
            drawLine('lines', position, findNearestSpot(4, position));
            insertIcon('g1012', 4, findNearestSpot(4, position));
          break;
        case "wc":
            drawLine('lines', position, findNearestToilet(position, gender));
          break;
        case "access":
            drawLine('lines', positon, findNearestSpot(2, position));
            insertIcon('g1012', 2, findNearestSpot(2, position));
          break;
        default:    //Meal
          drawLine('lines', position, findNearestSpot(1, position));
          insertIcon('g1012', 1, findNearestSpot(1, position));
          break;
      }
    // findShortestMeal(position);
}

function startWC(){
    target = "wc";
    document.getElementById("wctype").style.display = 'block';
    document.getElementById("popup").style.display = 'block';
    document.getElementById("route").style.display = 'none';
}
function startFood(){
    target = "food";
    document.getElementById("popup").style.display = 'block';
}
function startAccess(){
    target = "access";
    document.getElementById("popup").style.display = 'block';
    document.getElementById("route").style.display = 'none';
}
function startMerch(){
    target = "merch";
    document.getElementById("popup").style.display = 'block';
    document.getElementById("route").style.display = 'none';
}
