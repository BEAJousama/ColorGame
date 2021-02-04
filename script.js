var numofColors = 6;
var colors = generateColor(numofColors);
var boxcolor = document.querySelectorAll(".boxes");
var selected = Pickcolor();
var newcolor = document.getElementById("new");
var selectedcolor = document.getElementById("selectedcolor");
var button = document.querySelectorAll(".button1");
selectedcolor.textContent = selected;

document.getElementById("hard").addEventListener("click", function() {
    numofColors = 6;
    colors = generateColor(numofColors);
    selected = Pickcolor();
    selectedcolor.textContent = selected;
    for (i = 0; i < boxcolor.length; i++) {

        boxcolor[i].style.backgroundColor = colors[i];

        boxcolor[i].style.display = "block";

    }
    document.getElementById("tryagain").textContent = "";
    newcolor.textContent = "NEW COLORS";
    this.classList.add("active");
    document.getElementById("easy").classList.remove("active");
});
document.getElementById("easy").addEventListener("click", function() {
    numofColors = 3;
    colors = generateColor(numofColors);
    selected = Pickcolor();
    selectedcolor.textContent = selected;
    for (i = 0; i < boxcolor.length; i++) {
        if (colors[i]) {
            boxcolor[i].style.backgroundColor = colors[i];
        } else {
            boxcolor[i].style.display = "none";
        }
    }
    document.getElementById("tryagain").textContent = "";
    newcolor.textContent = "NEW COLORS";
    this.classList.add("active");
    document.getElementById("hard").classList.remove("active");

});

document.querySelector(".button1").addEventListener("click", function() {
    for (var i = 0; i < this.length; i++) {
        this[i].style.backgroundColor = "rgb(18, 156, 190)";
    }
});

function reset() {
    window.location.reload()
    for (var i = 0; i < colors.length; i++) {
        boxcolor[i].style.backgroundColor = colors[i];
    }
    document.getElementById("tryagain").textContent = "";
    document.getElementById("main").style.backgroundColor = "rgb(18, 156, 190)";

}
newcolor.addEventListener("click", function() {
    reset();
});

for (var i = 0; i < colors.length; i++) {
    boxcolor[i].style.backgroundColor = colors[i];
    boxcolor[i].addEventListener("click", function() {
        var clicked = this.style.backgroundColor;
        if (clicked === selected) {
            document.getElementById("tryagain").textContent = "CORRECT !";
            newcolor.textContent = "PLAY AGAIN ?"
            for (var j = 0; j < colors.length; j++) {
                boxcolor[j].style.backgroundColor = clicked;
            }
            document.getElementById("main").style.backgroundColor = clicked;
        } else {
            this.style.backgroundColor = "#535353"
            document.getElementById("tryagain").textContent = "TRY AGAIN";
        }
    });
}

function Pickcolor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        arr[i] = "rgb(" + r + ", " + g + ", " + b + ")";
    }
    return arr;
}