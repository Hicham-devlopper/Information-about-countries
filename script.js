const input = document.getElementById("countryInput");

input.addEventListener("keyup", function(event){

if(event.key === "Enter"){
getCountry();
}

});

function getCountry() {

let country = document.getElementById("countryInput").value;

fetch(`https://restcountries.com/v3.1/name/${country}`)
.then(response => response.json())
.then(data => {

let c = data[0];

let capital = c.capital ? c.capital[0] : "غير متوفر";
let area = c.area + " km²";
let continent = c.continents[0];
let population = c.population.toLocaleString();

let languages = "غير متوفر";
if (c.languages) {
languages = Object.values(c.languages).join(", ");
}

document.getElementById("result").innerHTML = `
<h2>${c.name.common}</h2>

<p>🏛️ العاصمة: ${capital}</p>
<p>🗣️ اللغة الرسمية: ${languages}</p>
<p>👥 عدد السكان: ${population}</p>
<p>📏 المساحة: ${area}</p>
<p>🌍 القارة: ${continent}</p>

<img src="${c.flags.png}" width="120">
`;

})
.catch(() => {
document.getElementById("result").innerHTML =
"<p>❌ THIS COUNTRY DOES NOT EXIST</p>";
});

}