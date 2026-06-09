function analyzeGas(){

    let smell =
    Number(document.getElementById("smell").value);

    let sound =
    Number(document.getElementById("sound").value);

    let ventilation =
    Number(document.getElementById("ventilation").value);

    let risk =
    smell + sound + ventilation;

    risk = Math.round(risk);

    document.getElementById("risk").innerText =
    risk + "%";

    let progress =
    document.getElementById("progress");

    progress.style.width =
    risk + "%";

    let status = "";
    let recommendation = "";

    if(risk <= 30){

        status = "SAFE";
        progress.style.background = "green";

        recommendation =
        "✔ No gas leak risk detected.";
    }

    else if(risk <= 70){

        status = "WARNING";
        progress.style.background = "orange";

        recommendation =
        "⚠ Check gas appliances and ventilation.";
    }

    else{

        status = "DANGER";
        progress.style.background = "red";

        recommendation =
        "🚨 Open windows immediately and leave area!";
    }

    // String Method
    status = status.toUpperCase();

    document.getElementById("status").innerText =
    status;

    document.getElementById("recommendation").innerText =
    recommendation;

   // Random Safety Tips
const tips = [
    "Always smell gas before turning on stove",
    "Keep windows open for ventilation",
    "Turn off gas valve if smell is strong",
    "Do not use electrical switches during leak",
    "Install gas detector at home"
];

let randomIndex = Math.floor(Math.random() * tips.length);

document.getElementById("time").innerText =
"💡 Safety Tip: " + tips[randomIndex];
}