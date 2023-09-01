document.getElementById("textarea").addEventListener("input",handleChange);
function handleChange(e){
    const charFound = e.target.value.length;
    const charRem = 50-charFound;

    if(charFound === 50){
        document.getElementById("textarea").disabled = true;

    }else{
        document.getElementById("textarea").disabled = false;
    }
    document.getElementById("total-counter").innerText = charFound;
    document.getElementById("remaining-counter").innerText = charRem;

}
