function rollDice()
{
    let num = Math.floor(Math.random()*6) + 1;
    document.getElementById("result").textContent = num;
}