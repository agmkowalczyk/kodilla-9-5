//  ----- ZADANIE 9.5 -----

var classButton = document.getElementsByClassName('button');

for (var i=0; i < classButton.length; i++) {
  //alert (classButton[i].innerText);
    var newLine = document.createElement('p');
    newLine.innerHTML = classButton[i].innerHTML;
    document.body.appendChild(newLine);
}
