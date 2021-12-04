let baseOne = "13";
let heightOne = "15";
let areaOne = `Triangle one area is ${(baseOne * heightOne)* (1/2)} cm2.`

let baseTwo = "16.5";
let heightTwo = "20.3";
let areaTwo = `Triangle two area is ${(baseTwo * heightTwo)* (1/2)} cm2.`

const diffOne = `The triangle with the biggest area is ${ areaTwo < areaOne ? 'Triangle One' : ''} ${ areaTwo > areaOne ? 'Triangle Two' : ''}.`

let areaThreeFour = `Triangle three and four has the same area of ${(baseTwo * heightTwo)* (1/2)} cm2`

const diffTwo = `The triangle with the biggest area is ${ areaTwo < areaTwo ? 'Triangle Three' : ''} ${ areaTwo > areaTwo ? 'Triangle Four' : ''} ${ areaTwo == areaTwo ? 'none since they are the same size' : ''}.`

let baseFive ="7.8";
let heightFive = "5.6";
let areaFive = `Triangle five area is ${(baseFive * heightFive)* (1/2)} cm2.`

let baseSix = "9.3";
let heightSix = "12.4";
let areaSix = `Triangle six area is ${(baseSix * heightSix)* (1/2)} cm2.`

const diffThree = `The triangle with the biggest area is ${ areaFive > areaSix ? 'Triangle Five' : ''} ${ areaFive < areaSix ? 'Triangle Six' : ''} ${ areaFive == areaSix ? 'none since they are the same size' : ''}.`

///////////// case one // 
document.getElementById("triangleOne").innerHTML = areaOne;
document.getElementById("triangleTwo").innerHTML = areaTwo;
document.getElementById("compareOne").innerHTML = diffOne;
///////////// case two //
document.getElementById("triangleThreeFour").innerHTML = areaThreeFour;
document.getElementById("compareTwo").innerHTML = diffTwo;
///////////// case three //
document.getElementById("triangleFive").innerHTML = areaFive;
document.getElementById("triangleSix").innerHTML = areaSix;
document.getElementById("compareThree").innerHTML = diffThree;


