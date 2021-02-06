// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

// Click event to attach to button
function myClick () {
  // Get the values that were input into the two text boxes.
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var Gmail = document.getElementById("Gmail");
  var Yahoo = document.getElementById("Yahoo");
  var ICloud = document.getElementById("ICloud");
  var Bishops = document.getElementById("Bishops");

  var len = 0;
  text = localStorage.getItem("testJSON");
  if (text != null){
    myObj = JSON.parse(text);
    len = myObj.length;
    myObj[len] += [username, password, ''];

  } else {
    myObj = [[username, password, '']];
  }



  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";

  if (Gmail.checked) {
    myDiv.innerHTML += "\t\tGmail Login\n";
    myObj[0][2] = "Gmail";
  }
  else if (Yahoo.checked) {
    myDiv.innerHTML += "\t\tYahoo Login\n";
    myObj[0][2] = "Yahoo";
  }
  else if (ICloud.checked) {
    myDiv.innerHTML += "\t\tICloud Login\n";
    myObj[0][2] = "ICloud";
  }
  else if (Bishops.checked) {
    myDiv.innerHTML += "\t\tBishops Login\n";
    myObj[0][2] = "Bishops";
  }
  else {
    myObj[0][2] = "n/a";
  }


  myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);
  stringify1(myJSON[0][1]);
  console.log(myJSON[0][1]);
  // Notice here that we are appending the values of the variables.
  myDiv.innerHTML += "\t\t<p>Account Created</p>\n";
  myDiv.innerHTML += "<button onclick='revert()'>Back</button>"
}

function revert () {
  myDiv.innerHTML = "<label for='username'>Username:</label><input id='username' name='username' type='text' /><br />"
  myDiv.innerHTML += "<label for='password'>Password:</label><input id='password' name='password' type='text' />"
  myDiv.innerHTML += "<input type='radio' id='Gmail' name='pet' value='Gmail'><label for='Gmail'>Gmail</label><br/>"
  myDiv.innerHTML += '<input type="radio" id="Yahoo" name="pet" value="Yahoo"><label for="Yahoo">Yahoo</label><br />'
  myDiv.innerHTML += '<input type="radio" id="ICloud" name="pet" value="ICloud"><label for="ICloud">ICloud</label><br />'
  myDiv.innerHTML += '<input type="radio" id="Bishops" name="pet" value="Bishops"><label for="Bishops">Bishops</label><br />'
  myDiv.innerHTML += "<button onclick='myClick()'>Register Account</button>"
  myDiv.innerHTML += "<button onclick='myClick1()'>Find Accounts</button>"
}

function myClick1 () {
  myDiv.innerHTML = "\n<label for='username'>Search Username:</label><input id='usernameSearch' name='username' type='text' />";
  myDiv.innerHTML += "<button onclick='searchUser()'>Search By UserName</button><br/>";
}

function searchUser(){
  var usernameSearch = document.getElementById('usernameSearch').value;
  text = localStorage.getItem("testJSON");
  obj = JSON.parse(text);
  myDiv.innerHTML = "\n"
  console.log(obj);

  // Displays all usernames that match the name
  for (var i = 0, len = obj.length; i < len; i++){
      if (obj[i]["username"] == usernameSearch.value)
        myDiv.innerHTML += '<p>' + obj[i]["username"] + '<p>'
  }


}
function stringify1 (x) {
    console.log(Object.prototype.toString.call(x));
}
