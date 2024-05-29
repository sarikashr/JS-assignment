const current = new Date();

const date = current.toLocaleDateString();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = days[current.getDay()];

document.write("<b>The day of today: </b>", date, "<br>");
document.write("<b>The date of today: </b>", dayName);