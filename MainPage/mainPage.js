const btnCleanEarth = document.getElementById("playNow1");
const btnGaiaPath = document.getElementById("playNow2");

btnCleanEarth.addEventListener("click", () => {
    window.location.href = "RecicleSystem/cleanEarth.html";
})

btnGaiaPath.addEventListener("click", () => {
    window.open("https://scratch.mit.edu/projects/1184276804/", "_blank");
})
