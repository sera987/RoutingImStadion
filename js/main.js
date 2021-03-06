  function solve(graph, s) {
    var solutions = {};
    solutions[s] = [];
    solutions[s].dist = 0;
    
    while(true) {
      var parent = null;
      var nearest = null;
      var dist = Infinity;
      
      //for each existing solution
      for(var n in solutions) {
        if(!solutions[n])
          continue
        var ndist = solutions[n].dist;
        var adj = graph[n];
        //for each of its adjacent nodes...
        for(var a in adj) {
          //without a solution already...
          if(solutions[a])
            continue;
          //choose nearest node with lowest *total* cost
          var d = adj[a] + ndist;
          if(d < dist) {
            //reference parent
            parent = solutions[n];
            nearest = a;
            dist = d;
          }
        }
      }
      
      //no more solutions
      if(dist === Infinity) {
          break;
      }
      
      //extend parent's solution path
      solutions[nearest] = parent.concat(nearest);
      //extend parent's cost
      solutions[nearest].dist = dist;
    }
    return solutions;
  }

  function getNodes(start, ziel)
  {
      position = start;
    var solutions = solve(graph, start);

    console.log("Analyzed path from '"+start+"' to '" + ziel + "' ...");
    //display solutions
   /* for(var i in solutions) 
    {
      if(!solutions[i]) continue;
      console.log(" -> " + i + ": [" + solutions[i].join(", ") + "]   (dist:" + solutions[i].dist + ")");
    }
    */
   return solutions[ziel];
  }
/*
  function findShortestMeal(start)
  {
    var rueckgabe = [];
    var kleinsteEntfernung = Infinity;
    var naechstesEssen;

    for(var i=0; i<9; i++)
    {
      rueckgabe = getNodes(start, essen[i]);
      if(rueckgabe.dist<kleinsteEntfernung)
      {
        kleinsteEntfernung = rueckgabe.dist;
        naechstesEssen = essen[i];
      }
    }  
    console.log("Kürzeste Bude: " + naechstesEssen + " Entfernung: " + kleinsteEntfernung + " Route: " + getNodes(start, naechstesEssen));
    return getNodes(start, naechstesEssen);
  }
*/
  function findNearestToilet(start, gender)
  {
    console.log("Finding Toilet for " + gender + " ...");
    var rueckgabe = [];
    var kleinsteEntfernung = Infinity;
    var naechstesKlo;
    var toilettenpunkte = [];
    switch (gender) 
    {
      case "mann":
        toilettenpunkte = toilet_m;
        break;
      case "frau":
        toilettenpunkte = toilet_w;
        break;
      case "behindert":
        toilettenpunkte = toilet_h;
        break;
    }

    for(var i=0; i<toilettenpunkte.length; i++)
    {
      rueckgabe = getNodes(start, toilettenpunkte[i]);
      if(rueckgabe.dist<kleinsteEntfernung)
      {
        kleinsteEntfernung = rueckgabe.dist;
        naechstesKlo = toilettenpunkte[i];
      }
    }  
    console.log("Kürzeste Klo: " + naechstesKlo + " Entfernung: " + kleinsteEntfernung + " Route: " + getNodes(start, naechstesKlo));
    return getNodes(start, naechstesKlo);
  }
/*
  function findShortestAccess_H(start)
  {
    var rueckgabe = [];
    var kleinsteEntfernung = Infinity;
    var naechstesAccessH;

    for(var i=0; i<9; i++)
    {
      rueckgabe = getNodes(start, acces_h[i]);
      if(rueckgabe.dist<kleinsteEntfernung)
      {
        kleinsteEntfernung = rueckgabe.dist;
        naechstesAccessH = acces_h[i];
      }
    }  
    console.log("Kürzeste Bude: " + naechstesAccessH + " Entfernung: " + kleinsteEntfernung + " Route: " + getNodes(start, naechstesAccessH));
    return getNodes(start, naechstesAccessH);
  }

  function findShortestExit(start)
  {
    var rueckgabe = [];
    var kleinsteEntfernung = Infinity;
    var naechstesExit;

    for(var i=0; i<9; i++)
    {
      rueckgabe = getNodes(start, exits[i]);
      if(rueckgabe.dist<kleinsteEntfernung)
      {
        kleinsteEntfernung = rueckgabe.dist;
        naechstesExit = exits[i];
      }
    }  
    console.log("Kürzeste Bude: " + naechstesExit + " Entfernung: " + kleinsteEntfernung + " Route: " + getNodes(start, naechstesExit));
    return getNodes(start, naechstesExit);
  }

  function findShortestFanshop(start)
  {
    var rueckgabe = [];
    var kleinsteEntfernung = Infinity;
    var naechstesFanshop;

    for(var i=0; i<9; i++)
    {
      rueckgabe = getNodes(start, fanshop[i]);
      if(rueckgabe.dist<kleinsteEntfernung)
      {
        kleinsteEntfernung = rueckgabe.dist;
        naechstesFanshop = fanshop[i];
      }
    }  
    console.log("Kürzeste Bude: " + naechstesFanshop + " Entfernung: " + kleinsteEntfernung + " Route: " + getNodes(start, naechstesFanshop));
    return getNodes(start, naechstesFanshop);

  }
*/
  function findPathToBlock(block)
  {
    console.log("Finding Path to Block " + block);
    var pos = bloecke.push(block);
    return getNodes(bloecke_exit_nodenr[pos], bloecke_nodenr[pos]);
  }

  function findNearestSpot(spot, start)     //Spot: 1-meal, 2-Access_h, 3-exits, 4-fanshop
  {
    var rueckgabe = [];
    var wegpunkte = [];
    var kleinsteEntfernung = Infinity;
    var naechsterSpot;
    switch (spot) {
      case 1:
        wegpunkte = essen;
        break;
      case 2:
        wegpunkte = acces_h;
        break;
      case 3:
        wegpunkte = exits;
        break;
      case 4:
        wegpunkte = fanshop;
        break;
    }
    
    for(var i=0; i<wegpunkte.length; i++)
    {
      try{
      rueckgabe = getNodes(start, wegpunkte[i]);
    
      if(rueckgabe.dist<kleinsteEntfernung)
      {
        kleinsteEntfernung = rueckgabe.dist;
        naechsterSpot = wegpunkte[i];
      }
    }catch(e){continue;};
    }  
    try{
    console.log("Kürzeste Bude: " + naechsterSpot + " Entfernung: " + kleinsteEntfernung + " Route: " + getNodes(start, naechsterSpot));
    return getNodes(start, naechsterSpot);
  }catch(e){};

  }

  function closeNode(node)
  {
    console.log("Test");
    graph[11][10]=187;
    console.log(graph[11][10]);
    //for(var i=10; i<13;i++)
   // {
    //  try{
     //   graph[11][i]=Infinity;
     //   console.log(graph[11][i]);
     // }catch(e){};
   // }
  };

  function openNode(node)
  {
    for(var i=0; i<5;i++)
    {
      try{
        graph[node][i]=backupGraph[node][i];
      }catch(e){};
    }
  };

  //Variables
  var graph = {};
  var graph = {
    1: {2: 9},            //graph[1][2] --> 9             
    2: {1: 9, 4: 8.6},                      
    4: {2: 8.6, 6: 13.1},                     
    5: {6: 9},                            
    6: {4: 13.1, 5: 9, 7: 14.5},                
    7: {6: 14.5, 8: 0.1, 93: 5.8},              
    8: {0.1: 1},                                    
    10: {11: 9},                          
    11: {10: 9, 12: 11.5, 92: 0.1, 93: 5.8},      
    12: {11: 11.5, 14:11.5, 91: 16.5},
    13: {14: 9},
    14: {12: 11.5, 13:9, 15:11.5},
    15: {14:11.5, 17:11.5},
    16: {17:9},
    17: {15: 11.5, 16: 9, 18: 7.7},
    18: {17: 7.7, 90: 3.8},
    19: {20: 9},
    20: {19: 9, 21: 5, 89: 6.8},
    21: {20: 5, 88: 8.1},
    22: {86: 17.5, 88: 8.1},
    23: {26: 0.1},
    25: {26: 9},
    26: {23: 0.1, 25: 9, 27: 5.3, 86: 5},
    27: {26: 5.3, 87: 3.2},
    28: {30: 0.1, 85: 7.6},
    29: {30: 9},
    30: {28: 0.1, 29: 9, 31: 10.1},
    31: {30: 10.1, 32: 11.9},
    32: {31: 11.9, 34: 0.1},
    33: {34: 9},
    34: {32: 0.1, 33: 9, 35: 0.1},
    35: {34: 0.1, 36: 11.7},
    36: {35: 11.7, 38: 11.8},
    37: {38: 9},
    38: {36: 11.8, 37: 9, 39: 11.6},
    39: {38: 11.6, 40: 11.3},
    40: {39: 11.3, 42: 0.1},
    41: {42: 9},
    42: {40: 0.1, 41: 9, 43: 0.1},
    43: {42: 0.1, 44: 10.9},
    44: {43: 10.9, 46: 12},
    45: {46: 9},
    46: {44: 12, 45: 9, 47: 0.1},
    47: {46: 0.1, 84: 6.6},
    48: {49: 9},
    49: {48: 9, 51: 11, 83: 22.5, 84: 13.3},
    51: {49: 11, 52: 7.5, 77: 0.1},
    52: {51: 7.5, 82: 3.7},
    53: {54: 9},
    54: {53: 9, 55: 5.7, 79: 7.2},
    55: {54: 5.7, 57: 7.5},
    56: {57: 9},
    57: {55: 7.5, 56: 9, 58: 7.5},
    58: {57: 7.5, 60: 7.5},
    59: {60: 9},
    60: {58: 7.5, 59: 9, 61: 7.9},
    61: {60: 7.9, 63: 7.5, 78: 18.7},
    62: {63: 9},
    63: {61: 7.5, 62: 9, 64: 6.5},
    64: {63: 6.5, 66: 6.1},
    65: {66: 9},
    66: {64: 6.1, 65: 9, 67: 6.8},
    67: {66: 6.8, 68: 0.1, 81: 6},
    68: {67: 0.1},
    70: {72: 14.5, 80: 0.1, 81: 6},
    71: {72: 9},
    72: {70: 14.5, 71: 9, 73: 13.1},
    73: {72: 12.1, 76: 8.6},
    75: {76: 9},
    76: {73: 8.6, 75: 9},
    77: {51: 0.1},
    78: {61: 18.5},
    79: {54: 7.2, 82: 3.7},
    80: {70: 0.1},
    81: {67: 6, 70: 6},
    82: {52: 3.7, 79: 3.7},
    83: {49: 22.5},
    84: {47: 6.6, 49: 13.3},
    85: {28: 7.6, 87: 3.2},
    86: {22: 17.5, 26: 5},
    87: {27: 3.2, 85: 3.2},
    88: {21: 8.1, 22: 8.1},
    89: {20: 6.8, 90: 3.8},
    90: {18: 3.8, 89: 3.8},
    91: {12: 16.5},
    92: {11: 0.1},
    93: {7: 5.7, 11: 5.7},
  };
  //offen
  var backupGraph = {
    1: {2: 9},            //graph[1][2] --> 9             
    2: {1: 9, 4: 8.6},                      
    4: {2: 8.6, 6: 13.1},                     
    5: {6: 9},                            
    6: {4: 13.1, 5: 9, 7: 14.5},                
    7: {6: 14.5, 8: 0.1, 93: 5.8},              
    8: {0.1: 1},                                    
    10: {11: 9},                          
    11: {10: 9, 12: 11.5, 92: 0.1, 93: 5.8},      
    12: {11: 11.5, 14:11.5, 91: 16.5},
    13: {14: 9},
    14: {12: 11.5, 13:9, 15:11.5},
    15: {14:11.5, 17:11.5},
    16: {17:9},
    17: {15: 11.5, 16: 9, 18: 7.7},
    18: {17: 7.7, 90: 3.8},
    19: {20: 9},
    20: {19: 9, 21: 5, 89: 6.8},
    21: {20: 5, 88: 8.1},
    22: {86: 17.5, 88: 8.1},
    23: {26: 0.1},
    25: {26: 9},
    26: {23: 0.1, 25: 9, 27: 5.3, 86: 5},
    27: {26: 5.3, 87: 3.2},
    28: {30: 0.1, 85: 7.6},
    29: {30: 9},
    30: {28: 0.1, 29: 9, 31: 10.1},
    31: {30: 10.1, 32: 11.9},
    32: {31: 11.9, 34: 0.1},
    33: {34: 9},
    34: {32: 0.1, 33: 9, 35: 0.1},
    35: {34: 0.1, 36: 11.7},
    36: {35: 11.7, 38: 11.8},
    37: {38: 9},
    38: {36: 11.8, 37: 9, 39: 11.6},
    39: {38: 11.6, 40: 11.3},
    40: {39: 11.3, 42: 0.1},
    41: {42: 9},
    42: {40: 0.1, 41: 9, 43: 0.1},
    43: {42: 0.1, 44: 10.9},
    44: {43: 10.9, 46: 12},
    45: {46: 9},
    46: {44: 12, 45: 9, 47: 0.1},
    47: {46: 0.1, 84: 6.6},
    48: {49: 9},
    49: {48: 9, 51: 11, 83: 22.5, 84: 13.3},
    51: {49: 11, 52: 7.5, 77: 0.1},
    52: {51: 7.5, 82: 3.7},
    53: {54: 9},
    54: {53: 9, 55: 5.7, 79: 7.2},
    55: {54: 5.7, 57: 7.5},
    56: {57: 9},
    57: {55: 7.5, 56: 9, 58: 7.5},
    58: {57: 7.5, 60: 7.5},
    59: {60: 9},
    60: {58: 7.5, 59: 9, 61: 7.9},
    61: {60: 7.9, 63: 7.5, 78: 18.7},
    62: {63: 9},
    63: {61: 7.5, 62: 9, 64: 6.5},
    64: {63: 6.5, 66: 6.1},
    65: {66: 9},
    66: {64: 6.1, 65: 9, 67: 6.8},
    67: {66: 6.8, 68: 0.1, 81: 6},
    68: {67: 0.1},
    70: {72: 14.5, 80: 0.1, 81: 6},
    71: {72: 9},
    72: {70: 14.5, 71: 9, 73: 13.1},
    73: {72: 12.1, 76: 8.6},
    75: {76: 9},
    76: {73: 8.6, 75: 9},
    77: {51: 0.1},
    78: {61: 18.5},
    79: {54: 7.2, 82: 3.7},
    80: {70: 0.1},
    81: {67: 6, 70: 6},
    82: {52: 3.7, 79: 3.7},
    83: {49: 22.5},
    84: {47: 6.6, 49: 13.3},
    85: {28: 7.6, 87: 3.2},
    86: {22: 17.5, 26: 5},
    87: {27: 3.2, 85: 3.2},
    88: {21: 8.1, 22: 8.1},
    89: {20: 6.8, 90: 3.8},
    90: {18: 3.8, 89: 3.8},
    91: {12: 16.5},
    92: {11: 0.1},
    93: {7: 5.7, 11: 5.7},
  };

  //Array Kreuzunggspunkte für Zielpunkte:
  var essen = [7,15,22,36,39,51,58,61,70]; //Essbuden
  var toilet_m = [4,12,18,89,86,31,44,52,55,64,73]; //Toiletten Men
  var toilet_w = [4,12,21,27,31,44,79,67,73]; //Toiletten Women
  var toilet_h = [28,32,35,40,43,47]; //Toiletten Handicapped
  var acces_h = [29,33,37,41,45,48]; //Eingänge Handicapped
  var exits = [8,23,68,77,80,92]; //Ausgänge
  var fanshop = [78, 83, 91]; //Fanshops
  var start;
  var gender;
  var bloecke =              ["A", "B",  "C",  "D",  "E", "F", "J",  "K1", "K2", "K3", "K4", "K5", "L",  "M",  "N",  "O",  "P",  "R",  "S",  "T"];
  var bloecke_nodenr =       [16,  13,   10,   5,    1,    75,   71,   65,   62,   59,   56,   53,   48,   45,   41,   37,   33,   29,   25,   19];
  var bloecke_exit =         [2,   2,    2,    2,    2,    5,    5,    5,    5,    5,    5,    5,    4,    4,    4,    4,    4,    4,    3,    3];
  var bloecke_exit_nodenr =  [92,  92,   92,   8,    8,    80,   80,   68,   68,   68,   68,   68,   77,   77,   77,   77,   77,   77,   23,   23]; 

  function drawLine(parent_id, start_knoten, knoten_inp){
    start_knoten = start_knoten + "";
    var knoten_tmp = knoten_inp + "";
    var knoten = knoten_tmp.split(",");
    // alert(start_knoten);
    // alert(document.getElementById(start_knoten));
    const pathBBox = document.getElementById(start_knoten).getBBox();
    var curr = [pathBBox.x + pathBBox.width/2, pathBBox.y + pathBBox.height/2];
    var path = "M" + curr[0] + " " + curr[1] + ", ";
    for (let i = 0; i < knoten.length; i++) {
        const pathBBox = document.getElementById(knoten[i]).getBBox();
        var curr = [pathBBox.x + pathBBox.width/2, pathBBox.y + pathBBox.height/2];
        path += "L" + curr[0] + " " + curr[1] + ", ";
    }

    svg = document.getElementById(parent_id);
    newpath = document.createElementNS("http://www.w3.org/2000/svg","path");  
    newpath.setAttributeNS(null, "id", "pathIdD");  
    newpath.setAttributeNS(null, "d", path);  
    newpath.setAttributeNS(null, "stroke", "var(--sgd-red)"); 
    newpath.setAttributeNS(null, "stroke-width", 2);  
    newpath.setAttributeNS(null, "opacity", 1);  
    newpath.setAttributeNS(null, "fill", "none");
    try {
        document.getElementById("pathIdD").remove();
    } catch (error) {
    }

    svg.appendChild(newpath);
  }


  
function insertIcon(parent_id, kat, knoten){
  var knoten_tmp = knoten + "";     
  var tmp = knoten_tmp.split(",");
  var lastknoten = tmp[tmp.length - 1];

  const pathBBox = document.getElementById(lastknoten).getBBox();
  var x = pathBBox.x - 5;
  var y = pathBBox.y - 5;

  var svg = document.getElementById(parent_id);

  var svgimg = document.createElementNS('http://www.w3.org/2000/svg','image');
  svgimg.setAttributeNS(null, "id", "icon");
  svgimg.setAttributeNS(null, "height", "10");
  svgimg.setAttributeNS(null, "width", "10");
  svgimg.setAttributeNS(null, "x", x);
  svgimg.setAttributeNS(null, "y", y);
  
  switch (kat) {
      case 1:
        svgimg.setAttributeNS(null, "href", "img/food_color.svg");
        break;
      case 2:
        svgimg.setAttributeNS(null, "href", "img/rollstuhl_color.svg");
        break;
      case 3:
        svgimg.setAttributeNS(null, "href", "img/food_color.svg");
        break;
      case 4:
        svgimg.setAttributeNS(null, "href", "img/merch_color.svg");
        break;
      case 5:
        svgimg.setAttributeNS(null, "href", "img/toilets_color.svg");
        break;
    }
  
  try {
    document.getElementById("icon").remove();
  } catch (error) {
  }

  svg.appendChild(svgimg);
}