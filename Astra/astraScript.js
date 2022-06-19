function download(fileUrl, fileName) {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
  }

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username == "Catto" && password == "DeveloperBuild1") {
      alert("Login Successful, Welcome back Catto. This also does nothing xd");
    }
}