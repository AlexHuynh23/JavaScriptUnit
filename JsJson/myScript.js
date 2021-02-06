// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

// Click event to attach to button
function myClick () {
  // Get the values that were input into the two text boxes.
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  var Gmail = document.getElementById("Gmail");
  var Yahoo = document.getElementById("Yahoo");
  var ICloud = document.getElementById("ICloud");
  var Bishops = document.getElementById("Bishops");

  myObj = {
    "username": username,
    "password": password,
    "email": '',
  }

  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";

  if (Gmail.checked) {
    myDiv.innerHTML += "\t\tGmail Login\n";
    myJSON['email'] = "Gmail";
  }
  else if (Yahoo.checked) {
    myDiv.innerHTML += "\t\tYahoo Login\n";
    myJSON['email'] = "Yahoo";
  }
  else if (ICloud.checked) {
    myDiv.innerHTML += "\t\tICloud Login\n";
    myJSON['email'] = "ICloud";
  }
  else if (Bishops.checked) {
    myDiv.innerHTML += "\t\tBishops Login\n";
    myJSON['email'] = "Bishops";
  }
  else {
    myJSON['email'] = "n/a";
  }


  myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);


  // Notice here that we are appending the values of the variables.
  myDiv.innerHTML += "\t\t<p>" + myJSON['username'] + "'s email  is: " + myJSON['email'] + "</p>\n";
}

function myClick1 () {
  myDiv.innerHTML = "\n<div id = 'search'><label for='username'>Search Username:</label><input id='usernameSearch' name='username' type='text' />";
  myDiv.innerHTML += "<button onclick='searchUser()'>Search By UserName</button><br/>";
  myDiv.innerHTML += "<input type='radio' id='Gmail' name='pet' value='Gmail'><label for='Gmail'>Gmail</label><br/>"
  myDiv.innerHTML += '<input type="radio" id="Yahoo" name="pet" value="Yahoo"><label for="Yahoo">Yahoo</label><br />'
  myDiv.innerHTML += '<input type="radio" id="ICloud" name="pet" value="ICloud"><label for="ICloud">ICloud</label><br />'
  myDiv.innerHTML += '<input type="radio" id="Bishops" name="pet" value="Bishops"><label for="Bishops">Bishops</label><br />'
  myDiv.innerHTML += "<button onclick='searchEmail()'>Search By Email</button><br/><div/>";

}

function searchUser(){
  text = localStorage.getItem("testJSON");
  obj = JSON.parse(text);
  document.getElementById("demo").innerHTML = obj.name;
}
function searchEmail(){

}
