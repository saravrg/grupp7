// This is an array with the anchor-tags from the nav-bar
var nav = ["News", "About us", "Press", "Careers", "Contact"];
console.log( nav[0] );
console.log( nav[1] );
console.log( nav[2] );
console.log( nav[3] );
console.log( nav[4] );
console.log(nav.length);

// This is a for-loop used to repeat a specific block of code (the navbar)
var arrayLength = nav.length;
var myList = "<ul>";
for (var i = 0; i < arrayLength; i++) { myList += "<li>" + nav[i] + "</li>"; } myList += "</ul>";
document.getElementById("myTopnav").innerHTML = myList;
