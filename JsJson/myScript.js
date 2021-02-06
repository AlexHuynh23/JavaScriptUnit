// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);
var i = 0;
// Click event to attach to button
function myClick () {
  // Get the values that were input into the two text boxes.
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var Gmail = document.getElementById("Gmail");
  var Yahoo = document.getElementById("Yahoo");
  var ICloud = document.getElementById("ICloud");
  var Bishops = document.getElementById("Bishops");

  myObj= {
    "username": username,
    "password": password,
    "email": '',
  }

  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";

  if (Gmail.checked) {
    myDiv.innerHTML += "\t\tGmail Login\n";
    myObj['email'] = "Gmail";
  }
  else if (Yahoo.checked) {
    myDiv.innerHTML += "\t\tYahoo Login\n";
    myObj['email'] = "Yahoo";
  }
  else if (ICloud.checked) {
    myDiv.innerHTML += "\t\tICloud Login\n";
    myObj['email'] = "ICloud";
  }
  else if (Bishops.checked) {
    myDiv.innerHTML += "\t\tBishops Login\n";
    myObj['email'] = "Bishops";
  }
  else {
    myObj['email'] = "n/a";
  }

  //String parces a number at the end of the local storage to identify users
  n = i.toString();
  i += 1;
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON"+n, myJSON);

  // Logs last account registered

  // Notice here that we are appending the values of the variables.

  myDiv.innerHTML += "\t\t<p>" + myObj['username'] + "'s email is: " + myObj['email'],". Account created</p>\n";
  myDiv.innerHTML += "<button onclick='revert()'>Back</button><br/><div/>";
}
function revert () {
  //Altered version of the home screen that appears when the button back is pressed.
  myDiv.innerHTML = "<label for='username'>Username:</label><input id='username' name='username' type='text' /><br />"
  myDiv.innerHTML += "<label for='password'>Password:</label><input id='password' name='password' type='text' /><br />"
  myDiv.innerHTML += "<input type='radio' id='Gmail' name='pet' value='Gmail'><label for='Gmail'>Gmail</label><br/>"
  myDiv.innerHTML += '<input type="radio" id="Yahoo" name="pet" value="Yahoo"><label for="Yahoo">Yahoo</label><br />'
  myDiv.innerHTML += '<input type="radio" id="ICloud" name="pet" value="ICloud"><label for="ICloud">ICloud</label><br />'
  myDiv.innerHTML += '<input type="radio" id="Bishops" name="pet" value="Bishops"><label for="Bishops">Bishops</label><br />'
  myDiv.innerHTML += "<button onclick='myClick()'>Register Account</button><br/>"
  myDiv.innerHTML += "<label for='search'>Search Username:</label><input id='search' name='search' type='text'/>"
  myDiv.innerHTML += "<button onclick='searchUser()'>Search By UserName</button><br/>"
}


function searchUser(){
  var usernameSearch = document.getElementById('search').value;
  myDiv.innerHTML = "\n";

  console.log(usernameSearch);
  for (j = 0; j < i; j++) {
    //Takes user from local storage
    text = localStorage.getItem("testJSON"+j);
    obj = JSON.parse(text);
    objectUser = obj['username'];


    console.log(objectUser);
    console.log(usernameSearch);
    console.log(obj);

    //Displays users who match what the current user searched and what domain they use
    if (objectUser == usernameSearch){
      console.log(obj);
      myDiv.innerHTML += "\t\t<p>User " + obj['username'] + " is on " + obj["email"],"</p><br />";
    }
  }
  myDiv.innerHTML += "<button onclick='revert()'>Back</button><br/><div/>";
}
