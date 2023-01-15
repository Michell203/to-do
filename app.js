var nodeList = document.getElementsByTagName("li");

for(var i = 0; i < nodeList.length; i++){
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    nodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");

for(var i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector("ul");
list.addEventListener('click', function(ev){
    if(ev.target.tageName == "li"){
        ev.target.clasList.toggle('checked');
    }
}, false);

function newTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputID").value;
    var task = document.createTextNode(inputValue);
    li.appendChild(task);
    if (inputValue === '') {
      alert("Text box can't be empty");
    } else {
      document.getElementById("ulID").appendChild(li);
    }
    document.getElementById("inputID").value = "";
  
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);
  
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}