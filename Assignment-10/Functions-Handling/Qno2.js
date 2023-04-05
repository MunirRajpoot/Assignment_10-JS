// 2. Write a js program to find diameter, circumference and area of circle using functions
// To find diameter circumference or area of a circle, we need radius

let radius= 5

function findDiameter(radius) {
    Diameter= 2 * radius   
 return Diameter
}
function findCicurcumference(radius) {
    circumference= 2 * 3.14 * radius
    return circumference
}
function findArea (radius){
     area= 3.14 * (radius * radius)
     return area
 }
 console.log( findDiameter(radius));
 console.log( findCicurcumference(radius));
  console.log( findArea(radius));
