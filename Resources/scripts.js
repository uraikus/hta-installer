var path = location.pathname.replace(/\\/g, "/").replace("/C:/", "C:/").replace(/%20/g, " ").replace("Installer Compiler.hta", "");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var installer;
var files;

window.onload = function() {
  log("Initializing...");
  installer = document.getElementById("installer").contentDocument;
  files = JSON.parse(readFile("Installer/files.json"));
  for (var x = 0; x < files.to.length; x++) {
    preserveFileData(files.from[x], files.to[x]);
  }
  installer.getElementById("fName").innerText = fName;
  installer.getElementById("foldersList").innerText = JSON.stringify(folder);
  if (iType === "local") {
    installer.getElementById("netPath").innerText = "false";
    installer.getElementById("netPath").parentElement.style.display = "none";
  }
  else if (iType === "network") {
    installer.getElementById("locPath").innerText = "false";
    installer.getElementById("locPath").parentElement.style.display = "none";
  }
  var fileData = "<DOCTYPE html>" + installer.documentElement.outerHTML;
  saveFile(fName + ".hta", fileData);
  log("Completed!");
}
function saveFile(path, data) {
  log("Saving " + path);
  var textFile = fso.CreateTextFile(path, true, true);
  textFile.Write(data);
  textFile.Close();
  log("File saved.");
}
function readFile(fileName) {
  log("Opening " + path + fileName);
  var textFile = fso.OpenTextFile(path + fileName, 1, false, -1);
  var text = textFile.ReadAll();
  textFile.Close();
  log("File opened.");
  return text;
}
function preserveFileData(from, to) {
  var fileData = readFile("Files/" + from);
  var span = installer.createElement("SPAN");
  span.innerText = fileData;
  span.dataset.to = to;
  span.setAttribute("class", "file");
  installer.body.appendChild(span);
}
function log(text) {
 var h2 = document.createElement("H2");
 h2.innerText = text;
 document.body.appendChild(h2);
}
