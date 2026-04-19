const myName = "Muwanguzi Joshua Benhine";
const target = document.getElementById("typing-target");
let i = 0;

function typeWriter() {
    if (i < myName.length) {
        target.innerHTML += myName.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = () => {
    setTimeout(typeWriter, 500);
};