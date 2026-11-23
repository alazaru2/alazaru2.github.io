let square = document.getElementById("square")
let buttons = document.querySelectorAll("button");
for(let x = 0; x < buttons.length; x += 1){
    buttons[x].style.fontSize = "16px"
}
document
    .getElementById("randsize")
    .addEventListener("click", function() {
        let randfontsize = Math.floor(Math.random() * 100)
        for(let x = 0; x < buttons.length; x += 1){
            buttons[x].style.fontSize = randfontsize + "px"
        }
        
        console.log("font size = " + buttons[0].style.fontSize)

    });

document
    .getElementById("randbg")
    .addEventListener("mouseover", function() {
        square.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255)
      + "," + Math.floor(Math.random() * 255) + "," 
      + Math.floor(Math.random() * 255) + ")" 
      //random color code thanks to Explosion Pills on Stack Overflow: https://stackoverflow.com/questions/14984643/css-pick-a-random-color-from-array
      console.log("background color = " + square.style.backgroundColor);
    });

    document
    .getElementById("upsize")
    .addEventListener("dblclick", function() {
        for(let x = 0; x < buttons.length; x += 1){
            let currentSize = parseFloat(buttons[x].style.fontSize)
            buttons[x].style.fontSize =  (currentSize + 10) + "px"
        }
        
        console.log("font size = " + buttons[0].style.fontSize)

    });

    document
    .addEventListener("keypress", function() {
        for(let x = 0; x < buttons.length; x += 1){
            let currentSize = parseFloat(buttons[x].style.fontSize)
            buttons[x].style.fontSize =  (currentSize - 10) + "px"
        }
        
        console.log("font size = " + buttons[0].style.fontSize)

    });

        document
    .getElementById("buttonbg")
    .addEventListener("wheel", function() {
        let randColor = "rgb(" + Math.floor(Math.random() * 255)
      + "," + Math.floor(Math.random() * 255) + "," 
      + Math.floor(Math.random() * 255) + ")" 
        for(let x = 0; x < buttons.length; x += 1){
            buttons[x].style.backgroundColor =  randColor
        }
        
        console.log("button color = " + randColor)

    });