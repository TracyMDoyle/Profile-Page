console.log("page loading..."); //checking that javaScript is loaded

//changes name
var namechange = document.getElementById("profilename");
console.log(namechange);

function changename() {
   namechange.innerText = "Jess Banana";
}
//deletes connection request and adds a friend decreases request number for first person
var requestSpan = document.querySelector("#conreq");
var connectionSpan = document.querySelector("#connections");
var request = document.querySelector(".icons2");
console.log(request);
function keep() {
    request.parentElement.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

//deletes connection request, declines first person
var requestSpan = document.querySelector("#conreq");
var request = document.querySelector(".icons2");
console.log(request);
function goaway() {
    request.parentElement.remove();
    requestSpan.innerText--;  
}

//deletes connection request and adds a friend decreases request number for second person
var request2 = document.querySelector(".icons3");
console.log(request2);
function keep2() {
    request2.parentElement.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

//deletes connection request, declines first person
var requestSpan = document.querySelector("#conreq");
var request2 = document.querySelector(".icons3");
console.log(request2);
function goaway2() {
    request2.parentElement.remove();
    requestSpan.innerText--;  
}
