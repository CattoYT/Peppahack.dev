//using the same code for astraScript.js cause I'm lazy + its funny
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var acceptedUserNames = ["Anticheat Alert", "Catto"];
  var loginStatus = false;

  if (acceptedUserNames.indexOf(username) >= 0 && password == "DeveloperBuild1") {
    console.log("Login successful");
    alert("Login Successful, Welcome back " + username + "! This also does nothing xd");
    loginStatus = true;
    
    //this is so ez to force a login but im not a security engineer
  }
  else {
    console.log("Login failed");
    alert("Login failed, please try again");
  }
    /*this took way too long i hate it so much faihrwuyahruwyarhtyu7ahtuyhawuyhtuywahtuaywhta subscribe to cattoyt and anticheat verbose i cant even this is a comment that i will probably forget to delete
    */
   if(loginStatus == true) {
    alert("Good Luck!");
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
   }
}
