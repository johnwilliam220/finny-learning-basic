console.log("here is today's  date ");
let today = new Date();
let format = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = `date : ${format}`;


function userName(){
    let username = document.getElementById('name');
    var name = prompt('enter name', username.innerText);
    console.log('name is ',name);
    username.innerHTML = name;
    let coverName = document.getElementById('cover');
       coverName.innerHTML = name;
}
function lastName(){
    let lastname = document.getElementById('last');
    var last = prompt('enter last name',lastname.innerText);
    console.log('lastname is',last);
    lastname.innerHTML = last;
}

//cover...

