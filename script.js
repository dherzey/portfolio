$(".search-bar").on("click", function() {
	alert("Search bar under maintenance. Thank you!")
});

$(".submit-button").on("click", function() {
	alert("Search bar under maintenance. Thank you!")
});

filter("all")  // all button as active or default button

function filter(p) {
  var x, i;
  x = document.getElementsByClassName("project");  // get all project images
  if (p == "all") { p = "" };
  for (i = 0; i < x.length; i++) {
    HideElements(x[i], "show");
    if (x[i].className.indexOf(p) > -1) { ShowElements(x[i], "show") };
  }
}

// show images with specific name or class
// images outside specific class name is returned as -1
function ShowElements(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// hide images with arr1 equal to -1
function HideElements(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// make filter buttons interactive
var btnContainer = document.getElementById("projects");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}