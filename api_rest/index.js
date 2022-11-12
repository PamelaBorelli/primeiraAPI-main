var XMLHttprequest = require ('xhr2');

var url = "http://pokeapi.co/api/v2/pokemon/ditto";
var xhr = new XMLHttprequest();
xhr.open("GET", url);
xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
        }
    
};

xhr.send();