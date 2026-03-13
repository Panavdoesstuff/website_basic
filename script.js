function rollDice()
{
    let num = Math.floor(Math.random()*6) + 1;
    document.getElementById("result").textContent = num;
}

function funfunc()
{
    let number = Math.floor(Math.random()*3) + 1;
    if(number==1) emoji = ":)";
    else if(number==2) emoji = "<3";
    else if(number==3) emoji = "67";
    document.getElementById("res").textContent = emoji;
}