const calcBtn = document.querySelector("#calcBtn");
const resaultMBI = document.querySelector("#mbi");
const conclusion = document.querySelector("#conclusion");

const mbiCalc = (Kilogram, Meter) => {
    const MBI = Kilogram / Meter;
    return MBI;
}

calcBtn.addEventListener("click", () => {
    resaultMBI.textContent = '';
    conclusion.textContent = "";
    const KG = document.querySelector("#height").value;
    const meter = Math.pow((document.querySelector("#width").value / 100), 2);
    const res = Math.floor(KG / meter);
    console.log(res)
    if (res <= 18.5) {
        resaultMBI.textContent = res;
        conclusion.textContent = "Underweight";
        conclusion.style.color = "#3333ff";
    } else if (res > 18.5 && res <= 24.9) {
        resaultMBI.textContent = res;
        conclusion.textContent = "Healthy";
        conclusion.style.color = "#04bf39";
    } else if (res >= 25 && res <= 34.9) {
        resaultMBI.textContent = res;
        conclusion.textContent = "Overweight";
        conclusion.style.color = "#df822f";
    } else {
        resaultMBI.textContent = res;
        conclusion.textContent = "Obese";
        conclusion.style.color = "#c71c1c"
    }
})