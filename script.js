console.log("hey from js")
// Neil's Likes
var neil = 9;
var neilElement = document.querySelector("#neil")

function addLikeNeil() {
    neil++;
    neilElement.innerText = neil + " like(s)";
}
// Nichole's Likes
var nichole = 12;
var nicholeElement = document.querySelector("#nichole")

function addLikeNichole() {
    nichole++;
    nicholeElement.innerText = nichole + " like(s)";
}
// Jim's likes
var jim = 9;
var jimElement = document.querySelector("#jim")

function addLikeJim() {
    jim++;
    jimElement.innerText = jim + " like(s)";
}