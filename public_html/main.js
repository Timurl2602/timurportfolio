
// adds & removes class onClick to show correct category in projects
function showGames(){
    var games = document.getElementById("games");
    var other = document.getElementById("other");

    if(games.classList.contains("hidden")){
       games.classList.remove("hidden");
       games.classList.add("active")
       other.classList.remove("active");
       other.classList.add("hidden");
    }
 }

 // adds & removes class onClick to show correct category in projects
 function showOther(){
    var games = document.getElementById("games");
    var other = document.getElementById("other");

    if(other.classList.contains("hidden")){
       other.classList.remove("hidden");
       other.classList.add("active")
       games.classList.remove("active");
       games.classList.add("hidden");
    }
 }