# day-12-hw-character-counter

## Hosted link : - https://rohitdhawale07.github.io/day-12-hw-character-counter/

This is the preojct of crating a character counter.
When we characters in Box tha characters get counted.
## HTML code
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character counter</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container">
        <h2>Real-time Charater Counter</h2>
        <textarea id="textarea" class="textarea" placeholder="Please write your text here..." maxlength="50"></textarea>
        <div class="counter-container">
          <p>
            Total Charaters:
            <span class="total-counter" id="total-counter">0</span>
          </p>
          <p>
            Remaining:
            <span class="remaining-counter" id="remaining-counter">50</span>
          </p>
        </div>
      </div>


      <script src="./index.js"></script>
    
</body>
</html>
```
## CSS code
```
body {
    margin: 0;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    background-color: rgb(250, 216, 212);
    font-family: cursive;
}
.container {
    background-color: lightpink;
    width: 400px;
    padding: 20px;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
.container h2{
    color: rgb(5, 5, 95);

}
.textarea {
    resize: none;
    width: 100%;
    height: 100px;
    font-size: 18px;
    font-family: sans-serif;
    padding: 10px;
    box-sizing: border-box;
    border: solid 2px darkgray;
}
.counter-container {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
}
```
For js part we added event listener to the textbox area of input type event.
## JAVASCRIPT code
```
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
