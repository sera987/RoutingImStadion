function start(){
    document.getElementById("popup").style.display = 'block';
}

function submitPosition(){
    document.getElementById("popup").style.display = 'none';
    document.getElementById("start_page").style.display = 'none';
    position = document.getElementById("position_inp").value + "";
    document.getElementById("map").style.display = 'inline-block';
    // document.getElementById("navbar").style.display = 'inline-block';
    // alert("test");
    findShortestMeal(position);
}


