function sayhello() {
   var greet= document.getElementById("names").value;
    var message ="<h2>Hello" +" "+ greet + "!</h2>";
    //document.getElementById("Space").innerHTML=message;
    document.querySelector("#Space").innerHTML=message;
    
}
//document.querySelector("button").addEventListener("click",sayhello);
//document.querySelector("button").onclick=sayhello;
