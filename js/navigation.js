var knotscords = [77][77];         //Array für Knoten
var cords = [100][100];         //Array für Koordinaten



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
    console.log("bliblablub",solutions);
    return solutions;
  }

  function getDist(start, s) //give dinstance
  {
    var solutions = solve(graph, start);
  
    console.log("From "+start+" to "+s+":");
    //display solutions
    for(s in solutions) {
      if(!solutions[s]) continue;
      console.log(solutions[s].join(", ") + " - Dist: " + solutions[s].dist);
      console.log(" -> " + s + ": [" + solutions[s].join(", ") + "]   (dist:" + solutions[s].dist + ")");
      return solutions[s].dist;
    }
  }

  function getNodes(start, s)
  {
    var solutions = solve(graph, start);
  
    console.log("From "+start+" to "+s+":");
    //display solutions
    for(s in solutions) 
    {
      if(!solutions[s]) continue;
      var path = solutions[s].join(", ");
    }
      return path;
  }


  function findShortestMeal(start)
  {
      var results = [];
      var temp = Infinity;
      var temp2;
    
    for(var i = 0; i<9; i++)
    {
        results[i] = getDist(start, essen[i]);
        console.log("Ziel: "+essen[i]+" Distanz: "+results[i]);
        if(results[i]<temp)
        {
            temp = results[i];
            temp2 = essen[i];
        }
        console.log("temp "+temp);
    }
    console.log("Kürzeste Bude: "+temp2+" Entfernung: "+temp);
    console.log("Route: " + getNodes(start, temp2));
    alert("Kürzeste Bude: "+temp2+" Entfernung: "+temp);
  }

  function findShortestToilet(start, gender) //unready
  {
      var results = [];
      var temp = Infinity;
      var temp2;
    
    for(var i = 0; i<9; i++)
    {
        results[i] = getnodes(start, essen[i]);
        console.log("Ziel: "+essen[i]+"Distanz: "+results[i]);
        if(results[i]<temp)
        {
            temp = results[i];
            temp2 = essen[i];
        }
        console.log("temp "+temp);
    }
    console.log("Kürzeste Bude: "+temp2+" Entfernung: "+temp);
    alert("Kürzeste Bude: "+temp2+" Entfernung: "+temp);
  }


  //Variables
  var graph = {};
  
  var graph = {
    1: {2: 9},                            
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
  var toilet_m = []; //Toiletten Men
  var toilet_w = []; //Toiletten Women
  var toilet_h = []; //Toiletten Handicapped
  var exits = [8,23,77,63]; //Ausgänge
  var start;
  var gender;
  var items = 
    [
      ["A", "B",  "C",  "D",  "E1", "E2", "J",  "K1", "K2", "K3", "K4", "K5", "L",  "M",  "N",  "O",  "P",  "R",  "S",  "T"],
      [16,  13,   10,   5,    1,    75,   71,   65,   62,   59,   56,   53,   48,   45,   41,   37,   33,   29,   25,   19],
      [2,   2,    2,    2,    2,    5,    5,    5,    5,    5,    5,    5,    4,    4,    4,    4,    4,    4,    3,    3]
    ];




  //(Main)
  for(var id in layout) {
    if(!graph[id])
      graph[id] = {};
    layout[id].forEach(function(aid) {
      graph[id][aid] = 1;
      if(!graph[aid])
        graph[aid] = {};
      graph[aid][id] = 1;
    });
  }
  