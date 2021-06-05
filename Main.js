//console.log("Hello World");

const investigators = ["Jim Culver", "Ashcan Pete", "Ursula Downs", "Zoey Samaras", "Leo Anderson", "Trish Scarborough", "Silas Marsh", "Jenny Barnes", "Skids O'Toole", "Winnifred Habbamock", "Stella Clark", "Nathanial Cho", "Minh Thi Phan", "Norman Withers", "Daisy Walker", "Roland Banks"];
const verbs = ["investigates", "explores", "stabs", "goes insane in", "runs away from", "embraces darkness in"];
const campaigns = ["Dunwich", "Carcosa", "the forgotten age", "the circle undone", "the dreamlands", "the Innsmouth conspiracy"];

function randomElement(array){
    return array[Math.floor(Math.random()*array.length)];
}

console.log(randomElement(investigators));