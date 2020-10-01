console.log("here is today's  date ");
let today = new Date();
let format = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = `date : ${format}`;


function userName(){
    let username = document.getElementById('name');
    let username1 = document.getElementById('name1');
    var name = prompt('enter name', username.innerText);
    username.innerHTML = name;
    username1.innerText = name
}
function lastName(){
    let lastname = document.getElementById('last');
    let lastname1 = document.getElementById('name2');
    var last = prompt('enter last name',lastname.innerText);
    lastname.innerHTML = last;
    lastname1.innerText = last
}

let tpt = document.getElementById('txt');
tpt.innerHTML = txt   
tpt.innerText = "hello text me";
//cover...

