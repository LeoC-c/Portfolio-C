var a = 0;
var txt = "Bem Vindo, eu me chamo Leonardo.";
var speed = 90;
var texto = document.getElementById("titles");
// Create am element than create a stle for it
// add content to the element
// and make the texto(h1) append as child the new element
var pipe = document.createElement("span");
pipe.classList.add("pipe_style");
pipe.textContent = "|";
texto.appendChild(pipe);

function typeWriter() {
    // if a is less than the text length(comprimento)
    // add on texto(h1) DOM 1+ character at time
    // until a is the same length as txt
    if(a < txt.length) {
        pipe.before(txt.charAt(a));
        a++;
        setTimeout(typeWriter, speed);
    
    } else if(a >= txt.length){
        pipe.style.display = "inline-block";
        pipe.style.transform = "scaleY(0)";
        pipe.style.transition = "ease-out 0.5s";
    }

}

window.onload = typeWriter;