var target = "";
var wctype = "mann";

function settypeF(){
    wctype = "frau";
    document.getElementsByClassName("wctype").style.display = 'none';
    console.log("Geschlecht set to: " + wctype);
}

function settypeM(){
    wctype = "mann";
    document.getElementsByClassName("wctype").style.display = 'none';
    console.log("Geschlecht set to: " + wctype);
}

function settypeB(){
    wctype = "behindert";
    document.getElementsByClassName("wctype").style.display = 'none';
    console.log("Geschlecht set to: " + wctype);
}

function getRadioValue() {
    var ele = document.getElementsByName('Auswahl');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        var tmp = ele[i].id;
        // alert(tmp);

    }
    return tmp;
}

function submitPosition(){
    closeNode(1);

    tmp = getRadioValue();

    for(i=0; i < bloecke.length; i++){
        if(tmp == bloecke[i]){
            var position = bloecke_nodenr[i];
        }
    }

    // alert(position);



    switch (target) {
        case "merch":
            drawLine('lines', position, findNearestSpot(4, position));
            insertIcon('g1012', 4, findNearestSpot(4, position));
            break;
        case "wc":
            drawLine('lines', position, findNearestToilet(position, wctype));
            insertIcon('g1012', 5, findNearestToilet(position, wctype));
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
    submitPosition();
    // document.getElementById("wctype").style.display = 'block';
    // document.getElementById("popup").style.display = 'block';
}
function startFood(){
    target = "food";
    submitPosition();
    // document.getElementById("popup").style.display = 'block';
}
function startAccess(){
    target = "access";
    submitPosition();
    // document.getElementById("popup").style.display = 'block';
}
function startMerch(){
    target = "merch";
    submitPosition();
    // document.getElementById("popup").style.display = 'block';
}
