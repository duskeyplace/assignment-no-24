function happy(a){
    alert(a);
}


function showMessage(message) {
    alert(message);
}



function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }


  var image1 = "image1.jpg";
var image2 = "image2.jpg";

function changeImage() {
  document.getElementById("myImage").src = image2;
}

function resetImage() {
  document.getElementById("myImage").src = image1;
}


var counter = 0;

function increaseCounter() {
  counter++;
  document.getElementById("counterValue").innerHTML = counter;
}

function decreaseCounter() {
  counter--;
  document.getElementById("counterValue").innerHTML = counter;
}



document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    document.getElementById("formResult").innerHTML = "First Name: " + fname + "<br>Last Name: " + lname + "<br>Email: " + email;
  });

  function readMore() {
    var contentArea = document.getElementById("contentArea");
    var fullDetails = document.getElementById("fullDetails");
    contentArea.style.display = "none";
    fullDetails.style.display = "block";
  }