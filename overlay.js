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
    
    return solutions;
  }

  function getnodes(start, s) //Pfade ausgeben
  {
    var solutions = solve(graph, start);
  
    console.log("From "+start+" to "+s+":");
    //display solutions
    //or(s in solutions) {
      //if(!solutions[s]) continue;
      //console.log(solutions[s].join(", ") + " - Dist: " + solutions[s].dist);
      //console.log(" -> " + s + ": [" + solutions[s].join(", ") + "]   (dist:" + solutions[s].dist + ")");
      return solutions[s].dist;
    //}
  }



  function findShortestMeal(start)
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
  }


  //create graph
  var graph = {};
  
  var graph = {
    1: {2: 1},
    2: {1: 1, 3: 1},
    3: {2: 1, 4: 1},
    4: {3: 1, 6: 1},
    5: {6: 1},
    6: {4: 1, 5: 1, 7: 1},
    7: {6: 1, 9: 1},
    8: {9: 1},
    9: {7: 1, 8: 1, 11: 1},
    10: {11: 1},
    11: {9: 1, 10: 1, 12: 1},
    12: {11: 1, 14:1},
    13: {14: 1},
    14: {12: 1, 13:1, 15:1},
    15: {14:1, 17:1},
    16: {17:1},
    17: {15: 1, 16: 1, 18: 1},
    18: {17: 1, 20: 1},
    19: {20: 1},
    20: {18: 1, 21: 1},
    21: {20: 1, 22: 1},
    22: {21: 1, 24: 1},
    23: {24: 1},
    24: {22: 1, 23: 1, 26: 1},
    25: {26: 1},
    26: {24: 1, 27: 1},
    27: {26: 1, 28: 1},
    28: {27: 1, 30: 1},
    29: {30: 1},
    30: {28: 1, 29: 1, 31: 1},
    31: {30: 1, 32: 1},
    32: {31: 1, 34: 1},
    33: {34: 1},
    34: {32: 1, 33: 1, 35: 1},
    35: {34: 1, 36: 1},
    36: {35: 1, 38: 1},
    37: {38: 1},
    38: {36: 1, 37: 1, 39: 1},
    39: {38: 1, 40: 1},
    40: {39: 1, 42: 1},
    41: {42: 1},
    42: {40: 1, 41: 1, 43: 1},
    43: {42: 1, 44: 1},
    44: {43: 1, 46: 1},
    45: {46: 1},
    46: {44: 1, 45: 1, 47: 1},
    47: {46: 1, 49: 1},
    48: {49: 1},
    49: {47: 1, 48: 1, 50: 1},
    50: {49: 1, 51: 1, 77: 1},
    51: {50: 1, 52: 1},
    52: {51: 1, 54: 1},
    53: {54: 1},
    54: {52: 1, 53: 1, 55: 1},
    55: {54: 1, 57: 1},
    56: {57: 1},
    57: {55: 1, 56: 1, 58: 1},
    58: {57: 1, 60: 1},
    59: {60: 1},
    60: {58: 1, 59: 1, 61: 1},
    61: {60: 1, 63: 1},
    62: {63: 1},
    63: {61: 1, 62: 1, 64: 1},
    64: {63: 1, 66: 1},
    65: {66: 1},
    66: {64: 1, 65: 1, 67: 1},
    67: {66: 1, 69: 1},
    68: {69: 1},
    69: {67: 1, 68: 1, 70: 1},
    70: {69: 1, 72: 1},
    71: {72: 1},
    72: {70: 1, 71: 1, 73: 1},
    73: {72: 1, 74: 1},
    74: {73: 1, 76: 1},
    75: {76: 1},
    76: {74: 1, 75: 1},
    77: {50: 1},
  };

  var essen = [7,15,22,36,39,51,58,61,70];

  var start;
  
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
  