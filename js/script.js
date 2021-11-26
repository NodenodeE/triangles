// `Triangle One has an area of xx cm2 and 
// Triangle Two has an areaof xx cm2. 
// The triangle with the biggest area is Triangle xx.`

///////////////// variables

var one = "Triangle One";
var two = "Triangle two";
var areaOne = area(15, 13);
var areaTwo = area(16.5, 20.3);

var three = "Triangle Three";
var four = "Triangle Four";
// area three and four has the same value as areaTwo

var five = "Triangle Five";
var six = "Triangle Six";
var areaFive = area(7.8, 5.6);
var areaSix = area(9.3, 12.4);

var big = " The triangle with the biggest area is "
var same = " There is no difference in size between the triangles"

function area(a, b) { 
  return  ' has an area of ' + (a * b) / 2 + ' cm2';
}

document.getElementById("caseOne").innerHTML=
one + areaOne + " and " + two + areaTwo + "." + big + two + ".";

document.getElementById("caseTwo").innerHTML=
three + " and " + four + areaTwo + " . " + same + ".";

document.getElementById("caseThree").innerHTML=
five + areaFive + " and " + six + areaSix + "." + big + six + ".";
