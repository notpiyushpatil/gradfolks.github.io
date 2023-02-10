function display() {
  var a = document.getElementById("show_content");
  var b = document.getElementById("show_more");
  if (a.style.display == "none") {
    a.style.display = "block";
    b.innerText = "Show less";
  } else {
    a.style.display = "none";
    b.innerText = "Show more";
  }
}


function display1() {
  var a = document.getElementById("show_content1");
  var b = document.getElementById("show_more1");
  if (a.style.display == "none") {
    a.style.display = "block";
    b.innerText = "Show less";
  } else {
    a.style.display = "none";
    b.innerText = "Show more";
  }
}
